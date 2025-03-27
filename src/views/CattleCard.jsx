import React, { useState } from 'react';
import { EditStatusForm } from './EditStatusForm';
import './CattleCard.css';

export function CattleCard({ cattle, onStatusUpdate }) {
  const [imageError, setImageError] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);

  const handleStatusUpdate = (updates) => {
    onStatusUpdate(cattle.id, updates);
    setShowEditForm(false);
  };

  return (
    <div className="cattle-card">
      <div className="cattle-image">
        {cattle.hasImage() && !imageError ? (
          <img 
            src={cattle.imageUrl} 
            alt={`${cattle.breed} ${cattle.sex}`}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="placeholder-image">
            <span>No Image</span>
          </div>
        )}
      </div>
      <h3>Tag: {cattle.tag}</h3>
      <p>Breed: {cattle.breed}</p>
      <p>Location: {cattle.location}</p>
      <p>Sex: {cattle.sex}</p>
      {cattle.sex === 'Female' && (
        <p className={`pregnancy-status ${cattle.getPregnancyStatusClass()}`}>
          Pregnancy Status: {cattle.isPregnant ? 'Pregnant' : 'Not Pregnant'}
          {cattle.isPregnant && (
            <span className="due-date">
              Due Date: {cattle.formatDueDate()}
            </span>
          )}
        </p>
      )}
      <div className="status-section">
        <p className={`status ${cattle.getStatusClass()}`}>
          Status: {cattle.status}
        </p>
        <button 
          className="edit-status-button"
          onClick={() => setShowEditForm(true)}
        >
          Edit Status
        </button>
      </div>
      {showEditForm && (
        <EditStatusForm
          cattle={cattle}
          onSubmit={handleStatusUpdate}
          onCancel={() => setShowEditForm(false)}
        />
      )}
    </div>
  );
} 