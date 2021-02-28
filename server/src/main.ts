import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const start = async () => {
  try {
    const PORT = process.env.Port || 5000;
    const app = await NestFactory.create(AppModule); // создаем инстанс приложения
    await app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
  } catch (err) {
    console.log(err);
  }
};

start().then(() => console.log('NestJS'));
