document.addEventListener('DOMContentLoaded', function() {
    fetchBooks();

    document.getElementById('bookForm').addEventListener('submit', function(e) {
        e.preventDefault();
        addBook();
    });
});

function fetchBooks() {
    fetch('get_books.php')
        .then(response => response.json())
        .then(data => {
            const bookList = document.getElementById('bookList');
            bookList.innerHTML = '';
            data.forEach(book => {
                const bookItem = document.createElement('div');
                bookItem.className = 'book-item';
                bookItem.innerHTML = `<strong>${book.title}</strong><br>${book.author}<br>${book.genre}<br>${book.published_date}`;
                bookList.appendChild(bookItem);
            });
        });
}

function addBook() {
    const formData = new FormData(document.getElementById('bookForm'));

    fetch('add_book.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert(data);
        fetchBooks();
        document.getElementById('bookForm').reset();
    });
}
