import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly UsersRepository: Repository<Users>,
  ) {}
  findOneByPhone(phone: string): any {
    return phone;
  }
  

  async findAll(): Promise<Users[]> {
    return await this.UsersRepository.find();
  }
}
