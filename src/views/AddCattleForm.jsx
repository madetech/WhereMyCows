import React, { useState } from 'react';

export function AddCattleForm({ onSubmit, onCancel, breeds, locations }) {
  const [sex, setSex] = useState('Male');
  const [isPregnant, setIsPregnant] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = {
      sex: formData.get('sex'),
      tag: formData.get('tag'),
      breed: formData.get('breed'),
      location: formData.get('location'),
      status: formData.get('status'),
      isPregnant: formData.get('isPregnant'),
      dueDate: formData.get('dueDate'),
      imageUrl: imagePreview
    };
    onSubmit(formObject);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-cattle-form">
      <h3>Add New Cattle</h3>
      <div className="form-group">
        <label htmlFor="image">Cattle Image:</label>
        <input 
          type="file" 
          id="image" 
          name="image" 
          accept="image/*"
          onChange={handleImageChange}
        />
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Preview" />
          </div>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="tag">Tag Number:</label>
        <input type="text" id="tag" name="tag" required />
      </div>
      <div className="form-group">
        <label htmlFor="breed">Breed:</label>
        <select id="breed" name="breed" required>
          {breeds.map(breed => (
            <option key={breed} value={breed}>{breed}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="location">Location:</label>
        <select id="location" name="location" required>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="status">Status:</label>
        <select id="status" name="status" required>
          <option value="Healthy">Healthy</option>
          <option value="Vet Check Needed">Vet Check Needed</option>
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="sex">Sex:</label>
        <select 
          id="sex" 
          name="sex" 
          required 
          value={sex}
          onChange={(e) => setSex(e.target.value)}
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      {sex === 'Female' && (
        <>
          <div className="form-group">
            <label htmlFor="isPregnant">Pregnancy Status:</label>
            <select 
              id="isPregnant" 
              name="isPregnant" 
              required 
              value={isPregnant}
              onChange={(e) => setIsPregnant(e.target.value === 'true')}
            >
              <option value="false">Not Pregnant</option>
              <option value="true">Pregnant</option>
            </select>
          </div>
          {isPregnant && (
            <div className="form-group">
              <label htmlFor="dueDate">Estimated Due Date:</label>
              <input 
                type="date" 
                id="dueDate" 
                name="dueDate" 
                required 
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
          )}
        </>
      )}
      <div className="form-actions">
        <button type="submit" className="submit-button">Add Cattle</button>
        <button type="button" onClick={onCancel} className="cancel-button">Cancel</button>
      </div>
    </form>
  );
} 