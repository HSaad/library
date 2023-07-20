let myLibrary = []; 

function Book(title, author, pages, isRead){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.isRead = isRead,
    this.info = function() {
        return this.title + " by " + this.author + 
                ", " + this.pages + " pages, " +
                (isRead ? "has been read" : "not read yet");
    }
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const harryPotter = new Book("Harry Potter", "J.K. Rowling", 345, true);
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
console.log(myLibrary);