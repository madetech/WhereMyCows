import React, { useState } from 'react';
import './CattleCard.css';

export function CattleCard({ cattle }) {
  const [imageError, setImageError] = useState(false);

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
      <p className={`status ${cattle.getStatusClass()}`}>
        Status: {cattle.status}
      </p>
    </div>
  );
} 