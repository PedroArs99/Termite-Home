import { Controller, Logger } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';

@Controller()
export class MqttInputController {

    constructor(private log: Logger){}

    @MessagePattern('$SYS/#')
    @MessagePattern('#')
    logTopicMessage(@Payload() data: any[], @Ctx() context: MqttContext){
        this.log.debug(`Message received from Topic ${context.getTopic()}: ${data}`)
    }
}
