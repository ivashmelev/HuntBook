import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingController } from './booking/booking.controller';
import { OffersController } from './offers/offers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OfferModule } from './modules/OfferModule/offer.module';
import { FowlModule } from './modules/FowlModule/fowl.module';
import { HuntModule } from './modules/HuntModule/hunt.module';
import { BookingsModule } from './modules/BookingsModule/bookings.module';
import { UsersModule } from './modules/UsersModule/users.module';

@Module({
  imports: [TypeOrmModule.forRoot(), OfferModule, FowlModule, HuntModule, BookingsModule, UsersModule],
  controllers: [AppController, OffersController, BookingController],
  providers: [AppService],
})
export class AppModule {}
