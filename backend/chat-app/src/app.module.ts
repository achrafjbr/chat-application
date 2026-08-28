import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGateway } from './chat/chat.gateway';
import { ReatTimeService } from './modules/reat-time/reat-time.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ChatGateway, ReatTimeService],
})
export class AppModule {}
