import { Module } from '@nestjs/common';
import { JwtController } from './jwt.controller';
import { JwtService } from './jwt.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule as jwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { RolesGuard } from './role.guard';

@Module({
  imports: [
    PassportModule.register({
      defaultStrategy : 'jwt'
    }),
    jwtModule.register({
      secret : process.env.JWT_SECRET,
      signOptions : { 
        expiresIn : '30d' 
      }
    }),
  ],
  controllers: [JwtController],
  providers: [
    JwtService,
    JwtStrategy,
    RolesGuard, 
  ],
  exports : [
    JwtStrategy,
    PassportModule,
    jwtModule
  ]
})
export class JwtModule {}
