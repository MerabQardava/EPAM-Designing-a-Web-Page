
const books = [
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        category: "fiction",
        status: "available"
    },
    {
        title: "A Brief History of Time",
        author: "Stephen Hawking",
        category: "science",
        status: "borrowed"
    },
    {
        title: "1984",
        author: "George Orwell",
        category: "fiction",
        status: "available"
    },
    {
        title: "Sapiens",
        author: "Yuval Noah Harari",
        category: "non-fiction",
        status: "borrowed"
    }
];


const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const booksContainer = document.getElementById('booksContainer');


function displayBooks(booksToDisplay) {
    booksContainer.innerHTML = '';
    
    booksToDisplay.forEach(book => {
        const bookCard = document.createElement('div');
        bookCard.className = 'book-card';
        
        bookCard.innerHTML = `
            <div class="book-title">${book.title}</div>
            <div class="book-author">by ${book.author}</div>
            <div class="book-category">${book.category}</div>
            <div class="book-status ${book.status}">${book.status}</div>
        `;
        
        booksContainer.appendChild(bookCard);
    });
}


function filterBooks() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = categoryFilter.value;
    
    let filteredBooks = books.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(searchTerm) || 
                            book.author.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === 'all' || book.category === selectedCategory;
        
        return matchesSearch && matchesCategory;
    });
    
    displayBooks(filteredBooks);
}


searchInput.addEventListener('input', filterBooks);
categoryFilter.addEventListener('change', filterBooks);


displayBooks(books);
