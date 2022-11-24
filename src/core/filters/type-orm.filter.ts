import { ArgumentsHost, Catch, ExceptionFilter } from '@nestjs/common';
import { TypeORMError } from 'typeorm';

interface ErrorMessage {
    status: number;
    message: string;
    type: string;
    errors: {
        code: number,
        message: string,
    }[],
    errorCode: number,
    timestamp: string,
}

@Catch(TypeORMError)
export class TypeOrmFilter implements ExceptionFilter {
    catch(exception: TypeORMError, host: ArgumentsHost) {
        const response = host.switchToHttp().getResponse();
        let message: string = (exception as TypeORMError).message;
        let code: number = (exception as any).code;
        const customResponse: ErrorMessage = {
            status: 500,
            message,
            type: 'SQL',
            errors: [{ code: code, message: message }],
            errorCode: code,
            timestamp: new Date().toISOString(),
        };

        response.status(customResponse.status).json(customResponse);
    }
}