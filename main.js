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

addBook.addEventListener('click',() =>{
  myLibrary[0] = document.getElementById('title').value;
  myLibrary[1] = document.getElementById('author').value;
  myLibrary[2] = document.getElementById('pages').value;

  libraryBook = new Book(myLibrary);
})


