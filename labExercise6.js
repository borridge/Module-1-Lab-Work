//1
let book = {
    title: "The Silent Sea",
    description: "A thrilling ocean adventure",
    author: "James Rollins",
    pages: 350
  };
  
//2 
console.log(book.title);        // Output: The Silent Sea
console.log(book.description);  // Output: A thrilling ocean adventure
console.log(book.author);       // Output: James Rollins
console.log(book.pages);        // Output: 350

console.log(book);              // Output: the whole book object

//3 
book.description = "An updated gripping deep-sea thriller";
console.log(book.description);  // Output: An updated gripping deep-sea thriller

//4
let books = [
    {
      title: "The Silent Sea",
      description: "Ocean adventure",
      author: "James Rollins",
      pages: 350
    },
    {
      title: "Digital Fortress",
      description: "A cyber-security thriller",
      author: "Dan Brown",
      pages: 384
    },
    {
      title: "To Kill a Mockingbird",
      description: "Classic American literature",
      author: "Harper Lee",
      pages: 281
    },
    {
      title: "1984",
      description: "Dystopian future novel",
      author: "George Orwell",
      pages: 328
    },
    {
      title: "The Hobbit",
      description: "Fantasy adventure",
      author: "J.R.R. Tolkien",
      pages: 310
    }
  ];
  
  // Print the full array
  console.log(books);
  
  // Print each book's title
  books.forEach(book => console.log(book.title));
  