import { Cattle } from './Cattle';

export class MaleCattle extends Cattle {
  constructor(id, tag, breed, location, status = 'Healthy', imageUrl = null) {
    super(id, 'Male', tag, breed, location, status, imageUrl);
  }

  toJSON() {
    return {
      ...super.toJSON()
    };
  }
} 