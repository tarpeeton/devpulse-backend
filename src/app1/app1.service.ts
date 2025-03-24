import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Feedback, FeedbackDocument } from './schemas/feedback.schema';
import { TelegramService } from '../telegram/telegram.service';

@Injectable()
export class App1Service {
  constructor(
    @InjectModel(Feedback.name) private feedbackModel: Model<FeedbackDocument>,
    private readonly telegramService: TelegramService,
  ) {}

  async createFeedback(data: any): Promise<Feedback> {
    const feedback = new this.feedbackModel({
      name: data.name,
      email: data.email,
      phoneNumber: data.phoneNumber,
      service: data.service,
      comment: data.comment,
    });
    const savedFeedback = await feedback.save();
    
    const message = `*Новая заявка получена!*
    👤 Имя:   ${data.name}
    ✉️ Email:   ${data.email}
    📱 Телефон:    ${data.phoneNumber}
    💼 Услуга:    ${data.service}
    💬 Комментарий:   ${data.comment}
    `;
    await this.telegramService.sendMessage(message);
    
    return savedFeedback;
  }
}
