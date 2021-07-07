let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(title, author, pages, read) {
  // do stuff here
  var newbook = new Book(title, author, pages, read);
  myLibrary.push(newbook);
}

function displayLibrary(){
    let tableCode = '<tr><th>Title</th><th>Author</th><th>Pages</th><th>Read</th></tr>';
    
    for(let i = 0; i < myLibrary.length; i++){
        tableCode += `<tr><td>${myLibrary[i].title}</td><td>${myLibrary[i].author}</td><td>${myLibrary[i].pages}</td><td>${myLibrary[i].read}</td></tr>`;
    }

    var table = document.getElementById("shelf");
    table.innerHTML = tableCode;
}


addBookToLibrary("2084", "Space George Orwell", 84, true);
addBookToLibrary("Pokeymans", "Satoshi Kagasomething", 150, false)
//alert("The book is " + myLibrary[0].title);
displayLibrary();

let addButton = document.getElementById('add');
let modal = document.querySelector(".modal");
let closebutton = document.querySelector(".close-btn");

addButton.onclick = function(){
    modal.style.display = "block";
}

closebutton.onclick = function(){
    modal.style.display = "none";
}
window.onclick = function(e){
    if(e.target == modal){
        modal.style.display = "none";
    }
}