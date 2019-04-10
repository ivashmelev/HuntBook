import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Offer } from './offer.entity';

@Injectable()
export class OfferService {
  constructor(
    @InjectRepository(Offer)
    private readonly OfferRepository: Repository<Offer>,
  ) {}

  async findAll(): Promise<Offer[]> {
    return await this.OfferRepository.find();
  }
}