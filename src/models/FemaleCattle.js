import { Cattle } from './Cattle';

export class FemaleCattle extends Cattle {
  constructor(id, tag, breed, location, status, isPregnant, dueDate, imageUrl = null) {
    super(id, tag, breed, location, status, imageUrl);
    this.sex = 'Female';
    this.isPregnant = isPregnant;
    this.dueDate = dueDate;
  }

  static createFromFormData(formData) {
    const isPregnant = formData.get('isPregnant') === 'true';
    const dueDate = isPregnant ? formData.get('dueDate') : null;
    const imageUrl = formData.get('image') ? URL.createObjectURL(formData.get('image')) : null;

    return new FemaleCattle(
      null, // ID will be set by controller
      formData.get('tag'),
      formData.get('breed'),
      formData.get('location'),
      formData.get('status') || 'Healthy', // Default to 'Healthy' if not provided
      isPregnant,
      dueDate,
      imageUrl
    );
  }

  getPregnancyStatusClass() {
    return this.isPregnant ? 'pregnant' : 'not-pregnant';
  }

  formatDueDate() {
    return this.dueDate ? new Date(this.dueDate).toLocaleDateString() : 'N/A';
  }
} 