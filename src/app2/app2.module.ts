import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { App2Controller } from './app2.controller'
import { App2Service } from './app2.service';
import { Contact, ContactSchema } from './schemas/contact.schema';
import { TelegramModule } from '../telegram/telegram.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Contact.name, schema: ContactSchema }]),
    TelegramModule,
  ],
  controllers: [App2Controller],
  providers: [App2Service],
})
export class App2Module {}
