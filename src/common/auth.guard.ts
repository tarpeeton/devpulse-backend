import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ApiKeyGuard implements CanActivate {
  constructor(private readonly configService: ConfigService) {}

  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const apiKey = request.headers['x-api-key'];

    const configApiKey = this.configService.get<string>('API_KEY');
    if (apiKey && apiKey === configApiKey) {
      return true;
    }
    throw new UnauthorizedException('Invalid API Key');
  }
}
