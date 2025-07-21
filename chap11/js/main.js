const students = [
  {
    id: 1,
    fullName: "Nguyen Van A",
    class: "FS-1",
    mathScore: 9,
    physicScore: 8,
    chemistryScore: 7,
  },
  {
    id: 2,
    fullName: "Tran Thi B",
    class: "FS-2",
    mathScore: 3,
    physicScore: 6,
    chemistryScore: 7,
  },
  {
    id: 3,
    fullName: "Le Van C",
    class: "FS-1",
    mathScore: 7,
    physicScore: 5,
    chemistryScore: 6,
  },
  {
    id: 4,
    fullName: "Pham Thi D",
    class: "FS-2",
    mathScore: 8,
    physicScore: 7,
    chemistryScore: 8,
  },
  {
    id: 5,
    fullName: "Hoang Van E",
    class: "FS-1",
    mathScore: 6,
    physicScore: 6,
    chemistryScore: 5,
  },
  {
    id: 6,
    fullName: "Do Thi F",
    class: "FS-2",
    mathScore: 5,
    physicScore: 4,
    chemistryScore: 6,
  },
  {
    id: 7,
    fullName: "Bui Van G",
    class: "FS-1",
    mathScore: 10,
    physicScore: 9,
    chemistryScore: 10,
  },
  {
    id: 8,
    fullName: "Nguyen Thi H",
    class: "FS-2",
    mathScore: 4,
    physicScore: 5,
    chemistryScore: 5,
  },
  {
    id: 9,
    fullName: "Tran Van I",
    class: "FS-1",
    mathScore: 6,
    physicScore: 7,
    chemistryScore: 8,
  },
  {
    id: 10,
    fullName: "Le Thi K",
    class: "FS-2",
    mathScore: 7,
    physicScore: 6,
    chemistryScore: 7,
  },
];

console.log(students);

// 1. Tạo array newStudents có thêm thuộc tính averageScore (dùng hàm map)
//   {
//     id: 10,
//     class: "FS-2",
//     mathScore: 7,
//     physicScore: 6,
//     chemistryScore: 7,
//     averageScore: ...
//   },
// 2. Lọc ra những student có class = FS-2 (dùng filter)
// 3. Sắp xếp student có averageScore từ cao xuống thấp (dùng sort)
// 4. Tính điểm trung bình của cả lớp  (dùng reduce)
// 5. Kiểm tra xem có student nào có điểm trung bình dưới 5 không (some)
// 6. Tìm index của student có tên Tran Van I
