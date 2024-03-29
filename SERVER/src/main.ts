import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as serveStatic from 'serve-static';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use('/uploads', serveStatic('uploads'));
  await app.listen(4000);
}
bootstrap();
