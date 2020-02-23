class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="delete">X</a></td>
        `;
    list.appendChild(row);
  }
  showAlert(message, className) {
    // Create div
    const div = document.createElement("div");
    // Add ClassName
    div.className = `alert ${className}`;
    // Add Text
    div.appendChild(document.createTextNode(message));
    // Get Container
    const container = document.querySelector(".container");
    // Get Form
    const form = document.querySelector("#book-form");
    // Display Alert
    container.insertBefore(div, form);
    // Remove alert after 3 secs
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000);
  }
  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
    }
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}
// Event Listeners
document.getElementById("book-form").addEventListener("submit", function(e) {
  // Get form values
  const title = document.getElementById("title").value,
    author = document.getElementById("author").value,
    isbn = document.getElementById("isbn").value;
  //   alert("Yhup, You Work!");

  //   Instantiate book
  const book = new Book(title, author, isbn);
  // Instantiate UI
  const ui = new UI();
  //   Validate
  if (title === "" || author === "" || isbn === "") {
    // Error Alert
    ui.showAlert("Please fill all fields", "error");
  } else {
    ui.showAlert("Book added successfully", "success");
    // Add Book to List
    ui.addBookToList(book);
    // console.log(book);
    // Clear fields
    ui.clearFields();
  }

  e.preventDefault();
});

// Delete EventListener
document.getElementById("book-list").addEventListener("click", function(e) {
  // Instantiate UI
  const ui = new UI();
  // Delete Book
  ui.deleteBook(e.target);
  // Show Deleted Alert
  ui.showAlert("Book deleted!", "achieved");
  e.preventDefault();
});
