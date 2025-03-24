import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Contact, ContactDocument } from './schemas/contact.schema';
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class App2Service {
  constructor(
    @InjectModel(Contact.name) private contactModel: Model<ContactDocument>,
    private readonly telegramService: TelegramService,
  ) {}

  async createContact(data: any): Promise<Contact> {
    const contact = new this.contactModel({
      name: data.name,
      phone: data.phone,
      message: data.message,
    });
    const savedContact = await contact.save();
    const message = `Новый контакт получен!
    👤 Имя: ${data.name}
    📞 Телефон: ${data.phone}
    💬 Сообщение: ${data.message}
    `;
    await this.telegramService.sendMessage(message);
    return savedContact;
  }
}
