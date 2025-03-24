import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { App2Service } from './app2.service';
import { ApiKeyGuard } from '../common/auth.guard';

@Controller('api/message')
@UseGuards(ApiKeyGuard)
export class App2Controller {
  constructor(private readonly app2Service: App2Service) {}

  @Post()
  async createContact(@Body() body: any) {
    const createdContact = await this.app2Service.createContact(body);
    return createdContact;
  }
}
