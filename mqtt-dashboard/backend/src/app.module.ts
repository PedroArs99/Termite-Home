import { Module } from '@nestjs/common';
import { MqttModule } from './modules/mqtt/mqtt.module';
import { TopicModule } from './modules/topic/topic.module';

@Module({
  imports: [
    MqttModule,
    TopicModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
