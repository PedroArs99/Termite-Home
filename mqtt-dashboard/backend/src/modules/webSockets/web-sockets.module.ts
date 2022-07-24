import { Module } from '@nestjs/common';
import { SysTopicGateway } from './adapter/sysTopic.gateway';

@Module({
    providers: [SysTopicGateway]
})
export class WebSocketsModule {}
