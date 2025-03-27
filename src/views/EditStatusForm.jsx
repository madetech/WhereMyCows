import React from 'react';

export function EditStatusForm({ cattle, onSubmit, onCancel }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    onSubmit({
      status: formData.get('status')
    });
  };

  return (
    <form onSubmit={handleSubmit} className="edit-status-form">
      <h3>Edit Status</h3>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" required defaultValue={cattle.status}>
          <option value="Healthy">Healthy</option>
          <option value="Vet Check Needed">Vet Check Needed</option>
        </select>
      </div>
      <div className="form-actions">
        <button type="submit" className="submit-button">Save Status</button>
        <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
} 