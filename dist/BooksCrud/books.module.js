"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModule = void 0;
const common_1 = require("@nestjs/common");
const book_services_1 = require("./book.services");
const book_controller_1 = require("./book.controller");
const res_services_1 = require("../assets/responseType/res.services");
const book_middleware_1 = require("./book.middleware");
let BookModule = class BookModule {
    configure(consumer) {
        consumer.apply(book_middleware_1.bookMiddleware).forRoutes('book');
    }
};
BookModule = __decorate([
    (0, common_1.Module)({
        imports: [],
        providers: [book_services_1.bookService, res_services_1.responseBack],
        controllers: [book_controller_1.bookController],
    })
], BookModule);
exports.BookModule = BookModule;
//# sourceMappingURL=books.module.js.map