const books = document.querySelectorAll('.book'),
      booksH2A = document.querySelectorAll('.book>h2>a'),
      adv = document.querySelector('.adv'),
      chapters = document.querySelectorAll('.book>ul>li'),
      book1 = books[1],
      book2 = books[0],
      book3 = books[4],
      book4 = books[3],
      book5 = books[5],
      book6 = books[2],
      chapter8 = document.createElement('li');

book2.before(book1);
book4.before(book3);
book5.after(book6);

document.body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';
booksH2A[4].textContent = 'Книга 3. this и Прототипы Объектов';
adv.remove();

chapters[9].after(chapters[2]);
chapters[8].after(chapters[7]);
chapters[8].after(chapters[4]);
chapters[4].after(chapters[5]);

chapters[56].before(chapters[54]);
chapters[54].before(chapters[51]);
chapters[47].after(chapters[55]);
chapters[50].after(chapters[48]);

chapter8.textContent = 'Глава 8: За пределами ES6';
chapters[25].after(chapter8);