import { Body, Controller, Delete, Get, Param, ParseBoolPipe, ParseIntPipe, Post, Put, UseGuards } from "@nestjs/common";
import { Books } from "./data/books.dto";
import { bookService } from "./book.services";
import { response } from "src/assets/responseType/res.interface";
import { bookGuard } from "./book.guard";
import { bookPipe } from "src/pipes/book.pipe";



@Controller('/book')

export class bookController {
    constructor(private books : bookService) {}

    // ParseInt  : its a built-in pipe
    @Get('/ParseIntPipe/:id')
    findBooks (@Param('id', ParseIntPipe) id:number ) : Books[] {
        return this.books.findBook(id)
    }
    // ParseBoolPipe
    @Get('/ParseBoolPipe/:id')
    ParseBoolean (@Param('id', ParseBoolPipe) id:number ) : Books[] {
        return this.books.findBook(id)
    }
    // findAllBooks
    @Get('/findAllBook')
    @UseGuards(bookGuard)
    findAllBooks () : Books[] {
        return this.books.findAllBook()
    }
    //add
    @Post('/addBook')
    addBook (@Body(new bookPipe()) newBook : Books) : response {
        return this.books.addBook(newBook)
    }
    //delete
    @Delete('/deleteBook/:id')
    deleteBook (@Param('id') id : string) : string {
        return this.books.deleteBook(id)
    }
    //update
    @Put('/updateBook')
    updateBook (@Body() updatedBook : Books) : string {
        return this.books.updateBook(updatedBook)
    }
}


