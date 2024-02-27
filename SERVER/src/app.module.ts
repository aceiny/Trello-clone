import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { JwtModule } from './jwt/jwt.module';
import { BoardModule } from './board/board.module';
import { ListModule } from './list/list.module';
import { CardModule } from './card/card.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [
     MongooseModule.forRoot(process.env.MONGO_URI) , 
     AuthModule, JwtModule, BoardModule, ListModule, CardModule, UserModule
    ],
})
export class AppModule {}
