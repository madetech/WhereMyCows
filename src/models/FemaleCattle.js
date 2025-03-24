import { Cattle } from './Cattle';

export class FemaleCattle extends Cattle {
  #isPregnant;
  #dueDate;
  #pregnancyStatus;

  constructor(id, tag, breed, location, status = 'Healthy', isPregnant = false, dueDate = null, imageUrl = null) {
    super(id, 'Female', tag, breed, location, status, imageUrl);
    this.#isPregnant = isPregnant;
    this.#dueDate = dueDate;
    this.#pregnancyStatus = this.#calculatePregnancyStatus();
  }

  // Getters
  get isPregnant() { return this.#isPregnant; }
  get dueDate() { return this.#dueDate; }
  get pregnancyStatus() { return this.#pregnancyStatus; }

  // Setters with validation
  set isPregnant(newValue) {
    this.#isPregnant = newValue;
    this.#pregnancyStatus = this.#calculatePregnancyStatus();
  }

  set dueDate(newDate) {
    if (newDate && !(newDate instanceof Date)) {
      throw new Error('Due date must be a Date object');
    }
    this.#dueDate = newDate;
    this.#pregnancyStatus = this.#calculatePregnancyStatus();
  }

  getPregnancyStatusClass() {
    return this.#pregnancyStatus.toLowerCase().replace(/\s+/g, '-');
  }

  formatDueDate() {
    if (!this.#isPregnant || !this.#dueDate) {
      return 'N/A';
    }
    return this.#dueDate.toLocaleDateString();
  }

  #calculatePregnancyStatus() {
    if (!this.#isPregnant) return 'Not Pregnant';
    if (!this.#dueDate) return 'Pregnant';
    
    const today = new Date();
    const daysUntilDue = Math.ceil((this.#dueDate - today) / (1000 * 60 * 60 * 24));
    
    if (daysUntilDue <= 0) return 'Overdue';
    if (daysUntilDue <= 30) return 'Due Soon';
    return 'Pregnant';
  }

  toJSON() {
    return {
      ...super.toJSON(),
      isPregnant: this.#isPregnant,
      dueDate: this.#dueDate,
      pregnancyStatus: this.#pregnancyStatus
    };
  }
} 