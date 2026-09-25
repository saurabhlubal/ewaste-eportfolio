import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  getActivities,
  createActivity,
  updateActivity,
  deleteActivity,
} from "../services/activityService";
import { isSupabaseConfigured } from "../services/supabase";
import ActivityFormModal from "../components/ActivityFormModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

export default function Portfolio() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [feedback, setFeedback] = useState("");

  // Filters & Search
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Modal states
  const [isSubmitOpen, setIsSubmitOpen] = useState(false);
  const [editingActivity, setEditingActivity] = useState(null);
  const [deletingActivity, setDeletingActivity] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  const loadActivities = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getActivities();
      setActivities(data || []);
    } catch (err) {
      console.error("Error loading activities:", err);
      setError("Failed to load activities. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadActivities();
  }, []);

  const handleCreateActivity = async (activityData, file) => {
    const created = await createActivity(activityData, file);
    setActivities((prev) => [created, ...prev]);
    showFeedback("Activity successfully submitted!");
  };

  const handleUpdateActivity = async (activityData, newFile) => {
    if (!editingActivity) return;
    const updated = await updateActivity(editingActivity.id, activityData, newFile);
    setActivities((prev) =>
      prev.map((item) => (String(item.id) === String(updated.id) ? updated : item))
    );
    setEditingActivity(null);
    showFeedback("Activity updated successfully!");
  };

  const handleDeleteConfirm = async () => {
    if (!deletingActivity) return;
    setIsDeleting(true);
    try {
      await deleteActivity(deletingActivity.id, deletingActivity.storagePath);
      setActivities((prev) =>
        prev.filter((item) => String(item.id) !== String(deletingActivity.id))
      );
      setDeletingActivity(null);
      showFeedback("Activity deleted successfully.");
    } catch (err) {
      setError("Failed to delete activity: " + err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const showFeedback = (msg) => {
    setFeedback(msg);
    setTimeout(() => setFeedback(""), 4500);
  };

  // Derive categories list dynamically
  const categoriesList = useMemo(() => {
    const set = new Set(["All"]);
    activities.forEach((a) => {
      if (a.category) set.add(a.category);
    });
    return Array.from(set);
  }, [activities]);

  // Filtered activities
  const filteredActivities = useMemo(() => {
    return activities.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" ||
        item.category?.toLowerCase() === selectedCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.title?.toLowerCase().includes(q) ||
        item.description?.toLowerCase().includes(q) ||
        item.remarks?.toLowerCase().includes(q) ||
        (Array.isArray(item.tags) && item.tags.some((t) => t.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [activities, selectedCategory, searchQuery]);

  // Dynamic Statistics
  const stats = useMemo(() => {
    const total = activities.length;
    const filesCount = activities.filter((a) => a.fileName || a.fileUrl).length;
    const linksCount = activities.reduce((acc, a) => acc + (a.links?.length || 0), 0);
    return { total, filesCount, linksCount };
  }, [activities]);

  const getFileIcon = (activity) => {
    if (activity.fileName) {
      const type = (activity.fileType || "").toLowerCase();
      const name = (activity.fileName || "").toLowerCase();
      if (type.includes("pdf") || name.endsWith(".pdf")) return "📄";
      if (type.includes("image") || name.match(/\.(jpg|jpeg|png|webp)$/)) return "🖼️";
      if (name.match(/\.(ppt|pptx)$/)) return "📊";
      if (name.match(/\.(doc|docx)$/)) return "📝";
      return "📎";
    }
    if (Array.isArray(activity.links) && activity.links.length > 0) {
      const firstLabel = activity.links[0]?.label?.toLowerCase() || "";
      if (firstLabel.includes("github")) return "💻";
      if (firstLabel.includes("youtube")) return "▶️";
      if (firstLabel.includes("drive")) return "📁";
      return "🔗";
    }
    return "📄";
  };

  // Framer Motion container & card variants
  const gridVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <main className="portfolio-page">
      {/* Toast Notification */}
      <AnimatePresence>
        {feedback && (
          <motion.div
            className="portfolio-toast"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            ✓ {feedback}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Supabase Notice if not configured */}
      {!isSupabaseConfigured() && (
        <div className="supabase-banner">
          <div className="supabase-banner-content">
            <span className="banner-icon">ℹ️</span>
            <div>
              <strong>Local Mode:</strong> Running with local storage. Add <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> in <code>.env</code> to connect cloud PostgreSQL & Storage.
            </div>
          </div>
        </div>
      )}

      {/* =========================================================
          PORTFOLIO HERO & SUMMARY STATS
      ========================================================= */}
      <section className="portfolio-header">
        <p className="section-label">MY ACADEMIC REPOSITORY</p>

        <h1>
          Coursework &
          <span> Activities.</span>
        </h1>

        <p>
          A comprehensive record of assignments, interactive learning tools, field reports, and open resources created during the E-Waste & Sustainability coursework.
        </p>

        {/* Dynamic Activity Stats Bar */}
        <div className="portfolio-stats-grid">
          <div className="portfolio-stat-card">
            <span className="stat-val">{stats.total}</span>
            <span className="stat-lbl">Total Activities</span>
          </div>

          <div className="portfolio-stat-card">
            <span className="stat-val">{stats.filesCount}</span>
            <span className="stat-lbl">Academic Files</span>
          </div>

          <div className="portfolio-stat-card">
            <span className="stat-val">{stats.linksCount}</span>
            <span className="stat-lbl">Online Resources</span>
          </div>

          <div className="portfolio-stat-card highlight">
            <span className="stat-val">100%</span>
            <span className="stat-lbl">Green Focus</span>
          </div>
        </div>

        <div className="portfolio-header-actions">
          <motion.button
            type="button"
            className="add-activity-btn"
            onClick={() => setIsSubmitOpen(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>+</span> Submit New Activity
          </motion.button>
        </div>
      </section>

      {/* =========================================================
          SEARCH & CATEGORY FILTERS
      ========================================================= */}
      <section className="portfolio-filter-section">
        <div className="portfolio-filter-container">
          <div className="search-bar-wrapper">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              placeholder="Search by title, description, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="portfolio-search-input"
            />
            {searchQuery && (
              <button
                type="button"
                className="clear-search-btn"
                onClick={() => setSearchQuery("")}
              >
                ✕
              </button>
            )}
          </div>

          <div className="category-pill-group">
            {categoriesList.map((cat) => (
              <button
                key={cat}
                type="button"
                className={`category-pill ${selectedCategory === cat ? "active" : ""}`}
                onClick={() => setSelectedCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          ACTIVITIES GRID
      ========================================================= */}
      {loading ? (
        <div className="portfolio-loading">
          <div className="spinner"></div>
          <p>Loading activities from database...</p>
        </div>
      ) : error ? (
        <div className="portfolio-error">
          <p>{error}</p>
          <button type="button" onClick={loadActivities} className="retry-btn">
            Retry
          </button>
        </div>
      ) : (
        <section className="work-grid-container">
          {filteredActivities.length === 0 ? (
            <div className="empty-activities">
              <div className="empty-icon">🌱</div>
              <h3>No matching activities found</h3>
              <p>
                {searchQuery || selectedCategory !== "All"
                  ? "Try resetting your search query or selecting 'All' categories."
                  : "Submit your first academic e-waste activity!"}
              </p>
              <button
                type="button"
                className="add-activity-btn"
                onClick={() => setIsSubmitOpen(true)}
              >
                + Submit New Activity
              </button>
            </div>
          ) : (
            <motion.div
              className="work-grid"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
            >
              {filteredActivities.map((item, index) => (
                <motion.article
                  className="work-card"
                  key={item.id}
                  variants={cardVariants}
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="card-top">
                    <div className="card-icon" title={item.fileType || "Resource"}>
                      {getFileIcon(item)}
                    </div>

                    <div className="card-top-right">
                      <span className="card-number">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="card-content">
                    <div className="card-meta-row">
                      <span className="card-type">
                        {item.category ? item.category.toUpperCase() : "ASSIGNMENT"}
                      </span>
                      {item.date && <span className="card-date">{item.date}</span>}
                    </div>

                    <h2>{item.title}</h2>

                    <p>
                      {item.remarks || item.description?.length > 130
                        ? (item.remarks || item.description.slice(0, 127) + "...")
                        : item.description}
                    </p>

                    <div className="card-attachments-row">
                      {item.fileName && (
                        <div className="card-file-badge">
                          <span className="file-badge-icon">📎</span>
                          <span className="file-badge-name">{item.fileName}</span>
                        </div>
                      )}
                      {Array.isArray(item.links) && item.links.length > 0 && (
                        <div className="card-link-badge">
                          <span className="link-badge-icon">🔗</span>
                          <span className="link-badge-name">
                            {item.links.length === 1
                              ? item.links[0].label || "1 Link"
                              : `${item.links.length} Links`}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="card-actions-row">
                    <Link to={`/assignment/${item.id}`} className="view-work">
                      View Details <span>→</span>
                    </Link>

                    <div className="card-mgmt-btns">
                      <button
                        type="button"
                        className="card-mgmt-btn edit"
                        title="Edit Activity"
                        onClick={() => setEditingActivity(item)}
                      >
                        ✏️ Edit
                      </button>
                      <button
                        type="button"
                        className="card-mgmt-btn delete"
                        title="Delete Activity"
                        onClick={() => setDeletingActivity(item)}
                      >
                        🗑️ Delete
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          )}
        </section>
      )}

      {/* Footer note inviting more submissions */}
      <section className="portfolio-note">
        <div
          className="note-icon"
          style={{ cursor: "pointer" }}
          onClick={() => setIsSubmitOpen(true)}
          title="Click to Submit Activity"
        >
          +
        </div>

        <div>
          <h3>Ongoing Academic Repository</h3>
          <p>
            This portfolio continues to expand as new laboratory activities, student presentations, and environmental assignments are prepared. Click <strong>"+ Submit New Activity"</strong> to record fresh work.
          </p>
        </div>
      </section>

      {/* Add Activity Modal */}
      <ActivityFormModal
        isOpen={isSubmitOpen}
        onClose={() => setIsSubmitOpen(false)}
        onSubmit={handleCreateActivity}
      />

      {/* Edit Activity Modal */}
      <ActivityFormModal
        isOpen={Boolean(editingActivity)}
        onClose={() => setEditingActivity(null)}
        onSubmit={handleUpdateActivity}
        initialData={editingActivity}
      />

      {/* Delete Confirmation Modal */}
      <DeleteConfirmModal
        isOpen={Boolean(deletingActivity)}
        title={deletingActivity?.title}
        onClose={() => setDeletingActivity(null)}
        onConfirm={handleDeleteConfirm}
        isDeleting={isDeleting}
      />
    </main>
  );
}