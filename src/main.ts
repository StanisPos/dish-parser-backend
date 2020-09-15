import { config } from 'dotenv';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

config();

const port = parseFloat(process.env.PORT_APP);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(port);
}

(async () => {
  await bootstrap();
})();
