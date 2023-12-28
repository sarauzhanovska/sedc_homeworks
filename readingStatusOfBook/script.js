const userInput = prompt('Enter a book title!');
const userInput1 = prompt('Enter the author of that book!');
const userInput2 = confirm('If you have read the book press OK, if not press CLOSE.');

class Book {
    constructor(title, author, readingStatus) {
        this.title = title;
        this.author = author;
        this.readingStatus = readingStatus;
    }
    returnInfo() {
        if (this.readingStatus) {
            console.log(`You have already read '${this.title}' by ${this.author}.`);
        }
        else {
            console.log(`You still need to read '${this.title}' by ${this.author}.`);
        }
    }
}

const customBook = new Book(userInput, userInput1, userInput2);
customBook.returnInfo();
