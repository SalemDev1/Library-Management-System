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
    