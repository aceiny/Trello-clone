import { Module } from '@nestjs/common';
import { ListController } from './list.controller';
import { ListService } from './list.service';
import { BoardModule } from 'src/board/board.module';
import { MongooseModule } from '@nestjs/mongoose';
import { List, ListSchema } from './list.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: List.name, schema: ListSchema }]),
    BoardModule,
  ],
  controllers: [ListController],
  providers: [ListService],
})
export class ListModule {}
