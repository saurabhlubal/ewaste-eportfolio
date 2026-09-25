import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  FileText,
  Download,
  ExternalLink,
  Edit3,
  Trash2,
  Calendar,
  Sparkles,
  Paperclip,
  Globe,
  Tag,
  Eye
} from "lucide-react";
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
          <p style={{ color: "#435e4e", margin: "15px 0 25px" }}>
            The academic activity you are looking for does not exist or may have been removed.
          </p>
          <Link to="/portfolio" className="explore-btn">
            <ArrowLeft size={16} /> Return to Portfolio
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
          <ArrowLeft size={16} /> Back to Repository
        </Link>

        <div className="assignment-header-actions">
          <motion.button
            type="button"
            className="action-btn edit"
            onClick={() => setIsEditOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Edit3 size={14} /> Edit Activity
          </motion.button>
          <motion.button
            type="button"
            className="action-btn delete"
            onClick={() => setIsDeleteOpen(true)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            <Trash2 size={14} /> Delete Activity
          </motion.button>
        </div>
      </div>

      <motion.article
        className="assignment-card"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="assignment-meta-top">
          <span className="assignment-badge">
            {assignment.category ? assignment.category.toUpperCase() : "E-WASTE"}
          </span>
          <span className="assignment-date">
            <Calendar size={13} className="inline-icon" /> {assignment.date}
          </span>
        </div>

        <h1>{assignment.title}</h1>

        {assignment.remarks && (
          <div className="assignment-remarks">
            <div className="remarks-label">
              <Sparkles size={16} /> Academic Reflection & Remarks
            </div>
            <p>{assignment.remarks}</p>
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
                <Eye size={16} /> View Full Resolution
              </a>
              <a
                href={fileUrl}
                download={assignment.fileName || "assignment-image"}
                className="download-file-btn"
              >
                <Download size={16} /> Download Image
              </a>
            </div>
          </div>
        )}

        {/* PDF PREVIEW & VIEWER */}
        {isPdf && fileUrl && (
          <div className="pdf-section">
            <div className="pdf-icon">
              <FileText size={48} className="icon-emerald" />
            </div>
            <h2>{assignment.fileName || "PDF Document"}</h2>
            <p>
              Academic document attachment ({formatFileSize(assignment.fileSize)}).
              Review directly below or open in a dedicated tab.
            </p>

            <div className="pdf-action-buttons">
              <a
                href={fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="pdf-button"
              >
                <ExternalLink size={16} /> Open Full PDF ↗
              </a>
              <a
                href={fileUrl}
                download={assignment.fileName || "document.pdf"}
                className="download-file-btn"
              >
                <Download size={16} /> Download PDF
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
            <div className="doc-icon">
              <Paperclip size={32} className="icon-emerald" />
            </div>
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
              <Download size={16} /> Download File
            </a>
          </div>
        )}

        {/* ONLINE RESOURCES & LINKS SECTION */}
        {Array.isArray(assignment.links) && assignment.links.length > 0 && (
          <div className="assignment-links-section">
            <div className="links-section-heading">
              <Globe size={20} className="icon-emerald" />
              <h3>Companion Online Resources & Links</h3>
            </div>
            <div className="links-grid">
              {assignment.links.map((link, idx) => (
                <motion.a
                  key={idx}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="activity-link-card"
                  whileHover={{ y: -3, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <div className="link-card-icon">
                    <Globe size={20} />
                  </div>
                  <div className="link-card-info">
                    <strong className="link-card-label">{link.label || "External Resource"}</strong>
                    <span className="link-card-url">{link.url}</span>
                  </div>
                  <ExternalLink size={16} className="link-card-arrow" />
                </motion.a>
              ))}
            </div>
          </div>
        )}

        {/* FULL ACTIVITY DESCRIPTION */}
        <div className="assignment-description">
          <h3>Activity Description & Context</h3>
          <p>{assignment.description}</p>
        </div>

        {/* TAGS */}
        {Array.isArray(assignment.tags) && assignment.tags.length > 0 && (
          <div className="assignment-tags-container">
            <span className="tags-label">
              <Tag size={14} className="inline-icon" /> Tags:
            </span>
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