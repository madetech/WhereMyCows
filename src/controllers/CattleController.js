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
} 