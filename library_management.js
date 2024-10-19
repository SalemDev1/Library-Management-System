//Task 1- Creating a"Book" Class
class Book {
    constructor(title, author, ISBN) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this._isAvailable = true; 
    }

    //Saerching for the books details
    getDetails() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
      }
    
    //Using Getter for the "isAvailable" in order to check if the book is in stock
    get isAvailable() {
        return this._isAvailable;
      }
    
    //Using Setter for the "isAvailable" in order to update if the book is in stock
    set isAvailable(status) {
        this._isAvailable = status;
      }
    }

    //Task 2- Creating a section Class
    class Section {
        constructor(name) {
          this.name = name;
          this.books = []; // Array to store books in the section
        }
      
        // Tells use when a new book has beed added
        addBook(book) {
          this.books.push(book);
          console.log(`New addition to the ${this.name} section: "${book.title}" by ${book.author} is now available!`);
        }
      
        // calculates how many available books we have  
        getAvailableBooks() {
          return this.books.filter(book => book.isAvailable).length;
        }
      
        // listing  all books and then their availability
        listBooks() {
          console.log(`Books currently in the ${this.name} section:`);
          this.books.forEach(book => {
            if (book.isAvailable) {
              console.log(`"${book.title}" by ${book.author} is available for borrowing.`);
            } else {
              console.log(`"${book.title}" by ${book.author} is currently borrowed. Please check back later.`);
            }
          });
        }
      }