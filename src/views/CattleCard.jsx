import React from 'react';

export function CattleCard({ cattle }) {
  return (
    <div className="cattle-card">
      <div className="cattle-image">
        {cattle.imageUrl ? (
          <img src={cattle.imageUrl} alt={`${cattle.breed} ${cattle.sex}`} />
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