import { Controller, Get, Param, HttpCode, Header, Post, Put, Delete } from '@nestjs/common';

@Controller('offers')
export class OffersController {
  @Get()
  findAll(): string {
    return 'This action returns all offers';
  }

  @Get(':id')
  findId(@Param('id') id: string) {
    return `This action returns offers with id ${id}`;
  }

  @Post()
  @Header('Offer', 'new')
  @HttpCode(201)
  create() {
    return 'This action adds new offer';
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This action update offer with id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes offer with id ${id}`;
  }
}
