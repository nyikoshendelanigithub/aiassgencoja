// Book constructor function
function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  
  // Author constructor function
  function Author(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.books = [];
  }
  
  // Add a method to the Author prototype to add a book
  Author.prototype.addBook = function(book) {
    this.books.push(book);
  }
  
  // Create Author and Book objects
  var author1 = new Author("Stephen R.", "Covey");
  var author2 = new Author("Dale", "Carnegie");
  
  var book1 = new Book("The 7 habits of highly effective peolpe", author1, 1984);
  var book2 = new Book("How to win friends and influence people", author2, 1936);
  var book3 = new Book("First things first", author1, 1994);
  
  // Add books to respective authors
  author1.addBook(book1);
  author1.addBook(book3);
  author2.addBook(book2);
  
  // Display authors and their books
  console.log(author1);
  console.log(author2);
  