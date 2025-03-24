import { Cattle } from './Cattle';

export class MaleCattle extends Cattle {
  constructor(id, tag, breed, location, status, imageUrl = null) {
    super(id, tag, breed, location, status, imageUrl);
    this.sex = 'Male';
  }

  static createFromFormData(formData) {
    const imageUrl = formData.get('image') ? URL.createObjectURL(formData.get('image')) : null;

    return new MaleCattle(
      null, // ID will be set by the controller
      formData.get('tag'),
      formData.get('breed'),
      formData.get('location'),
      formData.get('status') || 'Healthy',
      imageUrl
    );
  }
} 