import { Module } from '@nestjs/common';
import { BoardController } from './board.controller';
import { BoardService } from './board.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Board, BoardSchema } from './board.schema';

@Module({
  imports : [
    MongooseModule.forFeature([{name : Board.name, schema : BoardSchema}]),
  ],
  controllers: [BoardController],
  providers: [BoardService]
})
export class BoardModule {}
