export class Cattle {
  constructor(id, tag, breed, location, status, imageUrl = null) {
    this.id = id;
    this.tag = tag;
    this.breed = breed;
    this.location = location;
    this.status = status;
    this.imageUrl = imageUrl;
  }

  getStatusClass() {
    return this.status.toLowerCase().replace(/\s+/g, '-');
  }

  hasImage() {
    return this.imageUrl !== null && this.imageUrl !== undefined;
  }
}

// Remove unused classes since they are in their own files 