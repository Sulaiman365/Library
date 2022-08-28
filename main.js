let myLibrary = ['The Hobbit','J.R.R. Tolkien','295','not yet read'];

function Book(enteredBook)
{
    this.title = enteredBook[0];
    this.author = enteredBook[1];
    this.pages = enteredBook[2];
    this.read = enteredBook[3];
    this.info = function()
    {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}
const theHobbit = new Book(myLibrary);
console.log(theHobbit.info());