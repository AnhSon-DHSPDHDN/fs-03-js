const endPointUrl = "https://jsonplaceholder.typicode.com/comments";

// fetch(endPointUrl)
//   .then((response) => {
//     response.json().then((data) => {
//       console.log(data, "data");
//     });
//   })
//   .catch((errors) => {
//     console.log(errors, "errors");
//   });

const fetchComment = async () => {
  const response = await fetch(endPointUrl);
  return await response.json();
};

const renderComment = (comments) => {
  const contentEle = document.querySelector(".content");
  let row = ``;
  comments.forEach((commentItem) => {
    row += `<div>${commentItem.email}: ${commentItem.body}</div>`;
  });
  contentEle.innerHTML = row;
};

const main = async () => {
  try {
    const commentsData = await fetchComment();
    renderComment(commentsData);
  } catch (error) {
    console.log(error, "error");
  }
};

main();

const questions = [
  {
    question: "Cau hoi 1",
    answers: [
      {
        answer: "Dap an A",
        isCorrectAnswer: true,
      },
      {
        answer: "Dap an B",
        isCorrectAnswer: false,
      },
      {
        answer: "Dap an C",
        isCorrectAnswer: false,
      },
    ],
  },
];

const questions2 = [
  {
    question: "Cau hoi 1",
    correctAnswer: "Dap an B",
    answers: ["Dap an A", "Dap an B", "Dap an C"],
  },
];
