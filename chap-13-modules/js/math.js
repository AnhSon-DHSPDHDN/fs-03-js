import { PI as CustomPI } from "./constants.js";

export function sum(...args) {
  let sum = 0;
  for (const num of args) {
    sum += num;
  }
  return sum;
}

export function sOfCircle(r) {
  return r * r * CustomPI;
}

export function sOfRect(a, b) {
  return a * b;
}

// Closure
export function closure() {
  let count = 0;

  function increment() {
    count++;
    console.log(count, "count");
    return count;
  }

  return increment;
}
