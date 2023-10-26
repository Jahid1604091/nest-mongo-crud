import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

import { PrismaService } from 'src/prisma.service';
import { Prisma } from '@prisma/client';
@Injectable()
export class ItemsService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<Item[]> {
    return this.prisma.item.findMany();
  }
  async findOne(id: number): Promise<Item> {
    return await this.prisma.item.findUnique({ where: { id } });
  }

  async createOne(data: Prisma.ItemCreateInput): Promise<Item> {
    return this.prisma.item.create({
      data,
    });
  }

  async updateOne(id: number, data: Item): Promise<Item> {
    return await this.prisma.item.update({ where: { id }, data });
  }

  async deleteOne(id: number): Promise<Item> {
    return await this.prisma.item.delete({ where: { id } });
  }
}
