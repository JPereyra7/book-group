import axios from 'axios';
import './../sass/style.scss'

// ${}`
const books = document.getElementById('books');
const idForm = document.getElementById('idForm') as HTMLFormElement;
idForm.addEventListener('submit', async (e) => {
    e.preventDefault();
const inputID = document.getElementById('inputID') as HTMLInputElement;
const searchBook = inputID.value;
//const bookContainer = document.getElementById('bookContainer') as HTMLDivElement;

const url = `https://openlibrary.org/search.json?q=${searchBook}`;


const response = await axios.get(url);
const data = response.data;


if (books) {
books.innerHTML = "";
}

// if (books) {
//     books.innerHTML = "";
// }

// if (condition) {
    
// }
// const lTen = 10;
//"`https://covers.openlibrary.org/b/isbn/${}-S.jpg`"

console.log(data);

for (let i = 0; i < 10; i++) {

    const book = document.createElement('div');
    
    const bookTitle = document.createElement("p");
    const authorName = document.createElement("p");
    const img = document.createElement("img") as HTMLImageElement;
    
    const s = data.docs[i].isbn[0];
    const url2 =  `https://covers.openlibrary.org/b/isbn/${s}-L.jpg`;
    
    
    
    book.addEventListener("click", () => {
        book.classList.add("bookAnimation");
        setTimeout(function() {
            book.classList.remove("bookAnimation");
        },1000);
   }); 


//     dist.classList.remove('animation');

    // setTimeout(function(){
    //     dist.classList.add('animation');
    // },10);

    //Classes
    bookTitle.innerHTML = data.docs[i].title;
    authorName.innerHTML = data.docs[i].author_name;
    img.src = url2

    
    book.className = 'book';
    bookTitle.className = 'title';
    authorName.className = 'author';
    img.className = 'img';
    
    books?.appendChild(book);
    book.appendChild(img);
    book.appendChild(bookTitle);
    book.appendChild(authorName);
}
console.log(data.docs[0].isbn);


});






