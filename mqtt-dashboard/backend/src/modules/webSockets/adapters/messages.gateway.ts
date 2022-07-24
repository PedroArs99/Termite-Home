import { OnGatewayInit, WebSocketGateway } from '@nestjs/websockets';
import { MessagesPort } from '../ports/messages.port';
import { Server } from 'socket.io';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class MessagesGateway implements MessagesPort, OnGatewayInit {
  private server: Server;
  
  afterInit(server: Server) {
    this.server = server;
  }
  
  publishMessage(topic: string, payload: any): void {
    this.server.sockets.emit('message', {topic, payload});
  }
}
