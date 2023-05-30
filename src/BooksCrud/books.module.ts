import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { bookService } from "./book.services";
import { bookController } from "./book.controller";
import { responseBack } from "src/assets/responseType/res.services";
import { bookMiddleware } from "./book.middleware";



@Module({
    imports : [],
    providers : [bookService,responseBack],
    controllers : [bookController],
})
export class BookModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(bookMiddleware).forRoutes('book')
    }

}
