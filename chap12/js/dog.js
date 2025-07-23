class Dog extends Animal {
  #action = null;

  constructor(name, food, color, livingEnvironment, type) {
    super(name, food, color, livingEnvironment);
    this.type = type;
  }

  setAction(action) {
    this.#action = action;
  }

  getAction() {
    console.log(this.#action);
    return this.#action;
  }

  getSound() {
    console.log("Gâu Gâu");
    return "Gâu Gâu";
  }
}
