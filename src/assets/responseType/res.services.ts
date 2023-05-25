import { Injectable } from "@nestjs/common";
import { response } from "./res.interface";


@Injectable()
export class responseBack {
    success (data : any = []) : response {
        let obj = {message : "success" , errorCode : 200 , data:data?data:[]}
        return obj
    }
}


