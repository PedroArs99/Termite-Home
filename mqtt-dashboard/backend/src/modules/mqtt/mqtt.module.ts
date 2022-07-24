import { Module } from '@nestjs/common';
import { MessagesGateway } from '../webSockets/adapters/messages.gateway';
import { MqttInputController } from './adapter/mqttInput.controller';

@Module({
    controllers: [
        MqttInputController
    ],
    providers: [
        {
            provide: 'MESSAGES_PORT',
            useClass: MessagesGateway
        }
    ]
})
export class MqttModule {}
