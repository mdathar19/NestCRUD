import { Books } from "./data/books.dto";
import { response } from "src/assets/responseType/res.interface";
import { responseBack } from "src/assets/responseType/res.services";
export declare class bookService {
    private response;
    books: Books[];
    constructor(response: responseBack);
    addBook(book: Books): response;
    findBook(): Books[];
    deleteBook(bookId: string): string;
    updateBook(updatedbook: Books): string;
}
