


import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class TelegramService {
  private readonly botToken: string;
  private readonly chatId: string;

  constructor(
    private readonly httpService: HttpService,
    private readonly configService: ConfigService,
  ) {
    this.botToken = this.configService.get<string >('TELEGRAM_BOT_TOKEN' , "ss123sjdnf");
    this.chatId = this.configService.get<string>('TELEGRAM_CHAT_ID' , 'thischatidukk');
  }

  async sendMessage(message: string): Promise<void> {
    const url = `https://api.telegram.org/bot${this.botToken}/sendMessage`;
    try {
      await this.httpService.post(url, {
        chat_id: this.chatId,
        text: message,
      }).toPromise();
    } catch (error) {
      console.error('Telegramga xabar yuborishda xato:', error.message);
    }
  }
}
