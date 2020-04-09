const books = document.querySelectorAll('.book'),
      book1 = books[1],
      book2 = books[0],
      book3 = books[4],
      book4 = books[3],
      book5 = books[5],
      book6 = books[2],
      book1Clone = books[1].cloneNode(true),
      book2Clone = books[0].cloneNode(true),
      book3Clone = books[4].cloneNode(true),
      book4Clone = books[3].cloneNode(true),
      book5Clone = books[5].cloneNode(true),
      book6Clone = books[2].cloneNode(true);

book2.before(book1);
book4.before(book3);
book5.after(book6);