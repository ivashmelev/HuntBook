import { Controller, Get, Param, HttpCode, Header, Post, Put, Delete } from '@nestjs/common';

@Controller('booking')
export class BookingController {
  @Get()
  findAll(): string {
    return 'This action returns all booking';
  }

  @Get(':id')
  findId(@Param('id') id: string) {
    return `This action returns booking with id ${id}`;
  }

  @Post()
  @Header('booking', 'new')
  @HttpCode(201)
  create() {
    return 'This action adds new booking';
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `This action update booking with id ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `This action removes booking with id ${id}`;
  }  
}
