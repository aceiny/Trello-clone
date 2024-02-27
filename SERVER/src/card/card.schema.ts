import { Prop, Schema, SchemaFactory, raw } from "@nestjs/mongoose";
import { Date, Document, Types } from "mongoose";

const comment = raw({
    user : {type : Types.ObjectId, ref : 'User'},
    text : {type : String},
    date : {type : Date}
});

@Schema({timestamps : true})
export class Card extends Document {
    @Prop()
    name : string;
    @Prop()
    description : string;
    @Prop()
    dueDate : Date;
    @Prop()
    labels : string[];
    @Prop()
    status : string;
    @Prop()
    attachments : string[];
    @Prop()
    comments : string[];
}

export const CardSchema = SchemaFactory.createForClass(Card);