export class Cattle {
  #id;
  #sex;
  #tag;
  #breed;
  #location;
  #status;
  #imageUrl;

  constructor(id, sex, tag, breed, location, status = 'Healthy', imageUrl = null) {
    this.#id = id;
    this.#sex = sex;
    this.#tag = tag;
    this.#breed = breed;
    this.#location = location;
    this.#status = status;
    this.#imageUrl = imageUrl;
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