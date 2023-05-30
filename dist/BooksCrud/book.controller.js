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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookController = void 0;
const common_1 = require("@nestjs/common");
const book_services_1 = require("./book.services");
const book_guard_1 = require("./book.guard");
const book_pipe_1 = require("../pipes/book.pipe");
let bookController = class bookController {
    constructor(books) {
        this.books = books;
    }
    findBooks(id) {
        return this.books.findBook(id);
    }
    ParseBoolean(id) {
        return this.books.findBook(id);
    }
    findAllBooks() {
        return this.books.findAllBook();
    }
    addBook(newBook) {
        return this.books.addBook(newBook);
    }
    deleteBook(id) {
        return this.books.deleteBook(id);
    }
    updateBook(updatedBook) {
        return this.books.updateBook(updatedBook);
    }
};
__decorate([
    (0, common_1.Get)('/ParseIntPipe/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Array)
], bookController.prototype, "findBooks", null);
__decorate([
    (0, common_1.Get)('/ParseBoolPipe/:id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseBoolPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Array)
], bookController.prototype, "ParseBoolean", null);
__decorate([
    (0, common_1.Get)('/findAllBook'),
    (0, common_1.UseGuards)(book_guard_1.bookGuard),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Array)
], bookController.prototype, "findAllBooks", null);
__decorate([
    (0, common_1.Post)('/addBook'),
    __param(0, (0, common_1.Body)(new book_pipe_1.bookPipe())),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Object)
], bookController.prototype, "addBook", null);
__decorate([
    (0, common_1.Delete)('/deleteBook/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", String)
], bookController.prototype, "deleteBook", null);
__decorate([
    (0, common_1.Put)('/updateBook'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", String)
], bookController.prototype, "updateBook", null);
bookController = __decorate([
    (0, common_1.Controller)('/book'),
    __metadata("design:paramtypes", [book_services_1.bookService])
], bookController);
exports.bookController = bookController;
//# sourceMappingURL=book.controller.js.map