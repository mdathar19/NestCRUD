import { NestFactory } from '@nestjs/core';
import { RootModule } from './app.module';
import { NextFunction, Request, Response } from 'express';


// This is global midddleware [ always support function type ]
function globalMiddleware (req: Request , res: Response , next: NextFunction) {
  console.log('app.module -> This is global MiddleWare runs')
  next()
}


async function bootstrap() {
  const app = await NestFactory.create(RootModule);
  app.use(globalMiddleware)
  await app.listen(3000);
}
bootstrap();
