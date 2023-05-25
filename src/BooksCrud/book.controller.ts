import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Books } from "./data/books.dto";
import { bookService } from "./book.services";
import { response } from "src/assets/responseType/res.interface";



@Controller('/book')

export class bookController {
    constructor(private books : bookService) {}

    //find
    @Get('/findAllBook')
    findBooks () : Books[] {
        return this.books.findBook()
    }
    //add
    @Post('/addBook')
    addBook (@Body() newBook : Books) : response {
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


