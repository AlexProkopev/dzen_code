import { useEffect, useState } from "react";
import "./DeleteConfirmModal.css";

const DeleteConfirmModal = ({ order, onConfirm, onCancel }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (order) {
      setTimeout(() => setIsVisible(true), 10);
    } else {
      setIsVisible(false);
    }
  }, [order]);

  if (!order) return null;

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onCancel, 300);
  };

  return (
    <>
      <div
        className={`delete-modal-backdrop ${isVisible ? "show" : ""}`}
        onClick={handleClose}
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="deleteModalLabel"
        className={`delete-modal-content modern ${isVisible ? "show" : ""}`}
      >
        <h2 id="deleteModalLabel" className="delete-modal-title">
          Подтвердите удаление
        </h2>
        <p className="delete-modal-text">
          Вы уверены, что хотите удалить приход:
        </p>
        <span className="delete-modal-title">{order.title}</span>
        <div className="delete-modal-actions">
          <button onClick={handleClose} className="btn-modern btn-gray">
            Отмена
          </button>
          <button onClick={onConfirm} className="btn-modern btn-red">
            Удалить
          </button>
        </div>
      </div>
    </>
  );
};

export default DeleteConfirmModal;
