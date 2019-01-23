class Set {
  constructor(keys = []) {
    this.set = {};
    this.size = 0;

    keys.forEach(key => {
      this.set[key] = true;
      this.size++;
    });
  }

  isEmpty() {
    return this.size === 0;
  }

  add(key) {
    if (this.set[key]) {
      throw "Duplicate key provided.";
    }

    this.set[key] = true;
    this.size++;
  }

  remove(key) {
    if (this.set[key]) {
      delete this.set[key];
      this.size--;
    } else {
      throw "Key not in Set.";
    }
  }

  contains(key) {
    return !!this.set[key];
  }

  clear() {
    this.set = {};
    this.size = 0;
  }

  forEach(callback) {
    for (const key of Object.keys(this.set)) {
      callback(key, this.set[key]);
    }
  }

  isSubset(other) {
    let ret = true;
    this.forEach(key => {
      if (!other.contains(key)) {
        ret = false;
      }
    });
    return ret;
  }

  hasSubset(other) {
    let ret = true;
    other.forEach(key => {
      if (!this.contains(key)) {
        ret = false;
      }
    });
    return ret;
  }
}

module.exports = Set;
