import { OnGatewayConnection, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class SysTopicGateway implements OnGatewayConnection {
  handleConnection(client: any, ...args: any[]) {
    setTimeout(() => {
        client.emit('datetime', new Date())
    }, 1000);
  }
}
