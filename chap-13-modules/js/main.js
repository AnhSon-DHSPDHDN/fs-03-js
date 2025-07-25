import { sum, sOfCircle, sOfRect, closure } from "./math.js";

console.log(sum(5, 3, 2), "sum");
console.log(sOfCircle(3), "S Circle");
console.log(sOfRect(10, 5), "S of Rect");

const instanceClosure = closure(); // Tạo 1 vùng nhớ để thực thi
instanceClosure(); // 1
instanceClosure(); // 2
instanceClosure(); // 3

const instanceClosure2 = closure();
instanceClosure2(); // 1
instanceClosure2(); // 2

instanceClosure(); // 4
