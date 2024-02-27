import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { JwtModule } from '../jwt/jwt.module'
@Module({
  providers: [CardService],
  controllers: [CardController]
})
export class CardModule {}
