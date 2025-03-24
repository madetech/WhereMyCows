import { Cattle } from './Cattle';

export class MaleCattle extends Cattle {
  #semenQuality;

  constructor(id, tag, breed, location, status = 'Healthy', semenQuality = 'Good', imageUrl = null) {
    super(id, 'Male', tag, breed, location, status, imageUrl);
    this.#semenQuality = semenQuality;
  }

  // Getter
  get semenQuality() { return this.#semenQuality; }

  // Setter with validation
  set semenQuality(newQuality) {
    if (!newQuality) {
      throw new Error('Semen quality cannot be empty');
    }
    this.#semenQuality = newQuality;
  }

  toJSON() {
    return {
      ...super.toJSON(),
      semenQuality: this.#semenQuality
    };
  }
} 