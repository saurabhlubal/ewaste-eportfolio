import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

  return (
    <main className="portfolio-page">
      {/* Toast Notification */}
      {feedback && <div className="portfolio-toast">{feedback}</div>}

      {/* Supabase Notice if not configured */}
      {!isSupabaseConfigured() && (
        <div className="supabase-banner">
          <div className="supabase-banner-content">
            <span className="banner-icon">ℹ️</span>
            <div>
              <strong>Supabase Mode:</strong> Running with local browser storage. To connect your cloud Supabase database and storage, add your <code>VITE_SUPABASE_URL</code> and <code>VITE_SUPABASE_ANON_KEY</code> to <code>.env</code>.
            </div>
          </div>
        </div>
      )}

      <section className="portfolio-header">
        <p className="section-label">MY ACADEMIC WORK</p>

        <h1>
          Assignments &
          <span> Activities.</span>
        </h1>

        <p>
          A collection of my academic work related to e-waste, environmental
          sustainability and responsible technology.
        </p>

        <div className="portfolio-header-actions">
          <button
            type="button"
            className="add-activity-btn"
            onClick={() => setIsSubmitOpen(true)}
          >
            <span>+</span> Submit Activity
          </button>
        </div>
      </section>

      {/* Loading & Error States */}
      {loading ? (
        <div className="portfolio-loading">
          <div className="spinner"></div>
          <p>Loading activities...</p>
        </div>
      ) : error ? (
        <div className="portfolio-error">
          <p>{error}</p>
          <button type="button" onClick={loadActivities} className="retry-btn">
            Retry
          </button>
        </div>
      ) : (
        <section className="work-grid">
          {activities.length === 0 ? (
            <div className="empty-activities">
              <div className="empty-icon">🌱</div>
              <h3>No activities yet</h3>
              <p>Be the first to submit an e-waste or environmental activity!</p>
              <button
                type="button"
                className="add-activity-btn"
                onClick={() => setIsSubmitOpen(true)}
              >
                + Submit Your First Activity
              </button>
            </div>
          ) : (
            activities.map((item, index) => (
              <article className="work-card" key={item.id}>
                <div className="card-top">
                  <div className="card-icon" title={item.fileType || "Document"}>
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
                    {item.remarks || item.description?.length > 140
                      ? (item.remarks || item.description.slice(0, 137) + "...")
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
                          {item.links.length === 1 ? item.links[0].label || "1 Link" : `${item.links.length} Links`}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="card-actions-row">
                  <Link to={`/assignment/${item.id}`} className="view-work">
                    View Activity <span>→</span>
                  </Link>

                  <div className="card-mgmt-btns">
                    <button
                      type="button"
                      className="card-mgmt-btn edit"
                      title="Edit Activity"
                      onClick={() => setEditingActivity(item)}
                    >
                      ✏️
                    </button>
                    <button
                      type="button"
                      className="card-mgmt-btn delete"
                      title="Delete Activity"
                      onClick={() => setDeletingActivity(item)}
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              </article>
            ))
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
          <h3>Continuous Learning & Submissions</h3>
          <p>
            This portfolio grows as new assignments, environmental activities and
            field work are submitted. Click <strong>"+ Submit Activity"</strong> above to record your latest academic work.
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