import { Module } from '@nestjs/common';
import { MqttModule } from './modules/mqtt/mqtt.module';
import { TopicModule } from './modules/topic/topic.module';
import { WebSocketsModule } from './modules/webSockets/web-sockets.module';

@Module({
  imports: [
    MqttModule,
    TopicModule,
    WebSocketsModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
