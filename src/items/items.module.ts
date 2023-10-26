import { Module } from '@nestjs/common';
import { ItemsController } from './items.controller';
import { ItemsService } from './items.service';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [ItemsController],
  providers: [ItemsService,PrismaService],
})
export class ItemsModule {}
