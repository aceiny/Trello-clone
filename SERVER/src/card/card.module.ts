import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { JwtModule } from '../jwt/jwt.module'
import { Mongoose } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Card, CardSchema } from './card.schema';
import { ListModule } from 'src/list/list.module';
@Module({
  imports : [
    JwtModule,
    ListModule,  
    MongooseModule.forFeature([{name : Card.name , schema : CardSchema}]),  
  ],
  providers: [CardService],
  controllers: [CardController]
})
export class CardModule {}
