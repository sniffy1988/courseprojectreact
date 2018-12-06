export const getBooksSelector = state => state.BooksReducer.books;
export const getBook = state => state.BooksReducer.currentBook;
export const getError = state => state.BooksReducer.error;
