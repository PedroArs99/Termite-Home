import { Logger, Module } from '@nestjs/common';
import { MqttInputController } from './adapter/mqttInput.controller';

@Module({
    controllers: [
        MqttInputController
    ],
    providers: [
        Logger
    ]
})
export class MqttModule {}
