import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";


// This is NestJs Guard for Authorization

@Injectable()
export class bookGuard implements CanActivate {

    public token : string = "1983#@^%#36^%^=-3#$%2252Bfdsdf425$%vf#"
    canActivate(context: ExecutionContext): boolean {
        let ctx = context.switchToHttp()
        let request = ctx.getRequest()

        if(!request.headers['token']) return false
        
        return request.headers['token'] === "1983#@^%#36^%^=-3#$%2252Bfdsdf425$%vf#"
    }

}



