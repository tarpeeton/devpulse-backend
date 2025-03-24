import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import  helmet from 'helmet';
import  rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Xavfsizlik uchun helmet
  app.use(helmet());

  // Rate limiting (har IP uchun 15 daqiqada maksimal 100 so‘rov)
  app.use(rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10,
  }));

  // Faqat ruxsat berilgan origin-lar:
  app.enableCors({
    origin: ['http://localhost:3000', 'https://devpulse.uz'],
  });

  await app.listen(5000);
}
bootstrap();
