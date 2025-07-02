// + 0.5 Diem BT2: Le minh, Duy Tung

console.log("Main.JS Run!!");

const scoreList = [7, 8, 6, 9, 10, 3, 4.5, 5.7, 9, 1];

while (true) {
  const inputNumber = prompt("Please input your score:");
  if (inputNumber === "exit" || inputNumber === "" || inputNumber === null) {
    break; // Thoat vong lap
  }

  const score = Number(inputNumber); // string => number = NaN
  if (isNaN(score) || score < 0 || score > 10) {
    continue; // Bo qua vong lap hien tai, tiep tuc vong lap moi
  }

  scoreList.push(score); // Them phan tu vao mang
}

console.log(scoreList, "DS Diem");

// Tinh Diem trung binh
let sumScore = 0;

// Duyet qua tat ca cac phan tu
for (let index = 0; index < scoreList.length; index++) {
  sumScore = sumScore + scoreList[index];
}

const average = sumScore / scoreList.length;
console.log("Diem trung binh la: ", average);

// ================
// Yeu cau: Khong su dung ham co san của array: reverse, min, max, includes, ...

// Kiem tra ton tai diem 8 hay khong ?
// Tim va in ra diem lon nhat ?
// Tim va in ra diem nho nhat ?
// Sap xep danh sach tu nho den lon ?
// Dao nguoc danh sach
