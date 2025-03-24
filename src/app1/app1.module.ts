import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { App1Controller } from './app1.controller';
import { App1Service } from './app1.service';
import { Feedback, FeedbackSchema } from './schemas/feedback.schema';
import { TelegramModule } from '../telegram/telegram.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Feedback.name, schema: FeedbackSchema }]),
    TelegramModule,
  ],
  controllers: [App1Controller],
  providers: [App1Service],
})
export class App1Module {}
