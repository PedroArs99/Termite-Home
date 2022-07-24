import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices'; 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      url: 'mqtt://rpi:1883'
    }
  })
  
  await app.startAllMicroservices();
  await app.listen(3000); 
}
bootstrap();
