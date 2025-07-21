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

console.log(students, "Student original");

// 1. Tạo array newStudents có thêm thuộc tính averageScore (dùng hàm map)
//   {
//     id: 10,
//     class: "FS-2",
//     mathScore: 7,
//     physicScore: 6,
//     chemistryScore: 7,
//     averageScore: ...
//   },

const newStudents = students.map((_student) => ({
  ..._student,
  averageScore:
    (_student.chemistryScore + _student.mathScore + _student.physicScore) / 3,
}));

// 2. Lọc ra những student có class = FS-2 (dùng filter)
const studentHasFS2 = students.filter((_student) => _student.class === "FS-2");

// 3. Sắp xếp student có averageScore từ cao xuống thấp (dùng sort)
const sortStudent = newStudents.sort(
  (student1, student2) => student2.averageScore - student1.averageScore
);

// 4. Tính điểm trung bình của cả lớp  (dùng reduce)
const totalScore = newStudents.reduce((sum, student) => {
  return sum + student.averageScore;
}, 0);
const averageScoreOfClass = totalScore / newStudents.length;

// 5. Kiểm tra xem có student nào có điểm trung bình dưới 5 không (some)
const isHasLowScore = newStudents.some((_student) => _student.averageScore < 5);

// 6. Tìm index của student có tên Tran Van I
const indexStudent = newStudents.findIndex(
  (_student) => _student.fullName === "Tran Van I"
);

// find, every, includes
// https://www.youtube.com/watch?v=HB1ZC7czKRs&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=4
// https://www.youtube.com/watch?v=QNmRfyNg1lw&list=PLu8EoSxDXHP6CGK4YVJhL_VWetA865GOH&index=7
