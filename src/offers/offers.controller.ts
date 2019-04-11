import { Controller, Get, Param, HttpCode, Header, Post, Put, Delete, Body, Catch, UseFilters, ForbiddenException, HttpException, HttpStatus } from '@nestjs/common';
import { Offer } from '../modules/OfferModule/offer.entity';
import { getRepository } from "typeorm";
import { CreateOfferDto } from 'src/modules/OfferModule/create-offer.dto';
import { callbackify } from 'util';
import { create } from 'domain';
import { HttpExceptionFilter } from 'src/exception.filter';

@Controller('offers')

export class OffersController {
  date = new Date();
  @Get()
  findAll() {
    const offerRepository = getRepository(Offer);
    const response = offerRepository.find();
    
    return response;
  }

  @Get(':id')
  async findId(@Param('id') id: number) {
    //При объявлении как свойство класса выдавало ошибку что не найден репозиторий Offer, как я могу объявить репозиторий так чтобы не дублировать код?
    /**/const offerRepository = getRepository(Offer); 
    /*************************************************/
    const response = await offerRepository.find({ id: id });

    return response;
  }

  @Post()
  // @UseFilters(HttpExceptionFilter)
  @Header('Offer', 'new')
  @HttpCode(201)
  async create(@Body() CreateOfferDto: CreateOfferDto) {
    const offer = new Offer();
    const offerRepository = getRepository(Offer);
    
    offer.dateStart = CreateOfferDto.dateStart;
    offer.dateEnd = CreateOfferDto.dateEnd;
    offer.description = CreateOfferDto.description;
    offer.latitude = CreateOfferDto.latitude;
    offer.longitude = CreateOfferDto.longitude;
    offer.guideId = CreateOfferDto.guideId;
    offer.dateCreated = this.date.getDate()+"."+Number(this.date.getMonth()+1)+"."+this.date.getFullYear();
    offer.dateUpdated = offer.dateCreated;
    
    offerRepository.save(offer);
    //Организовал обработку исключения таким образом, также интересует как это сделать не костылем
    /**/const count = await offerRepository.count(offer);
    /**/if(count === 0){
    /**/  throw new HttpException({
    /**/    status: HttpStatus.BAD_REQUEST,
    /**/    error: `QueryFailedError: INSERT или UPDATE в таблице нарушает ограничение внешнего ключа`,
    /**/  }, 400)
    /**/}
    /**************************************************************************************************/
    
    return offer;
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() CreateOfferDto: CreateOfferDto) {
    const offerRepository = getRepository(Offer);
    offerRepository.update( {id: id}, {
      dateStart: CreateOfferDto.dateStart,
      dateEnd: CreateOfferDto.dateEnd,
      description: CreateOfferDto.description,
      latitude: CreateOfferDto.latitude,
      longitude: CreateOfferDto.longitude,
      guideId: CreateOfferDto.guideId,
      dateUpdated: this.date.getDate()+"."+Number(this.date.getMonth()+1)+"."+this.date.getFullYear()
    });

    const response = offerRepository.find({id: id})

    return response;
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    const offerRepository = getRepository(Offer);
    const response = offerRepository.find({id: id});
    offerRepository.delete(id);

    return response;
  }
}
