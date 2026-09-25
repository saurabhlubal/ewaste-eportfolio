import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  getActivityById,
  updateActivity,
  deleteActivity,
} from "../services/activityService";
import ActivityFormModal from "../components/ActivityFormModal";
import DeleteConfirmModal from "../components/DeleteConfirmModal";

export default function Assignment() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [assignment, setAssignment] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const fetchCurrentActivity = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await getActivityById(id);
      if (!data) {
        setError("Activity not found.");
      } else {
        setAssignment(data);
      }
    } catch (err) {
      console.error("Failed to load activity:", err);
      setError("Failed to load activity details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCurrentActivity();
  }, [id]);

  const handleUpdate = async (activityData, newFile) => {
    const updated = await updateActivity(assignment.id, activityData, newFile);
    setAssignment(updated);
    setIsEditOpen(false);
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      await deleteActivity(assignment.id, assignment.storagePath);
      navigate("/portfolio");
    } catch (err) {
      console.error("Delete failed:", err);
      setError("Failed to delete activity: " + err.message);
    } finally {
      setIsDeleting(false);
    }
  };

  const formatFileSize = (bytes) => {
    if (!bytes) return "Standard Size";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + sizes[i];
  };

  if (loading) {
    return (
      <main className="assignment-page">
        <div className="portfolio-loading">
          <div className="spinner"></div>
          <p>Loading activity details...</p>
        </div>
      </main>
    );
  }

  if (error || !assignment) {
    return (
      <main className="assignment-page">
        <div className="assignment-card text-center">
          <h2>Activity Not Found</h2>
          <p style={{ color: "#60796b", margin: "15px 0 25px" }}>
            The academic activity you are looking for does not exist or may have been removed.
          </p>
          <Link to="/portfolio" className="explore-btn">
            ← Return to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  const fileUrl = assignment.fileUrl || "";
  const fileType = (assignment.fileType || "").toLowerCase();
  const fileName = (assignment.fileName || "").toLowerCase();

  const isPdf = fileType.includes("pdf") || fileName.endsWith(".pdf");
  const isImage =
    fileType.includes("image") ||
    fileName.endsWith(".jpg") ||
    fileName.endsWith(".jpeg") ||
    fileName.endsWith(".png") ||
    fileName.endsWith(".webp");

  return (
    <main className="assignment-page">
      <div className="assignment-header-nav">
        <Link to="/portfolio" className="back-btn">
          ← Back to Portfolio
        </Link>

        <div className="assignment-header-actions">
          <motion.button
            type="button"
            className="action-btn edit"
            onClick={() => setIsEditOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            ✏️ Edit Activity
          </motion.button>
          <motion.button
            type="button"
            className="action-btn delete"
            onClick={() => setIsDeleteOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            🗑️ Delete Activity
          </motion.button>
        </div>
      </div>

      <motion.article
        className="assignment-card"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="assignment-meta-top">
          <span className="assignment-badge">
            {assignment.category ? assignment.category.toUpperCase() : "E-WASTE"}
          </span>
          <span className="assignment-date">{assignment.date}</span>
        </div>

        <h1>{assignment.title}</h1>

        {assignment.remarks && (
          <div className="assignment-remarks">
            <strong>Reflection & Remarks:</strong> {assignment.remarks}
          </div>
        )}

        {/* IMAGE PREVIEW */}
        {isImage && fileUrl && (
          <div className="assignment-media-box">
            <img
              src={fileUrl}
              alt={assignment.title}
              className="assignment-full-image"
            />
            <div className="media-actions">
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-button"
              >
                🖼️ View Full Image ↗
              </a>
              <a
                href={fileUrl}
                download={assignment.fileName || "assignment-image"}
                className="download-file-btn"
              >
                ⬇ Download Image
              </a>
            </div>
          </div>
        )}

        {/* PDF PREVIEW & VIEWER */}
        {isPdf && fileUrl && (
          <div className="pdf-section">
            <div className="pdf-icon">📄</div>
            <h2>{assignment.fileName || "PDF Document"}</h2>
            <p>
              Academic document attachment ({formatFileSize(assignment.fileSize)}).
              Preview below or open in full resolution.
            </p>

            <div className="pdf-action-buttons">
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-button"
              >
                📄 Open Full PDF ↗
              </a>
              <a
                href={fileUrl}
                download={assignment.fileName || "document.pdf"}
                className="download-file-btn"
              >
                ⬇ Download PDF
              </a>
            </div>

            <div className="pdf-embed-wrapper">
              <iframe
                src={fileUrl}
                title={assignment.title}
                className="pdf-iframe-preview"
              />
            </div>
          </div>
        )}

        {/* OTHER DOCUMENT PREVIEW (Word / PPT / etc.) */}
        {!isPdf && !isImage && fileUrl && (
          <div className="document-card-section">
            <div className="doc-icon">📎</div>
            <div className="doc-details">
              <h3>{assignment.fileName || "Academic Document"}</h3>
              <p>
                Type: {assignment.fileType || "Application file"} • Size: {formatFileSize(assignment.fileSize)}
              </p>
            </div>
            <a
              href={fileUrl}
              download={assignment.fileName || "assignment-document"}
              className="download-file-btn"
            >
              ⬇ Download Document
            </a>
          </div>
        )}

        {/* ONLINE RESOURCES & LINKS SECTION */}
        {Array.isArray(assignment.links) && assignment.links.length > 0 && (
          <div className="assignment-links-section">
            <div className="links-section-heading">
              <span>🔗</span>
              <h3>Online Resources & Companion Links</h3>
            </div>
            <div className="links-grid">
              {assignment.links.map((link, idx) => {
                const labelLower = (link.label || "").toLowerCase();
                let icon = "🌐";
                if (labelLower.includes("github")) icon = "💻";
                else if (labelLower.includes("youtube")) icon = "▶️";
                else if (labelLower.includes("drive")) icon = "📁";
                else if (labelLower.includes("presentation")) icon = "📊";
                else if (labelLower.includes("paper") || labelLower.includes("report")) icon = "📄";

                return (
                  <motion.a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="activity-link-card"
                    whileHover={{ y: -3, scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    <div className="link-card-icon">{icon}</div>
                    <div className="link-card-info">
                      <strong className="link-card-label">{link.label || "External Resource"}</strong>
                      <span className="link-card-url">{link.url}</span>
                    </div>
                    <span className="link-card-arrow">↗</span>
                  </motion.a>
                );
              })}
            </div>
          </div>
        )}

        {/* FULL ACTIVITY DESCRIPTION */}
        <div className="assignment-description">
          <h3>Activity Description & Overview</h3>
          <p>{assignment.description}</p>
        </div>

        {/* TAGS */}
        {Array.isArray(assignment.tags) && assignment.tags.length > 0 && (
          <div className="assignment-tags-container">
            <span className="tags-label">Tags:</span>
            <div className="tags-list">
              {assignment.tags.map((tag, i) => (
                <span key={i} className="assignment-tag-pill">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        )}
      </motion.article>

      {/* Edit Modal */}
      <ActivityFormModal
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSubmit={handleUpdate}
        initialData={assignment}
      />

      {/* Delete Modal */}
      <DeleteConfirmModal
        isOpen={isDeleteOpen}
        title={assignment.title}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={handleDelete}
        isDeleting={isDeleting}
      />
    </main>
  );
}