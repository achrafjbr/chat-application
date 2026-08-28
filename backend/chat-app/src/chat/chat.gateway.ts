import {
  MessageBody,
  OnGatewayConnection,
  OnGatewayDisconnect,
  OnGatewayInit,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Socket } from 'socket.io';
import { Server } from 'socket.io';

@WebSocketGateway()
export class ChatGateway
  implements OnGatewayConnection, OnGatewayDisconnect, OnGatewayInit
{
  @WebSocketServer()
  server: Server;

  afterInit(server: Server) {
    console.log('connection start');
    throw new Error('Method not implemented.');
  }
  handleDisconnect(client: Socket, reason?: string) {
    client.emit('connected', { connection: true });
    throw new Error('Method not implemented.');
  }
  handleConnection(client: Socket, ...args: any[]) {
    client.emit('disconnected', { connection: false });
    client.disconnect();
    throw new Error('Method not implemented.');
  }
  @SubscribeMessage('message')
  handleMessage(client: Socket, payload: any): string {
    return 'Hello world!';
  }
}
