import { Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { BookService } from "./book.service";


// Controller is used to get request from the Api and do what is needed and response properly like we used befor in express

// all get , post , put , and delete are the decorator provided by tha nest JS 

// It is neccesory to provide the controller to the Root modules in  controller array.

@Controller('book')
export class BookController {


    // add Book
    @Post('/add')
    addBook () : string {
        return 'This will add Book'  // this initial 
    }
    // delete Book
    @Delete('/delete')
    deleteBook () :string {
        return 'This will deleting Book'  // this initial 
    }

    // All of these will be very huge if we starts building the application like this, so we seperate the function into services, which is called seperation of concern. -- now see book.service.ts after that...

    // creating object instances using public keywork 

    //****code****
    // public bookService : BookService = new BookService()
    //****code****


    // fallback: so whenever we need to create a controller we need to make a new service or object so there is need to learn dependency injection , 
    // so here providers is that it can be injected as a dependency ,
    // now if i create any class or object , whenever i need the object of that perticular class we suppose to register as a provider. -- see book.service.ts after that

    // When injecting a provider, it must be visible within the module scope (loosely speaking, the containing module) of the class it is being injected into. This can be done by: -- see app.module.ts [provider]
    //****code****
    constructor (private bookService : BookService) {}
    //****code****


    // Update Book
    @Put('/update/:id')
    updateBook (@Param() params:any) :string {
        return this.bookService.updateBook(params.id)  // this is now seperated and clean
    }

    //find Books
    @Get('/findAll')
    findBooks () :string {
        return this.bookService.findAllBook()  // this is now seperated and clean
    }


    // find book by id
    @Get('/findbookById/:bookId')
    findbookById(@Param() params:any) : string {
        return `this will find book of ${params.bookId}`   // this initial 
    }


}