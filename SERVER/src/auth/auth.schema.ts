import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
    @Prop({unique : true})
    username: string;
    @Prop()
    password: string;
    @Prop()
    role : string;
}

export const UserSchema = SchemaFactory.createForClass(User);