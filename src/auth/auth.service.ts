import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(private configService: ConfigService) {}
  validateApp(code: string): boolean {
    const accessKey = this.configService.get('ACCESS_KEY');
    console.log(code, accessKey);
    return accessKey && code === accessKey;
  }
}
