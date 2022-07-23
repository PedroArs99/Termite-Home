import { Inject } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { Topic } from '../../models/topic.model';
import { TopicStoragePort } from '../../ports/TopicStorage.port';
import { GetAllSysTopicsQuery } from './getAllSysTopics.query';

@QueryHandler(GetAllSysTopicsQuery)
export class GetAllSysTopicsQueryHandler
  implements IQueryHandler<GetAllSysTopicsQuery>
{
  constructor(
    @Inject('TOPIC_STORAGE_PORT') private storage: TopicStoragePort,
  ) {}

  async execute(_: GetAllSysTopicsQuery): Promise<Topic[]> {
    const sysTopics = this.storage.getAllSysTopics();

    return sysTopics;
  }
}
