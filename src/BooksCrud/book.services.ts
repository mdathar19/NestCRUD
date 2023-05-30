import { Injectable } from "@nestjs/common";
import { Books } from "./data/books.dto";
import { v4 as uuidv4 } from 'uuid';
import { response } from "src/assets/responseType/res.interface";
import { responseBack } from "src/assets/responseType/res.services";


@Injectable()
export class bookService {

    // here i take variable books with type Books[] with initially blank array 
    public books : Books[] = [ ]
    constructor ( private response : responseBack){}
    // add book
    addBook (book : Books) : response {
        book.id = uuidv4()
        this.books.push(book)
        // response = {message : 'book added successfully',errorCode : 200 , data :[]}
        return this.response.success()
    }
    // find book for using Pipe
    findBook (id : number) :Books[] {
        console.log(id)
        return this.books
    }
    // findAllBooks
    findAllBook () :Books[] {
        return this.books
    }
    // delete book
    deleteBook (bookId : string) : string {
        console.log("bookId",bookId)
        this.books = this.books.filter((book) => {
            return book.id != bookId
        })
        return 'Book has been deleted succesfully'
    }
    // update book
    updateBook (updatedbook : Books) : string {
        let index : number = this.books.findIndex((book) => {
            return book.id == updatedbook.id
        })
        this.books[index] = updatedbook
        return 'Book has been updated successfully'
    }



}



