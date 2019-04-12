import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';
import { getRepository } from 'typeorm';
import { CreateRegistrationDto } from './create-registration.dto';
import { Users } from 'src/modules/UsersModule/users.entity';

@Controller('registration')
export class RegistrationController {
  date = new Date();

  @Post()
  async registrarion(@Body() CreateRegistrationDto: CreateRegistrationDto){
    const usersRepository = getRepository(Users);
    const users = new Users();

    users.type = CreateRegistrationDto.type;
    users.phone = CreateRegistrationDto.phone;
    users.email = CreateRegistrationDto.email;
    users.dateCreated = this.date.getDate()+"."+Number(this.date.getMonth()+1)+"."+this.date.getFullYear();
    users.dateUpdated = users.dateCreated;

    const phoneIsExists = async () => {
      const phone = await usersRepository.find({phone: users.phone});
      if(phone.length !== 0){
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: `Пользователь уже зарегистрирован`,
        }, 400);
      }
      else{
        usersRepository.save(users);
        return users;
      }
    }
    
    return(phoneIsExists());
  }
}

