import { Module } from "@nestjs/common";
import { bookService } from "./book.services";
import { bookController } from "./book.controller";
import { responseBack } from "src/assets/responseType/res.services";



@Module({
    imports : [],
    providers : [bookService,responseBack],
    controllers : [bookController],
})
export class BookModule {}
