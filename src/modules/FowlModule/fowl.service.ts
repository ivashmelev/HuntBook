import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Fowl } from './fowl.entity';

@Injectable()
export class FowlService {
  constructor(
    @InjectRepository(Fowl)
    private readonly FowlRepository: Repository<Fowl>,
  ) {}

  async findAll(): Promise<Fowl[]> {
    return await this.FowlRepository.find();
  }
}
