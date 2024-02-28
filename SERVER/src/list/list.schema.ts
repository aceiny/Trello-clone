import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class List extends Document {
  @Prop()
  name: string;
  @Prop({
    type: [Types.ObjectId],
    ref: 'Card',
  })
  cards: Types.ObjectId[];
  @Prop({
    type: Types.ObjectId,
    ref: 'Board',
  })
  board: Types.ObjectId;
}

export const ListSchema = SchemaFactory.createForClass(List);
