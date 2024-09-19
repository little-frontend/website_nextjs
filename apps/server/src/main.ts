import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(4000);

  app.getUrl().then((url) => {
    console.log(`🚀  Server ready at: ${url}`);
  });


}
bootstrap();