import "./../sass/style.scss";
import { bookService } from "./serviceBase/bookService";

const idForm = document.getElementById("idForm") as HTMLFormElement;
const books = document.getElementById("books") as HTMLDivElement;
idForm.addEventListener("submit", async (e) => {
  books.innerHTML = "";
  e.preventDefault();
  const data = await bookService();
  for (let i = 0; i < 10; i++) {
    let j: string = "my" + i; // generera unik id i varje loop
    const book = document.createElement("div");

    const bookTitle = document.createElement("p");
    const authorName = document.createElement("p");
    const img = document.createElement("img") as HTMLImageElement;

    const s = data.docs[i].isbn[0];
    console.log(s);

    const url2 = `https://covers.openlibrary.org/b/isbn/${s}-L.jpg`;

    book.addEventListener("click", () => {
      book.classList.add("bookAnimation");
      setTimeout(function () {
        book.classList.remove("bookAnimation");
      }, 1000);
    });

    bookTitle.innerHTML = data.docs[i].title;
    authorName.innerHTML = data.docs[i].author_name[0];
    img.src = url2;

    book.className = "book";
    bookTitle.className = "title";
    authorName.className = "author";
    img.className = "img";
    img.setAttribute("id", j); // varje img tag får en unik id

    books?.appendChild(book);
    book.appendChild(img);
    book.appendChild(bookTitle);
    book.appendChild(authorName);

    const getWidth = document.getElementById(j) as HTMLImageElement; // hämtar varje imgTag med de unik id som de har fått
    getWidth.onload = () => {
      //funktionen laddar bilden
      const imgWidth = getWidth.naturalWidth; // sätter bildens bred i en variable
      if (imgWidth < 20) {
        // kollar om bilden bred är mindre än 20 px
        img.src = // om bildens bred är mindre än 20 px så ändras bildens SRC
          "https://2.bp.blogspot.com/-VZ0RvMPWrQo/TarvEtTJRjI/AAAAAAAADs0/DCjbJ-w3IE0/s1600/j0439527.jpg";
      }
    };
  }
});
//
//const test = document.getElementById("test") as HTMLDivElement;

/*   const inputID = document.getElementById("inputID") as HTMLInputElement;
  const searchBook = inputID.value;
  const url = `https://openlibrary.org/search.json?q=${searchBook}`;
  const data = await get<IBookData>(url); */

/*   console.log(data.docs[0]);

  const c = data.docs[0].isbn;

  for (let i = 0; i < 10; i++) {
    let j = "my" + (i + 1);
    console.log("vad är j" + typeof j);

    const s = c[i];
    const imgUrl = `https://covers.openlibrary.org/b/isbn/${s}-M.jpg`;
    const img = document.createElement("img") as HTMLImageElement;
    const p = document.createElement("p") as HTMLParagraphElement;

    img.src = imgUrl;
    p.innerHTML = " number" + i;

    test.appendChild(p);
    test.appendChild(img);
    img.setAttribute("id", j);

    const myImg = document.getElementById(j) as HTMLImageElement;
    myImg.onload = () => {
      const imgW = myImg.naturalWidth;
      console.log("number " + i + " w=" + imgW);
      if (imgW < 20) {
        img.src =
          "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg";
      }
    };
  }
 */
