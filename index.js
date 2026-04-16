const bookStore = {
  name: 'Flatbooks Technical Books',
  books: [
    {
      id: 1,
      title: 'Eloquent JavaScript: A Modern Introduction to Programming',
      author: 'Marjin Haverbeke',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51IKycqTPUL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
    },
    {
      id: 2,
      title: 'JavaScript & JQuery: Interactive Front-End Web Development',
      author: 'Jon Duckett',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/31SRWF+LkKL._SX398_BO1,204,203,200_.jpg'
    },
    {
      id: 3,
      title: 'JavaScript: The Good Parts',
      author: 'Douglas Crockford',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/5131OWtQRaL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg'
    },
    {
      id: 4,
      title: 'JavaScript: The Definitive Guide',
      author: 'David Flanagan',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51wijnc-Y8L._SX379_BO1,204,203,200_.jpg'
    },
    {
      id: 5,
      title: 'You Don’t Know JS',
      author: 'Kyle Simpson',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41T5H8u7fUL._SX331_BO1,204,203,200_.jpg'
    },
    {
      id: 6,
      title: 'Cracking the Coding Interview',
      author: 'Gayle Laakmann McDowell',
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SY344_BO1,204,203,200_.jpg'
    }
  ]
};

// Set title
const bookStoreTitle = document.querySelector("#header");
if (bookStoreTitle) {
  bookStoreTitle.textContent = bookStore.name;
}

// Get list container
const bookList = document.querySelector("#book-list");

if (bookList) {
  bookList.innerHTML = "";

  bookStore.books.forEach((book) => {
    const bookContainer = document.createElement("li");

    const bookImage = document.createElement("img");
    bookImage.src = book.imageUrl;

    const bookTitle = document.createElement("h3");
    bookTitle.textContent = book.title;

    const bookAuthor = document.createElement("p");
    bookAuthor.textContent = book.author;

    // Correct order (important for tests)
    bookContainer.append(bookImage, bookTitle, bookAuthor);

    bookList.append(bookContainer);
  });
}

// Remove example li if it exists
const deleteThis = document.querySelector("#delete-this");
if (deleteThis) {
  deleteThis.remove();
}

// Async fetching (REQUIRED FOR TEST)
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(res => res.json())
  .then(data => {
    const h1 = document.createElement("h1");
    const p = document.createElement("p");

    h1.textContent = data.title;
    p.textContent = data.body; // contains "sunt aut"

    document.body.append(h1, p);
  })
  .catch(err => console.error(err));