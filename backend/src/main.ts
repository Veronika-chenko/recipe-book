import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: process.env.CORS_ORIGIN ?? '*',
    methods: process.env.CORS_METHODS ?? 'GET',
    credentials: true,
  });
  await app.listen(process.env.APP_PORT ?? 4000);
}
bootstrap();
