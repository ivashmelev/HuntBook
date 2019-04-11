import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Hunt } from './hunt.entity';

@Injectable()
export class HuntService {
  constructor(
    @InjectRepository(Hunt)
    private readonly HuntRepository: Repository<Hunt>,
  ) {}

  async findAll(): Promise<Hunt[]> {
    return await this.HuntRepository.find();
  }
}
