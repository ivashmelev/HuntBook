import { Controller, Get, Param, HttpCode, Header, Post, Put, Delete, Body } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { Bookings } from 'src/modules/BookingsModule/bookings.entity';
import { Hunt } from 'src/modules/HuntModule/hunt.entity';
import { CreateHuntDto } from 'src/modules/HuntModule/create-hunt.dto';

@Controller('booking')
export class BookingController {
  @Get()
  findAll() {
    const bookingsRepository = getRepository(Bookings);
    const response = bookingsRepository.find();
    
    return response;
  }

  @Get(':id')
  async findId(@Param('id') id: number) {
    const bookingsRepository = getRepository(Bookings); 
    const response = await bookingsRepository.find({ id: id });

    return response;
  }

  @Post()
  @Header('booking', 'new')
  @HttpCode(201)
  create(@Body() CreateHuntDto: CreateHuntDto) {
    const huntRepository = getRepository(Hunt);
    const hunt = new Hunt();

    hunt.offerId = CreateHuntDto.offerId;
    hunt.fowlId = CreateHuntDto.fowlId;
    hunt.dayPrice = CreateHuntDto.dayPrice;
    hunt.licensePrice = CreateHuntDto.licencePrice;

    huntRepository.save(hunt);

    return hunt;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    const huntRepository = getRepository(Hunt);
    const response = huntRepository.find({id: id});
    
    huntRepository.delete(id);

    return response;
  }  
}
