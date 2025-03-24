import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type FeedbackDocument = Feedback & Document;

@Schema()
export class Feedback {
 @Prop({required: true})
  
  @Prop({ required: true })
  email: string;
  
  @Prop({ required: true })
  phoneNumber: string;
  
  @Prop({ required: true })
  service: string;
  
  @Prop()
  comment: string;
  
  @Prop({ default: Date.now })
  createdAt: Date;
}

export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
