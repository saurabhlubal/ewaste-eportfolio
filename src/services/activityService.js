import { supabase, isSupabaseConfigured, STORAGE_BUCKET } from "./supabase";
import initialAssignments from "../data/assignments";

const LOCAL_STORAGE_KEY = "ewaste_portfolio_activities_local";

// Helper to convert existing static assignments to the full activity model
export const convertStaticAssignments = () => {
  return initialAssignments.map((item) => ({
    id: String(item.id),
    title: item.title,
    description: item.description?.trim() || item.shortDescription || "",
    category: "E-Waste",
    date: item.date || new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    remarks: item.shortDescription || "",
    tags: ["E-Waste", "Sustainability"],
    links: [],
    fileName: item.pdf ? "crossword.pdf" : (item.image ? "assignment-01.jpeg" : "document.pdf"),
    fileType: item.pdf ? "application/pdf" : (item.image ? "image/jpeg" : "application/pdf"),
    fileSize: 1024 * 1024,
    fileUrl: item.pdf || item.image || "",
    storagePath: null,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  }));
};

// Local storage fallback helpers
const getLocalActivities = () => {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed) && parsed.length > 0) return parsed;
    }
  } catch (e) {
    console.warn("Failed to read from localStorage:", e);
  }
  const defaultActivities = convertStaticAssignments();
  saveLocalActivities(defaultActivities);
  return defaultActivities;
};

const saveLocalActivities = (activities) => {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(activities));
  } catch (e) {
    console.warn("Failed to write to localStorage:", e);
  }
};

/**
 * Fetch all activities
 */
export async function getActivities() {
  if (!isSupabaseConfigured() || !supabase) {
    return getLocalActivities();
  }

  try {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error("Supabase fetch activities error:", error);
      return getLocalActivities();
    }

    // If Supabase table is empty, auto-seed with existing activities
    if (!data || data.length === 0) {
      const seeded = await seedExistingAssignments();
      return seeded;
    }

    // Format DB columns (snake_case) to camelCase for React components
    return data.map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      category: row.category || "E-Waste",
      date: row.date,
      remarks: row.remarks || "",
      tags: Array.isArray(row.tags) ? row.tags : (row.tags ? [row.tags] : []),
      links: Array.isArray(row.links) ? row.links : (row.links ? JSON.parse(row.links) : []),
      fileName: row.file_name || "",
      fileType: row.file_type || "",
      fileSize: row.file_size || 0,
      fileUrl: row.file_url || "",
      storagePath: row.storage_path || null,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));
  } catch (err) {
    console.error("Unexpected error in getActivities:", err);
    return getLocalActivities();
  }
}

/**
 * Fetch a single activity by ID
 */
export async function getActivityById(id) {
  if (!isSupabaseConfigured() || !supabase) {
    const all = getLocalActivities();
    return all.find((item) => String(item.id) === String(id)) || null;
  }

  try {
    const { data, error } = await supabase
      .from("activities")
      .select("*")
      .eq("id", id)
      .single();

    if (error || !data) {
      // Check fallback
      const all = getLocalActivities();
      return all.find((item) => String(item.id) === String(id)) || null;
    }

    return {
      id: data.id,
      title: data.title,
      description: data.description,
      category: data.category || "E-Waste",
      date: data.date,
      remarks: data.remarks || "",
      tags: Array.isArray(data.tags) ? data.tags : (data.tags ? [data.tags] : []),
      links: Array.isArray(data.links) ? data.links : (data.links ? JSON.parse(data.links) : []),
      fileName: data.file_name || "",
      fileType: data.file_type || "",
      fileSize: data.file_size || 0,
      fileUrl: data.file_url || "",
      storagePath: data.storage_path || null,
      createdAt: data.created_at,
      updatedAt: data.updated_at,
    };
  } catch (err) {
    console.error("Unexpected error in getActivityById:", err);
    const all = getLocalActivities();
    return all.find((item) => String(item.id) === String(id)) || null;
  }
}

/**
 * Upload a file to Supabase Storage
 */
