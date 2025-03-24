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
    newCattle.id = this.cattle.length + 1;
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