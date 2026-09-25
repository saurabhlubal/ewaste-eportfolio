import { useState, useRef } from "react";

const ALLOWED_EXTENSIONS = ["pdf", "doc", "docx", "ppt", "pptx", "jpg", "jpeg", "png"];
const MAX_FILE_SIZE_MB = 25;
const MAX_FILE_SIZE_BYTES = MAX_FILE_SIZE_MB * 1024 * 1024;

const CATEGORIES = [
  "E-Waste",
  "Environmental Sustainability",
  "Green Computing",
  "Assignments",
  "Coursework",
  "Presentations",
  "Projects",
  "Case Study",
];

export default function ActivityFormModal({
  isOpen,
  onClose,
  onSubmit,
  initialData = null,
}) {
  const isEdit = Boolean(initialData);

  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(initialData?.description || "");
  const [category, setCategory] = useState(initialData?.category || "E-Waste");
  const [customCategory, setCustomCategory] = useState("");
  const [date, setDate] = useState(
    initialData?.date ||
      new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      })
  );
  const [remarks, setRemarks] = useState(initialData?.remarks || "");
  const [tags, setTags] = useState(
    Array.isArray(initialData?.tags)
      ? initialData.tags.join(", ")
      : initialData?.tags || ""
  );

  const [file, setFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [formError, setFormError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const validateFile = (selectedFile) => {
    setFileError("");
    if (!selectedFile) return false;

    const extension = selectedFile.name.split(".").pop()?.toLowerCase();
    if (!ALLOWED_EXTENSIONS.includes(extension)) {
      setFileError(
        `Unsupported file type (.${extension}). Supported types: ${ALLOWED_EXTENSIONS.join(", ").toUpperCase()}`
      );
      return false;
    }

    if (selectedFile.size > MAX_FILE_SIZE_BYTES) {
      setFileError(`File size exceeds maximum limit of ${MAX_FILE_SIZE_MB}MB.`);
      return false;
    }

    return true;
  };

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (selected && validateFile(selected)) {
      setFile(selected);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files?.[0];
    if (droppedFile && validateFile(droppedFile)) {
      setFile(droppedFile);
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!title.trim()) {
      setFormError("Activity Title is required.");
      return;
    }

    if (!description.trim()) {
      setFormError("Description is required.");
      return;
    }

    if (!isEdit && !file) {
      setFormError("Please select a file to upload.");
      return;
    }

    const finalCategory =
      category === "Other" && customCategory.trim()
        ? customCategory.trim()
        : category;

    setIsSubmitting(true);

    try {
      await onSubmit(
        {
          title: title.trim(),
          description: description.trim(),
          category: finalCategory,
          date: date.trim(),
          remarks: remarks.trim(),
          tags: tags
            .split(",")
            .map((t) => t.trim())
            .filter(Boolean),
          storagePath: initialData?.storagePath,
          fileUrl: initialData?.fileUrl,
          fileName: initialData?.fileName,
          fileType: initialData?.fileType,
          fileSize: initialData?.fileSize,
        },
        file
      );
      onClose();
    } catch (err) {
      setFormError(err.message || "An error occurred while saving the activity.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div>
            <p className="modal-eyebrow">
              {isEdit ? "STUDENT PORTAL — EDIT" : "STUDENT PORTAL — SUBMISSION"}
            </p>
            <h2>{isEdit ? "Edit Activity" : "Submit New Activity"}</h2>
          </div>
          <button
            type="button"
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close dialog"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="modal-form">
          {formError && <div className="form-alert error">{formError}</div>}

          {/* Title */}
          <div className="form-group">
            <label htmlFor="activity-title">
              Activity Title <span className="req">*</span>
            </label>
            <input
              id="activity-title"
              type="text"
              placeholder="e.g. E-Waste Recycling Drive Reflection"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          {/* Category & Date Grid */}
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="activity-category">
                Category / Subject <span className="req">*</span>
              </label>
              <select
                id="activity-category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                disabled={isSubmitting}
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
                <option value="Other">Other (Custom)</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="activity-date">
                Submission Date <span className="req">*</span>
              </label>
              <input
                id="activity-date"
                type="text"
                placeholder="e.g. 25 September 2026"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                disabled={isSubmitting}
              />
            </div>
          </div>

          {category === "Other" && (
            <div className="form-group">
              <label htmlFor="custom-category">Custom Category Name</label>
              <input
                id="custom-category"
                type="text"
                placeholder="Enter custom category"
                value={customCategory}
                onChange={(e) => setCustomCategory(e.target.value)}
                disabled={isSubmitting}
              />
            </div>
          )}

          {/* Description */}
          <div className="form-group">
            <label htmlFor="activity-description">
              Description <span className="req">*</span>
            </label>
            <textarea
              id="activity-description"
              rows={4}
              placeholder="Detailed description of the activity, learning outcomes, or objectives..."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              disabled={isSubmitting}
            />
          </div>

          {/* File Upload Zone */}
          <div className="form-group">
            <label>
              Assignment File {isEdit ? "(Leave empty to keep existing file)" : <span className="req">*</span>}
            </label>

            <div
              className={`dropzone ${isDragging ? "dragging" : ""} ${file ? "has-file" : ""}`}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
            >
              <input
                ref={fileInputRef}
                type="file"
                className="hidden-file-input"
                onChange={handleFileChange}
                accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png"
              />

              <div className="dropzone-icon">
                {file ? "✓" : "📁"}
              </div>

              {file ? (
                <div className="file-info-preview">
                  <p className="file-name">{file.name}</p>
                  <p className="file-meta">
                    {formatFileSize(file.size)} • {file.type || "Document"}
                  </p>
                  <span className="file-change-hint">Click or drag to replace file</span>
                </div>
              ) : isEdit && initialData?.fileName ? (
                <div className="file-info-preview">
                  <p className="file-name">Current file: {initialData.fileName}</p>
                  <p className="file-meta">
                    {initialData.fileType}
                  </p>
                  <span className="file-change-hint">Click or drag to upload a replacement file</span>
                </div>
              ) : (
                <div className="dropzone-text">
                  <p className="dropzone-prompt">
                    <strong>Drag & drop your file</strong> or{" "}
                    <span className="browse-link">browse</span>
                  </p>
                  <p className="dropzone-types">
                    Supported: PDF, DOC, DOCX, PPT, PPTX, JPG, PNG (Max {MAX_FILE_SIZE_MB}MB)
                  </p>
                </div>
              )}
            </div>

            {fileError && <p className="field-error">{fileError}</p>}
          </div>

          {/* Remarks (Optional) */}
          <div className="form-group">
            <label htmlFor="activity-remarks">
              Short Reflection / Remarks <span className="opt">(Optional)</span>
            </label>
            <input
              id="activity-remarks"
              type="text"
              placeholder="e.g. Completed during university eco-week"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          {/* Tags (Optional) */}
          <div className="form-group">
            <label htmlFor="activity-tags">
              Tags <span className="opt">(Optional, comma-separated)</span>
            </label>
            <input
              id="activity-tags"
              type="text"
              placeholder="e.g. E-Waste, Recycling, Hardware, Awareness"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              disabled={isSubmitting}
            />
          </div>

          {/* Footer Actions */}
          <div className="modal-actions">
            <button
              type="button"
              className="btn-cancel"
              onClick={onClose}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  {isEdit ? "Saving Changes..." : "Uploading & Submitting..."}
                </>
              ) : (
                isEdit ? "Save Changes" : "Submit Activity"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
