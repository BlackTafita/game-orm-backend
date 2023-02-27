import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [PassportModule, ConfigModule],
  providers: [AuthService, LocalStrategy],
})
export class AuthModule {}
