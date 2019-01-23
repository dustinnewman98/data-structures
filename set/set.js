class Set {
  constructor(values = []) {
    this.set = {};

    values.forEach(value => (this.set[value] = true));
  }

  add = value => {
    if (this.set[value]) {
      throw "Duplicate value provided.";
    }

    this.set[value] = true;
  };

  remove = value => {
    if (this.set[value]) {
      this.set[value] = false;
    } else {
      throw "Value not in Set.";
    }
  };

  contains = value => {
    return this.set[value];
  };

  clear = () => {
    this.set = {};
  };

  forEach = callback => {
    for (const key of Object.keys(this.set)) {
      callback(key, this.set[key]);
    }
  };
}
