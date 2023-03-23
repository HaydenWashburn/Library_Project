// PROJECT Section
console.log("PROJECT:\n==========\n");
const books = [
  {
    title: "Name of the Wind",
    author: "Patrick Rothfuss",
    read: true,
  },
];

class Book {
  constructor(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
  }
}

class Library {
  constructor(books) {
    this.bookCount = books.length;
    this.books = books;
  }

  addBook() {
    console.log("test")
    const title = document.getElementById("title");
    const author = document.getElementById("author");
    const read = document.getElementById("read");
    const newBook = new Book(title.value, author.value, read.value);
    this.books.push(newBook);
    this.bookCount++;
    const tbody = document.getElementById("tableBody");
    const newTr = document.createElement("tr");
    const newTitle = document.createElement("td");
    newTitle.textContent = title.value;
    const newAuthor = document.createElement("td");
    newAuthor.textContent = author.value;
    const newRead = document.createElement("td");
    let newReadCheckbox = document.createElement("input");
    newReadCheckbox.type = "checkbox";
    newReadCheckbox.checked = read.checked;
    newReadCheckbox.addEventListener("click", function(){
      newReadCheckbox.disabled = true
    })
    
    newRead.append(newReadCheckbox);
    newTr.append(newTitle, newAuthor, newRead);

    tbody.appendChild(newTr);
  }

  markRead(checkbox, id) {
    this.books.forEach(book => {
      if (id === book.id) {
        book.read = true;
        checkbox.checked = true;
        checkbox.disabled = true;
      }
    });
  }
}

const library = new Library(books);

const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  library.addBook();
});
