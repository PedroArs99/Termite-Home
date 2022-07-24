import { Controller, Inject } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  MqttContext,
  Payload,
} from '@nestjs/microservices';
import { MessagesPort } from 'src/modules/webSockets/ports/messages.port';

@Controller()
export class MqttInputController {
  constructor(@Inject('MESSAGES_PORT') private webSocketsPort: MessagesPort) {}

  @MessagePattern('$SYS/#')
  logSysMessage(@Payload() data: any[], @Ctx() context: MqttContext) {
    this.webSocketsPort.publishMessage(context.getTopic(), data);
  }

  @MessagePattern('#')
  logTopicMessage(@Payload() data: any[], @Ctx() context: MqttContext) {
    this.webSocketsPort.publishMessage(context.getTopic(), data);
  }
}
