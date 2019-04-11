import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bookings } from './bookings.entity';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Bookings)
    private readonly BookingsRepository: Repository<Bookings>,
  ) {}

  async findAll(): Promise<Bookings[]> {
    return await this.BookingsRepository.find();
  }
}
