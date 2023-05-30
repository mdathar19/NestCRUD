"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookGuard = void 0;
const common_1 = require("@nestjs/common");
let bookGuard = class bookGuard {
    constructor() {
        this.token = "1983#@^%#36^%^=-3#$%2252Bfdsdf425$%vf#";
    }
    canActivate(context) {
        let ctx = context.switchToHttp();
        let request = ctx.getRequest();
        if (!request.headers['token'])
            return false;
        return request.headers['token'] === "1983#@^%#36^%^=-3#$%2252Bfdsdf425$%vf#";
    }
};
bookGuard = __decorate([
    (0, common_1.Injectable)()
], bookGuard);
exports.bookGuard = bookGuard;
//# sourceMappingURL=book.guard.js.map