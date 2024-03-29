import './books.js'

window.addEventListener('load' ,()=>{
    createBookList();
});

async function createBookList(){
    const reponse = await fetch('./books.json');
    const json = await reponse.json();
    const books = document.getElementById('books');

    json.books.forEach((book)=>{
        const element = document.createElement('mit-book');
        element.book = book;
        books.appendChild(element);
    })
}