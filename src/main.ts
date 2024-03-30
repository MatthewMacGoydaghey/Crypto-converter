import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe)
  const swaggerConfig = new DocumentBuilder()
  .setTitle('Currency-converter')
  .build()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup('/api', app, document)
  const PORT = 3000
  await app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
}
bootstrap();
