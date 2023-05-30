import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";
import { Books } from "src/BooksCrud/data/books.dto";



// custom pipe

export class bookPipe implements PipeTransform {
    
    transform(value :any, metadata: ArgumentMetadata):Books{
        
        return value 
        // if(value == this.book){
        //     console.log("value2",value)
        // }
        console.log("metadata",metadata)
        // if(metadata.type == 'body'){
        //     metadata.data : Books
        // }
        // throw new Error("Method not implemented.");
    }

}