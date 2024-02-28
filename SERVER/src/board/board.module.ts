import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Board, BoardSchema } from './board.schema';
import { JwtModule } from '../jwt/jwt.module';

@Module({
  imports: [
    JwtModule,
    MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }]),
  ],
  controllers: [BoardController],
  providers: [BoardService],
  exports: [
    MongooseModule.forFeature([{ name: Board.name, schema: BoardSchema }]),
  ],
})
export class BoardModule {}
