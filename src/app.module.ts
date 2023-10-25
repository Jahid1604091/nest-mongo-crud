import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemsModule } from './items/items.module';

@Module({
  imports: [ItemsModule,MongooseModule.forRoot('mongodb://127.0.0.1/nest')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
