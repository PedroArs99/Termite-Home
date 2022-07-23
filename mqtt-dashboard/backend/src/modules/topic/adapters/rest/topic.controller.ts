import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetAllSysTopicsQuery } from '../../core/getAllSysTopics/getAllSysTopics.query';
import { Topic } from '../../models/topic.model';

@Controller('topics')
export class TopicController {
  constructor(
    private readonly queryBus: QueryBus,
  ) {}

  @Get('sys')
  getAllSysTopics(): Promise<Topic[]> {
    return this.queryBus.execute(new GetAllSysTopicsQuery());
  }
}
