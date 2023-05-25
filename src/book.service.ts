

// Seperations of concern that means i remove all the method from controller to the service file..

import { Injectable } from "@nestjs/common"

// export class BookService {


//     addBook () :string {
//         return 'This will add book'
//     }

//     deleteBook () : string {
//         return 'This will delete the book'
//     }

//     updateBook () :string {
//         return 'This will update the Book'
//     }

//     findAllBook ():string {
//         return 'This will find All Books'
//     }
// }

// for registsering as a provier we need to user injectable

// Injectable() : Decorator that marks a class as a provider. Providers can be injected into other classes via constructor parameter injection using Nest's built-in Dependency Injection (DI) system.


@Injectable()
export class BookService {


    addBook () :string {
        return 'This will add book'
    } 

    deleteBook () : string {
        return 'This will delete the book'
    }

    updateBook (arg : any) :string {
        return `This will update the Book ${arg}`
    }

    findAllBook ():string {
        return 'This will find All Books'
    }
}


