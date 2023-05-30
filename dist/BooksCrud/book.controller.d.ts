import { Books } from "./data/books.dto";
import { bookService } from "./book.services";
import { response } from "src/assets/responseType/res.interface";
export declare class bookController {
    private books;
    constructor(books: bookService);
    findBooks(id: number): Books[];
    ParseBoolean(id: number): Books[];
    findAllBooks(): Books[];
    addBook(newBook: Books): response;
    deleteBook(id: string): string;
    updateBook(updatedBook: Books): string;
}
