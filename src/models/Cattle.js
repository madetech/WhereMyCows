export class Cattle {
  #id;
  #sex;
  #tag;
  #breed;
  #location;
  #status;
  #imageUrl;
  fieldX;
  fieldY;

  constructor(id, sex, tag, breed, location, status = 'Healthy', imageUrl = null, fieldX = 0.0, fieldY = 0.0) {
    this.#id = id;
    this.#sex = sex;
    this.#tag = tag;
    this.#breed = breed;
    this.#location = location;
    this.#status = status;
    this.#imageUrl = imageUrl;
    this.fieldX = fieldX;
    this.fieldY = fieldY;
  }

  // Getters
  get id() { return this.#id; }
  get sex() { return this.#sex; }
  get tag() { return this.#tag; }
  get breed() { return this.#breed; }
  get location() { return this.#location; }
  get status() { return this.#status; }
  get imageUrl() { return this.#imageUrl; }

  // Setters with validation
  set location(newLocation) {
    if (!newLocation) {
      throw new Error('Location cannot be empty');
    }
    this.#location = newLocation;
  }

  set status(newStatus) {
    if (!newStatus) {
      throw new Error('Status cannot be empty');
    }
    this.#status = newStatus;
  }

  set imageUrl(newUrl) {
    this.#imageUrl = newUrl;
  }

  hasImage() {
    return this.#imageUrl !== null && this.#imageUrl !== undefined;
  }

  getStatusClass() {
    return this.#status.toLowerCase().replace(/\s+/g, '-');
  }

  getPossiblyInfected(cattle){
    for (let i = 0; i < cattle.length; i++){
      let cattleDistance = Math.sqrt(((cattle[i].fieldX - this.fieldX) * (cattle[i].fieldX - this.fieldX)) + ((cattle[i].fieldY - this.fieldY) * (cattle[i].fieldY - this.fieldY)));
      if (cattleDistance < 10){
        if (cattle[i].#status === 'Infected'){
          return true;
        }
      }
    }

    if (this.#status === 'Infected'){
      return true;
    } else {
      return false;
    }
  }

  toJSON() {
    return {
      id: this.#id,
      sex: this.#sex,
      tag: this.#tag,
      breed: this.#breed,
      location: this.#location,
      status: this.#status,
      imageUrl: this.#imageUrl
    };
  }
}

// Remove unused classes since they are in their own files 