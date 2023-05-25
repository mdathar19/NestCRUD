import { BookService } from "./book.service";
export declare class BookController {
    private bookService;
    addBook(): string;
    deleteBook(): string;
    constructor(bookService: BookService);
    updateBook(params: any): string;
    findBooks(): string;
    findbookById(params: any): string;
}
