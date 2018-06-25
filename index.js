const books = [
    {title: 'A Tale of Two Cities', author: "Charles Dickens"},
    {title: 'War and Peace', author: "Leo Tolstory"},
    {title: 'The Count of Monte Cristo', author: 'Alexandre Dumas'},
    {title: 'The Federalist Papers', author: 'Alexander Hailton', featured: true},
    {title: 'Common Sense', author: 'Thomas Paine', featured: true},
];

let h = React.createElement;

let BookRow = (book) =>
    h('li', null, book.title + ' by ' + book.author);

let BookList = (props) =>
    h('ul', {className:'book-list'}, 
        props.books.map(book => 
            h(BookRow, book)
        )
    );

let container = h('div', null, [
    h('h1', null, 'Bookstore'),
    h(BookList, {books: books}), 
    h('h2', null, 'Featured'),
    h(BookList, {books: books.filter(book => book.featured)}),
    h('footer', null, 'Copyright 2018'), 
]);

ReactDOM.render(
    container, 
    document.querySelector('.react-root')
);