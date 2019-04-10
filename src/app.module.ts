import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingController } from './booking/booking.controller';
import { OffersController } from './offers/offers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OffersModule } from './modules/OfferModule/offer.module';

@Module({
  imports: [TypeOrmModule.forRoot(), OffersModule],
  controllers: [AppController, OffersController, BookingController],
  providers: [AppService],
})
export class AppModule {}
