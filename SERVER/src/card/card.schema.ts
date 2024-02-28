import { Prop, Schema, SchemaFactory, raw } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

const comment = raw({
  user: { type: Types.ObjectId, ref: 'User' },
  text: { type: String },
  date: { type: Date },
});

@Schema({ timestamps: true })
export class Card extends Document {
  @Prop()
  name: string;
  @Prop()
  description: string;
  @Prop()
  dueDate: Date;
  @Prop()
  labels: string[];
  @Prop()
  status: string;
  @Prop({
    type: Types.ObjectId,
    ref: 'List',
  })
  list: Types.ObjectId;
  @Prop()
  attachments: string[];
  @Prop({ type: [comment], default: [] })
  comments: (typeof comment)[];
}

export const CardSchema = SchemaFactory.createForClass(Card);
