import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { TopicController } from 'src/modules/topic/adapters/rest/topic.controller';
import { TopicMqttController } from './adapters/mqtt/topicMqtt.controller';
import { TopicStorageAdapter } from './adapters/storage/TopicStorage.adapter';
import { GetAllSysTopicsQueryHandler } from './core/getAllSysTopics/getAllSysTopics.handler';

const QueryHandlers = [GetAllSysTopicsQueryHandler]

@Module({
  imports: [
    CqrsModule,
  ],
  controllers: [TopicController, TopicMqttController],
  providers: [
    ...QueryHandlers,
    {
      provide: 'TOPIC_STORAGE_PORT',
      useClass: TopicStorageAdapter
    }
  ],
})
export class TopicModule {}
