class Animal {
  #owner = null; // private property

  constructor(name, food, color, livingEnvironment) {
    this.name = name;
    this.food = food;
    this.color = color;
    this.livingEnvironment = livingEnvironment;
  }

  setOwner(owner) {
    this.#owner = owner;
  }

  getOwner() {
    return this.#owner;
  }
}
