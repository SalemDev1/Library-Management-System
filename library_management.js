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
          this.books = []; 
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

    //Task 3- Creating a Patron Class
      class Patron {
        constructor(name) {
          this.name = name;
          this.borrowedBooks = []; 
        }
      
        // tells us we can borrow a book if we have it
        borrowBook(book) {
          if (book.isAvailable) {
            book.isAvailable = false; 
            this.borrowedBooks.push(book);
            console.log(`Success! ${this.name} has checked out "${book.title}". Time to dive into a new adventure and get them AR points, i know you guys remember those`);
          } else {
            console.log(`Sorry, ${this.name}. "${book.title}" is currently unavailable. Perhaps try another title?`);
          }
        }
      
        // Tells us what happens when returning a borrowed book
        returnBook(book) {
          book.isAvailable = true; 
        this.borrowedBooks = this.borrowedBooks.filter(storybook => storybook.ISBN !== book.ISBN);
          console.log(`"${book.title}" has been returned by ${this.name}. Hope you enjoyed it!`);
        }
      } 

      //Task 4-  creating a vip patron class that inherits from patron 
      class VIPPatron extends Patron {
        constructor(name, priority) {
          super(name);  // gets the name from the Patron class
          this.priority = priority;  // VIPs get a priority flag (Big Brains coming through)
        }
      
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

      //Task 5- Handle Books Borrowing and Returning
      class Section {
        constructor(name) {
          this.name = name;  // Name of the genre/section
          this.books = [];  
        }
      
        // Adds a book to the section
        addBook(book) {
          this.books.push(book);  
        }
      
        // This calculates and returns the total number of books available for borrowing
        calculateTotalBooksAvailable() {
          const availableBooks = this.books.filter(book => book.isAvailable);  // Filter the available books
          return availableBooks.length;  // Return the count of available books
        }
      }
