import React, { useEffect } from 'react';
import './Modal.styles.css';

const Modal = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    if (isOpen) {
      // Bloqueia o scroll do body quando o modal abre
      document.body.style.overflow = 'hidden';
    } else {
      // Restaura o scroll quando o modal fecha
      document.body.style.overflow = 'unset';
    }

    // Cleanup: restaura o scroll quando o componente é desmontado
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
};

export default Modal; 