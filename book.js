
function Author(name, birthYear, nationality) {
    this.name = name;
    this.birthYear = birthYear;
    this.nationality = nationality;
  }
  
  function Book(title, author, genre, price) {
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.price = price;
  }
  Book.prototype.getBookInfo = function() {
    console.log("Title: " + this.title);
    console.log("Author: " + this.author.name);
    console.log("Genre: " + this.genre);
    console.log("Price: $" + this.price);
    console.log("------------------------");
  };
  var author1 = new Author("J.K. Rowling", 1965, "British");
  var author2 = new Author("George R.R. Martin", 1948, "American");
  var book1 = new Book("Harry Potter and the Sorcerer's Stone", author1, "Fantasy", 10.99);
  var book2 = new Book("A Game of Thrones", author2, "Fantasy", 12.99);
  book1.getBookInfo();
  book2.getBookInfo();
  