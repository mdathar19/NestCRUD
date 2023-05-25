import { Module } from '@nestjs/common';
import { BookModule } from './BooksCrud/books.module';
// import { UsersModule } from './users/users.module'; // created by "nest g mo users" command and its auto update on root
// import { BookController } from './app.controller';
// import { BookService } from './book.service';

// A Module is a package of code that has a related set of  capabilities or features. It can be imported into other modules to use its exported functionality . In NestJS, modules are used to organize code into a cohesive unit. Each module has its own set of providers, controllers, and other related components.  The @Module decorator is used to define a module and its properties . It is also used to import and export module.

@Module({
  imports: [BookModule],
  controllers: [],
  providers: [],
  exports:[]
})
export class RootModule {
  constructor(){
    console.log("Root Module")
  }
}
