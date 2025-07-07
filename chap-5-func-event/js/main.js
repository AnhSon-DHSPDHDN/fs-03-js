// console.log(document, "document");
// console.log(window, "window");

const formElement = document.querySelector(".form-student-info");
console.log(formElement, "formElement");

const calculateFullName = (firstName, lastName) => {
  return firstName + " " + lastName;
};

const displayStudentInfo = (firstName, lastName, age, gender) => {
  document.querySelector(".js-full-name").textContent = calculateFullName(
    firstName,
    lastName
  );
  document.querySelector(".js-age").textContent = age;
  document.querySelector(".js-gender").textContent = gender;
};

// Hàm xử lí submit
const handleSubmit = (event) => {
  event.preventDefault();

  const firstName = document.querySelector("#firstname").value;
  const lastName = document.querySelector("#lastname").value;
  const age = document.querySelector("#age").value;

  const inputMaleChecked = document.querySelector("#male").checked;
  const inputFemaleChecked = document.querySelector("#female").checked;

  const gender = inputMaleChecked
    ? "Male"
    : inputFemaleChecked
    ? "Female"
    : "LGBT";

  displayStudentInfo(firstName, lastName, age, gender);
};

const handleReset = () => {
  document.querySelector(".js-full-name").textContent = "";
  document.querySelector(".js-age").textContent = "";
  document.querySelector(".js-gender").textContent = "";
};

// Gán sự kiện submit cho form
formElement.addEventListener("submit", handleSubmit);
formElement.addEventListener("reset", handleReset);
