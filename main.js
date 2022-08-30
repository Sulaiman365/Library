function openForm() {
  document.getElementById("myForm").style.display = "block";
}
function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function Book(enteredBook)
{
    this.title = enteredBook[0];
    this.author = enteredBook[1];
    this.pages = enteredBook[2];
    this.read = 'read';
    this.info = function()
    {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}


let myLibrary = [];
let libraryBook;
const addBook = document.querySelector('#add-btn');

const booksCardContainer = document.querySelector('.books-card-container');

let bookCounter = 0;

addBook.addEventListener('click',() =>{
  myLibrary[0] = document.getElementById('title').value;
  myLibrary[1] = document.getElementById('author').value;
  myLibrary[2] = document.getElementById('pages').value;

  const bookCard = document.createElement('div');
  bookCard.className = 'book-card';

  const bookTitle = document.createElement('div');
  bookTitle.className = 'book-card-div';
  const bookAuthor = document.createElement('div');
  bookAuthor.classList.add('book-card-div');
  const bookPages = document.createElement('div');
  bookPages.classList.add('book-card-div');

  const bookDelete = document.createElement('button');
  bookDelete.className = 'book-delete';

  const readUnread = document.createElement('button');
  readUnread.className = 'read-unread';

  libraryBook = new Book(myLibrary);

      if (libraryBook.title !== "" && libraryBook.author !== ""  && libraryBook.pages !== "" )
      {
        booksCardContainer.appendChild(bookCard);
        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(readUnread);
        bookCard.appendChild(bookDelete);
    

        bookTitle.textContent = `Title: ${libraryBook.title}`;
        bookAuthor.textContent = `Author: ${libraryBook.author}`;
        bookPages.textContent = `Pages: ${libraryBook.pages}`;
        bookDelete.textContent = 'Delete';
        readUnread.textContent = "Not Read";

        document.getElementById("myForm").style.display = "none";
      }

    
      readUnread.addEventListener('click', () => {
        switch(readUnread.textContent) {
          case "Read":
            readUnread.textContent = "Not Read";
            break;
          case "Not Read":
            readUnread.textContent = "Read";
        }
        
      })

    bookDelete.addEventListener('click',() => {
    const parent = bookDelete.parentNode;
    parent.style.display = 'none';
    
})
})


