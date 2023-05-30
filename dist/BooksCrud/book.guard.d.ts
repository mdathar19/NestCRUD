import { CanActivate, ExecutionContext } from "@nestjs/common";
export declare class bookGuard implements CanActivate {
    token: string;
    canActivate(context: ExecutionContext): boolean;
}
