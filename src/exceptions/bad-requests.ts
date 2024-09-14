import { ErrorCode, HttpException } from "./root";

export class BadRequestsException extends HttpException{
    constructor(message: string, errorCode:ErrorCode, errors: any = null){
        super(message, errorCode, 400, null);
        this.errors = errors;
    }
}