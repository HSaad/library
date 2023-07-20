let myLibrary = []; 
let container = document.querySelector('.container');

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

function displayBookDetails(book, bookDiv){
    let titleHTML = document.createElement('h2');
    titleHTML.innerHTML = book.title;

    let authorHTML = document.createElement('p');
    authorHTML.innerHTML = book.author;

    let pagesHTML = document.createElement('p');
    pagesHTML.innerHTML = book.pages + " pages";

    let isReadHTML = document.createElement('p');
    isReadHTML.innerHTML = (book.isRead ? "has been read" : "not read yet");

    bookDiv.appendChild(titleHTML);
    bookDiv.appendChild(authorHTML);
    bookDiv.appendChild(pagesHTML);
    bookDiv.appendChild(isReadHTML);
}

function displayBook(book){
    let bookDiv = document.createElement('div');
    bookDiv.classList.add("book");
    displayBookDetails(book, bookDiv);
    container.appendChild(bookDiv);
}

function displayLibrary(){
    myLibrary.forEach(book => {
        displayBook(book);
    });
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, false);
const harryPotter = new Book("Harry Potter", "J.K. Rowling", 345, true);
addBookToLibrary(theHobbit);
addBookToLibrary(harryPotter);
console.log(myLibrary);
displayLibrary();