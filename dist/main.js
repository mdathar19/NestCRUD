"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
function globalMiddleware(req, res, next) {
    console.log('app.module -> This is global MiddleWare runs');
    next();
}
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.RootModule);
    app.use(globalMiddleware);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map