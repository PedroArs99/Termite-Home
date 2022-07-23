import { Module } from '@nestjs/common';
import { TopicModule } from './modules/topic/topic.module';

@Module({
  imports: [
    TopicModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
