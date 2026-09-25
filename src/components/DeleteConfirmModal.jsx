export default function DeleteConfirmModal({
  isOpen,
  title,
  onClose,
  onConfirm,
  isDeleting,
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal-dialog modal-confirm"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="confirm-icon">⚠️</div>
        <h3>Delete Activity</h3>
        <p className="confirm-message">
          Are you sure you want to delete <strong>"{title}"</strong>?
        </p>
        <p className="confirm-submessage">
          This will permanently remove the activity from your portfolio and delete any associated uploaded file from storage.
        </p>

        <div className="modal-actions">
          <button
            type="button"
            className="btn-cancel"
            onClick={onClose}
            disabled={isDeleting}
          >
            Cancel
          </button>
          <button
            type="button"
            className="btn-delete"
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting ? "Deleting..." : "Yes, Delete Activity"}
          </button>
        </div>
      </div>
    </div>
  );
}
