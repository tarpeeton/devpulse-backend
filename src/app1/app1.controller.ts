import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { App1Service } from './app1.service';
import { ApiKeyGuard } from '../common/auth.guard';

@Controller('api/order')
@UseGuards(ApiKeyGuard)
export class App1Controller {
  constructor(private readonly app1Service: App1Service) {}

  @Post()
  async createFeedback(@Body() body: any) {
    const createdFeedback = await this.app1Service.createFeedback(body);
    return createdFeedback;
  }
}
