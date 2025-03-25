import React, { useState } from 'react';
import './CattleCard.css';

export function CattleCard({ cattle, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [status, setStatus] = useState(cattle.status);

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const handleStatusSubmit = () => {
    onEdit({ ...cattle, status });
    setIsEditing(false);
  };

  const handleStatusCancel = () => {
    setStatus(cattle.status);
    setIsEditing(false);
  };

  return (
    <div className="cattle-card">
      <div className="cattle-image">
        {cattle.imageUrl ? (
          <img src={cattle.imageUrl} alt={`${cattle.tag} - ${cattle.breed}`} />
        ) : (
          <div className="image-placeholder">No Image</div>
        )}
      </div>
      <div className="cattle-info">
        <h3>{cattle.tag}</h3>
        <p>Breed: {cattle.breed}</p>
        <p>Location: {cattle.location}</p>
        <p>Sex: {cattle.sex}</p>
        
        <div className="status-section">
          {isEditing ? (
            <div className="status-edit">
              <select value={status} onChange={handleStatusChange}>
                <option value="Healthy">Healthy</option>
                <option value="Vet Check Needed">Vet Check Needed</option>
              </select>
              <div className="status-actions">
                <button className="save-button" onClick={handleStatusSubmit}>Save</button>
                <button className="cancel-button" onClick={handleStatusCancel}>Cancel</button>
              </div>
            </div>
          ) : (
            <div 
              className={`status-display status-${status.toLowerCase().replace(/\s+/g, '-')}`}
              onClick={() => setIsEditing(true)}
            >
              Status: {status}
            </div>
          )}
        </div>

        {cattle.sex === 'Male' && (
          <p>Semen Quality: {cattle.semenQuality}</p>
        )}
        
        {cattle.sex === 'Female' && (
          <>
            <p>Pregnant: {cattle.isPregnant ? 'Yes' : 'No'}</p>
            {cattle.isPregnant && cattle.dueDate && (
              <p>Due Date: {new Date(cattle.dueDate).toLocaleDateString()}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
} 