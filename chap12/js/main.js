// Subject

// C1: literal
const subject = {
  id: 1,
  name: "Math",
  grade: 5,
  publisher: "Bo Giao Duc",
  createAt: "1990-1-1",
  getPublisher() {
    return this.publisher;
  },
}; // Object

console.log(subject, "subject");
console.log(subject.publisher);
console.log(subject.getPublisher());

// C2: Using class
class Subject {
  constructor(id, name, grade, publisher, createAt) {
    this.id = id;
    this.name = name;
    this.grade = grade;
    this.publisher = publisher;
    this.createAt = createAt;
  }

  // methods
  getPublisher() {
    return this.publisher;
  }
}

const subject2 = new Subject(2, "Physic", 6, "Bo GD", "1990");
const subject3 = new Subject(3, "English", 6, "Bo GD", "1990");
console.log(subject2, "subject2");
console.log(subject3, "subject3");
console.log(subject2.getPublisher());

const cat = new Animal("Tom", "Fish", "Blue", "House");
cat.setOwner("Son");
console.log(cat.getOwner());

const yellowDog = new Dog("Cậu vàng", "cơm", "vàng", "nhà", "Chó cỏ");
yellowDog.setOwner("Son");
yellowDog.setAction("Giữ nhà");
yellowDog.getAction();
yellowDog.getSound();

// Destructuring
const { name: yellowDogName, color: ylDogColor } = yellowDog;

// Destructuring of param
function showDog({ name, color }) {
  console.log(`Dog ${name} have color is: ${color}`);
}

showDog(yellowDog);
