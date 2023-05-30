import { ArgumentMetadata, PipeTransform } from "@nestjs/common";
import { Books } from "src/BooksCrud/data/books.dto";
export declare class bookPipe implements PipeTransform {
    transform(value: any, metadata: ArgumentMetadata): Books;
}
