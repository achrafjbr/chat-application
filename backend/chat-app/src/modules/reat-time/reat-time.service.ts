import { Injectable } from '@nestjs/common';
import { Server } from 'socket.io';

@Injectable()
export class ReatTimeService {
  private server: Server;
  constructor(server: Server) {
    this.server = server;
  }
  sendMessage(room: string, event: string, payload: any) {
    this.server.to(room).emit(event, payload);
  }

  online(room: string, userId: string) {}

  offline(room: string) {}
}
