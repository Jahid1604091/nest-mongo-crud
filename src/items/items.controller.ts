import {
  Body,
  Controller,
  Get,
  Post,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  //inject dependency
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  //   @Get(':id')
  //   findOne(@Param() param): string {
  //     return 'Get  Item od id ' + param.id;
  //   }

  @Get(':id')
  async findOne(@Param('id') id): Promise<Item> {
    return this.itemsService.findOne(+id);
  }

  @Delete(':id')
  async delete(@Param('id') id): Promise<Item> {
    return this.itemsService.deleteOne(+id);
  }

  @Post()
  create(@Body() createItem: CreateItemDto): Promise<Item> {
    return this.itemsService.createOne(createItem);
  }

  @Put(':id')
  update(@Body() updateItem: CreateItemDto, @Param('id') id): Promise<Item> {
    return this.itemsService.updateOne(+id, updateItem);
  }
}
