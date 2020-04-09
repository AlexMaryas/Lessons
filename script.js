const books = document.querySelectorAll('.book'),
      booksH2A = document.querySelectorAll('.book>h2>a'),
      book1 = books[1],
      book2 = books[0],
      book3 = books[4],
      book4 = books[3],
      book5 = books[5],
      book6 = books[2];

book2.before(book1);
book4.before(book3);
book5.after(book6);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
booksH2A[4].textContent = 'Книга 3. this и Прототипы Объектов';