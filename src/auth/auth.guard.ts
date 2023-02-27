import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';

import { Observable } from 'rxjs';
import * as process from 'process';

@Injectable()
export class AuthGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const accessKey = process.env.ACCESS_KEY;
    const code = request.headers.accesscode;
    return accessKey && code === accessKey;
  }
}
