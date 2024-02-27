import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, ObjectId, Types } from "mongoose";

@Schema()
export class Board extends Document {
    @Prop()
    name : string;
    @Prop()
    description : string;
    @Prop({default : null})
    backgroundColor : string;
    @Prop({
        type : Types.ObjectId,
        ref : 'User'
    })
    user : Types.ObjectId
    @Prop({
        type : Types.ObjectId,
        ref : 'List'
    })
    lists : Types.ObjectId[]

}

export const BoardSchema = SchemaFactory.createForClass(Board);