import React from 'react';

interface EventDetailsModalProps {
  isVisible: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const EventDetailsModal: React.FC<EventDetailsModalProps> = ({ isVisible, onClose, children }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-2 right-2 text-2xl font-bold text-gray-600"
          onClick={onClose}
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
};

export default EventDetailsModal;
