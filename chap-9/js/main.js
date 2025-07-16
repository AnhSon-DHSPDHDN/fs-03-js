const formEle = document.querySelector("#book-form");
const inputAuthorEle = document.querySelector("#author");
const inputTitleEle = document.querySelector("#title");
const inputCreateAtEle = document.querySelector("#create-at");
const inputElements = [inputAuthorEle, inputTitleEle, inputCreateAtEle];
const booksList = [];

const renderBookList = () => {
  let rows = "";
  booksList.forEach((bookItem) => {
    rows += `<tr>
      <td>${bookItem.author}</td>
      <td>${bookItem.title}</td>
      <td>${bookItem.createAt}</td>
    </tr>`;
  });

  const tbody = document.querySelector(".js-tbody");
  if (tbody) {
    tbody.innerHTML = rows;
  }
};

const handleSubmit = (event) => {
  event.preventDefault();

  // Clear all errors
  inputElements.forEach((elementItem) => {
    const span = elementItem.nextElementSibling;
    if (span) {
      span.textContent = elementItem.validationMessage;
    }
  });

  if (formEle.checkValidity()) {
    // Submit
    const newBook = {
      author: inputAuthorEle.value,
      title: inputTitleEle.value,
      createAt: inputCreateAtEle.value,
    };
    booksList.push(newBook);
    renderBookList();
    console.log("submit form success");
  } else {
    // Show error

    inputElements.forEach((elementItem) => {
      elementItem.addEventListener("invalid", () => {
        const span = elementItem.nextElementSibling;
        if (span) {
          span.textContent = elementItem.validationMessage;
        }
      });
    });
  }

  console.log(formEle.checkValidity(), "check validity");
};

formEle.addEventListener("submit", handleSubmit);
