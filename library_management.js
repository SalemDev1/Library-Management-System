// Task 1 - Creating a "Book" Class
class Book {
    constructor(title, author, ISBN) {
      this.title = title;
      this.author = author;
      this.ISBN = ISBN;
      this._isAvailable = true; 
    }
  
    // Searching for the book's details
    getDetails() {
      return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}`;
    }
  
    // Using Getter for the "isAvailable" to check if the book is in stock
    get isAvailable() {
      return this._isAvailable;
    }
  
    // Using Setter for the "isAvailable" to update the stock status
    set isAvailable(status) {
      this._isAvailable = status;
    }
  }
  
  // Task 2 - Creating a "Section" Class
  class Section {
    constructor(name) {
      this.name = name;
      this.books = []; 
    }
  
    // Logs when a new book has been added
    addBook(book) {
      this.books.push(book);
      console.log(`New addition to the ${this.name} section: "${book.title}" by ${book.author} is now available!`);
    }
  
    // Calculates how many available books we have
    getAvailableBooks() {
      return this.books.filter(book => book.isAvailable).length;
    }
  
    // Listing all books and their availability
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
  
    // This calculates and returns the total number of books available for borrowing
    calculateTotalBooksAvailable() {
      const availableBooks = this.books.filter(book => book.isAvailable);  // Filter the available books
      return availableBooks.length;  // Return the count of available books
    }
  }
  
  // Task 3 - Creating a "Patron" Class
  class Patron {
    constructor(name) {
      this.name = name;
      this.borrowedBooks = []; 
    }
  
    // Logs when a book is borrowed, if available
    borrowBook(book) {
      if (book.isAvailable) {
        book.isAvailable = false; 
        this.borrowedBooks.push(book);
        console.log(`Success! ${this.name} has checked out "${book.title}". Time to dive into a new adventure and get those AR points. I know you guys remember those!`);
      } else {
        console.log(`Sorry, ${this.name}. "${book.title}" is currently unavailable. Perhaps try another title?`);
      }
    }
  
    // Logs when a book is returned
    returnBook(book) {
      book.isAvailable = true; 
      this.borrowedBooks = this.borrowedBooks.filter(storybook => storybook.ISBN !== book.ISBN);
      console.log(`"${book.title}" has been returned by ${this.name}. Hope you enjoyed it!`);
    }
  }
  
  // Task 4 - Creating a VIPPatron Class that inherits from Patron
  class VIPPatron extends Patron {
    constructor(name, priority) {
      super(name);  // Inherits name and borrowedBooks from Patron
      this.priority = priority;  // VIPs get a priority flag
    }
  
    // Logs when a VIP borrows a book, prioritizing VIPs
    borrowBook(book) {
      if (this.priority) {
        console.log(`${this.name} (VIP) gets priority to borrow "${book.title}" before anyone else!`);
        super.borrowBook(book);  
      } else {
        console.log(`VIP ${this.name} is borrowing like a regular patron today.`);
        super.borrowBook(book);  
      }
    }
  }
  
  // Task 6 - Create and manage library sections and patrons
  
  // Create sections
  const mythology = new Section("Mythology");  // Section for Percy Jackson
  const classicLiterature = new Section("Classic Literature");  // Section for Lord of the Flies
  const culinaryScience = new Section("Culinary Science");  // Section for the Secret Krabby Patty Formula
  
  // Create books
  const book1 = new Book("Percy Jackson and the Lightning Thief", "Rick Riordan", "9780786838653");
  const book2 = new Book("Lord of the Flies", "William Golding", "9781573226127");
  const book3 = new Book("Secret Krabby Patty Formula", "Mr. Krabs", "9780553497755");
  
  // Add books to sections
  mythology.addBook(book1);
  classicLiterature.addBook(book2);
  culinaryScience.addBook(book3);
  
  // Create patrons
  const regularPatron = new Patron("Plankton");
  const vipPatron = new VIPPatron("Markum Reed", true);
  
  // Patrons borrow and return books
  regularPatron.borrowBook(book1);
  vipPatron.borrowBook(book1);
  regularPatron.returnBook(book1);
  vipPatron.borrowBook(book1);
  
  // List books and their availability
  console.log("Books in the Mythology section:");
  mythology.listBooks();
  
  console.log("Books in the Classic Literature section:");
  classicLiterature.listBooks();
  
  console.log("Books in the Culinary Science section:");
  culinaryScience.listBooks();
  
  // Calculate total available books in each section
  console.log(`Total available books in Mythology: ${mythology.calculateTotalBooksAvailable()}`);
  console.log(`Total available books in Classic Literature: ${classicLiterature.calculateTotalBooksAvailable()}`);
  console.log(`Total available books in Culinary Science: ${culinaryScience.calculateTotalBooksAvailable()}`);