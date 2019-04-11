import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookingsService } from './bookings.service';
// import { BookingssController } from '../../Bookingss/Bookingss.controller';
import { Bookings } from './bookings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Bookings])],
  providers: [BookingsService],
  // controllers: [BookingsController],
})
export class BookingsModule {}