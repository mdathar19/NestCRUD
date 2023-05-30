"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const res_services_1 = require("../assets/responseType/res.services");
let bookService = class bookService {
    constructor(response) {
        this.response = response;
        this.books = [];
    }
    addBook(book) {
        book.id = (0, uuid_1.v4)();
        this.books.push(book);
        return this.response.success();
    }
    findBook(id) {
        console.log(id);
        return this.books;
    }
    findAllBook() {
        return this.books;
    }
    deleteBook(bookId) {
        console.log("bookId", bookId);
        this.books = this.books.filter((book) => {
            return book.id != bookId;
        });
        return 'Book has been deleted succesfully';
    }
    updateBook(updatedbook) {
        let index = this.books.findIndex((book) => {
            return book.id == updatedbook.id;
        });
        this.books[index] = updatedbook;
        return 'Book has been updated successfully';
    }
};
bookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [res_services_1.responseBack])
], bookService);
exports.bookService = bookService;
//# sourceMappingURL=book.services.js.map