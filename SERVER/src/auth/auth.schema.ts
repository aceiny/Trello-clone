import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'bson';
import { Document, Types } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ unique: true })
  username: string;
  @Prop()
  password: string;
  @Prop({ type: Types.ObjectId, ref: 'Board' })
  boards: ObjectId[];
}

export const UserSchema = SchemaFactory.createForClass(User);
