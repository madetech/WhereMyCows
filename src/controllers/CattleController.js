import { CattleFactory } from '../models';

export class CattleController {
  constructor() {
    this.cattle = CattleFactory.getInitialData();
  }

  getAllCattle() {
    return this.cattle;
  }

  addCattle(formData) {
    const newCattle = CattleFactory.createFromFormData(formData);
    this.cattle.push(newCattle);
    return newCattle;
  }

  getLocations() {
    return [
      'North Pasture',
      'South Pasture',
      'East Field',
      'West Field'
    ];
  }

  getBreeds() {
    return [
      'Angus',
      'Hereford',
      'Brahman'
    ];
  }

  updateCattle(id, updates) {
    for (let i = 0; i < this.cattle.length; i++) {
      if (this.cattle[i].id === id) {
        this.cattle[i].status = updates.status;
      }
    }

    const index = this.cattle.findIndex(cow => cow.id === id);
    if (index === -1) {
      throw new Error('Cattle not found');
    }
    const cattle = this.cattle[index];
    return cattle;
  }
} 