export async function uploadActivityFile(file) {
  if (!file) throw new Error("No file provided for upload");

  if (!isSupabaseConfigured() || !supabase) {
    // Local fallback: create object URL or base64
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve({
          fileName: file.name,
          fileType: file.type,
          fileSize: file.size,
          fileUrl: reader.result,
          storagePath: null,
        });
      };
      reader.readAsDataURL(file);
    });
  }

  const timestamp = Date.now();
  const sanitizedName = file.name.replace(/[^a-zA-Z0-9._-]/g, "_");
  const storagePath = `uploads/${timestamp}_${sanitizedName}`;

  const { error: uploadError } = await supabase.storage
    .from(STORAGE_BUCKET)
    .upload(storagePath, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (uploadError) {
    console.error("Supabase Storage upload error:", uploadError);
    throw new Error(`File upload failed: ${uploadError.message}`);
  }

  const { data: publicUrlData } = supabase.storage
    .from(STORAGE_BUCKET)
    .getPublicUrl(storagePath);

  return {
    fileName: file.name,
    fileType: file.type || "application/octet-stream",
    fileSize: file.size,
    fileUrl: publicUrlData.publicUrl,
    storagePath,
  };
}

/**
 * Create a new activity in Supabase
 */
export async function createActivity(activityInput, file = null) {
  let uploadedFileInfo = null;

  if (file) {
    uploadedFileInfo = await uploadActivityFile(file);
  }

  const cleanLinks = Array.isArray(activityInput.links)
    ? activityInput.links.filter((l) => l && l.url && l.url.trim())
    : [];

  const payload = {
    title: activityInput.title.trim(),
    description: activityInput.description.trim(),
    category: activityInput.category?.trim() || "E-Waste",
    date: activityInput.date?.trim() || new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" }),
    remarks: activityInput.remarks?.trim() || "",
    tags: Array.isArray(activityInput.tags)
      ? activityInput.tags
      : (activityInput.tags ? activityInput.tags.split(",").map((t) => t.trim()).filter(Boolean) : []),
    links: cleanLinks,
    file_name: uploadedFileInfo?.fileName || activityInput.fileName || "",
    file_type: uploadedFileInfo?.fileType || activityInput.fileType || "",
    file_size: uploadedFileInfo?.fileSize || activityInput.fileSize || 0,
    file_url: uploadedFileInfo?.fileUrl || activityInput.fileUrl || "",
    storage_path: uploadedFileInfo?.storagePath || null,
  };

  if (!isSupabaseConfigured() || !supabase) {
    const local = getLocalActivities();
    const newLocalActivity = {
      id: "loc_" + Date.now(),
      title: payload.title,
      description: payload.description,
      category: payload.category,
      date: payload.date,
      remarks: payload.remarks,
      tags: payload.tags,
      links: payload.links,
      fileName: payload.file_name,
      fileType: payload.file_type,
      fileSize: payload.file_size,
      fileUrl: payload.file_url,
      storagePath: payload.storage_path,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    local.unshift(newLocalActivity);
    saveLocalActivities(local);
    return newLocalActivity;
  }

  const { data, error } = await supabase
    .from("activities")
    .insert([payload])
    .select()
    .single();

  if (error) {
    console.error("Supabase insert activity error:", error);
    throw new Error(`Failed to save activity: ${error.message}`);
  }

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    category: data.category,
    date: data.date,
    remarks: data.remarks,
    tags: Array.isArray(data.tags) ? data.tags : [],
    links: Array.isArray(data.links) ? data.links : [],
    fileName: data.file_name,
    fileType: data.file_type,
    fileSize: data.file_size,
    fileUrl: data.file_url,
    storagePath: data.storage_path,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}

/**
 * Update an existing activity
 */
export async function updateActivity(id, activityInput, newFile = null) {
  let uploadedFileInfo = null;

  if (newFile) {
    uploadedFileInfo = await uploadActivityFile(newFile);
  }

  const cleanLinks = Array.isArray(activityInput.links)
    ? activityInput.links.filter((l) => l && l.url && l.url.trim())
    : [];

  const payload = {
    title: activityInput.title?.trim(),
    description: activityInput.description?.trim(),
    category: activityInput.category?.trim(),
    date: activityInput.date?.trim(),
    remarks: activityInput.remarks?.trim() || "",
    tags: Array.isArray(activityInput.tags)
      ? activityInput.tags
      : (activityInput.tags ? activityInput.tags.split(",").map((t) => t.trim()).filter(Boolean) : []),
    links: cleanLinks,
    updated_at: new Date().toISOString(),
  };

  if (uploadedFileInfo) {
    payload.file_name = uploadedFileInfo.fileName;
    payload.file_type = uploadedFileInfo.fileType;
    payload.file_size = uploadedFileInfo.fileSize;
    payload.file_url = uploadedFileInfo.fileUrl;
    payload.storage_path = uploadedFileInfo.storagePath;

    // Clean up old file from storage if it exists
    if (activityInput.storagePath && isSupabaseConfigured() && supabase) {
      try {
        await supabase.storage.from(STORAGE_BUCKET).remove([activityInput.storagePath]);
      } catch (err) {
        console.warn("Could not delete old storage file:", err);
      }
    }
  }

  if (!isSupabaseConfigured() || !supabase) {
    const local = getLocalActivities();
    const index = local.findIndex((item) => String(item.id) === String(id));
    if (index !== -1) {
      local[index] = {
        ...local[index],
        ...payload,
        fileName: payload.file_name || local[index].fileName,
        fileType: payload.file_type || local[index].fileType,
        fileSize: payload.file_size !== undefined ? payload.file_size : local[index].fileSize,
        fileUrl: payload.file_url || local[index].fileUrl,
        storagePath: payload.storage_path || local[index].storagePath,
        updatedAt: payload.updated_at,
      };
      saveLocalActivities(local);
      return local[index];
    }
    throw new Error("Activity not found in local storage");
  }

  const { data, error } = await supabase
    .from("activities")
    .update(payload)
    .eq("id", id)
    .select()
    .single();

  if (error) {
    console.error("Supabase update activity error:", error);
    throw new Error(`Failed to update activity: ${error.message}`);
  }

  return {
    id: data.id,
    title: data.title,
    description: data.description,
    category: data.category,
    date: data.date,
    remarks: data.remarks,
    tags: Array.isArray(data.tags) ? data.tags : [],
    links: Array.isArray(data.links) ? data.links : [],
    fileName: data.file_name,
    fileType: data.file_type,
    fileSize: data.file_size,
    fileUrl: data.file_url,
    storagePath: data.storage_path,
    createdAt: data.created_at,
    updatedAt: data.updated_at,
  };
}

/**
 * Delete an activity and its associated file from storage
 */
export async function deleteActivity(id, storagePath = null) {
  if (storagePath && isSupabaseConfigured() && supabase) {
    try {
      await supabase.storage.from(STORAGE_BUCKET).remove([storagePath]);
    } catch (err) {
      console.warn("Storage deletion warning:", err);
    }
  }

  if (!isSupabaseConfigured() || !supabase) {
    const local = getLocalActivities();
    const filtered = local.filter((item) => String(item.id) !== String(id));
    saveLocalActivities(filtered);
    return true;
  }

  const { error } = await supabase
    .from("activities")
    .delete()
    .eq("id", id);

  if (error) {
    console.error("Supabase delete activity error:", error);
    throw new Error(`Failed to delete activity: ${error.message}`);
  }

  return true;
}

/**
 * Seed existing hardcoded assignments into Supabase
 */
export async function seedExistingAssignments() {
  const converted = convertStaticAssignments();

  if (!isSupabaseConfigured() || !supabase) {
    saveLocalActivities(converted);
    return converted;
  }

  try {
    const rowsToInsert = converted.map((item) => ({
      title: item.title,
      description: item.description,
      category: item.category,
      date: item.date,
      remarks: item.remarks,
      tags: item.tags,
      links: [],
      file_name: item.fileName,
      file_type: item.fileType,
      file_size: item.fileSize,
      file_url: item.fileUrl,
      storage_path: null,
    }));

    const { data, error } = await supabase
      .from("activities")
      .insert(rowsToInsert)
      .select();

    if (error) {
      console.warn("Could not seed into Supabase:", error);
      return converted;
    }

    return (data || []).map((row) => ({
      id: row.id,
      title: row.title,
      description: row.description,
      category: row.category,
      date: row.date,
      remarks: row.remarks || "",
      tags: Array.isArray(row.tags) ? row.tags : [],
      links: Array.isArray(row.links) ? row.links : [],
      fileName: row.file_name || "",
      fileType: row.file_type || "",
      fileSize: row.file_size || 0,
      fileUrl: row.file_url || "",
      storagePath: row.storage_path || null,
      createdAt: row.created_at,
      updatedAt: row.updated_at,
    }));
  } catch (err) {
    console.warn("Seed error:", err);
    return converted;
  }
}
