import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HuntService } from './hunt.service';
// import { HuntsController } from '../../Hunts/Hunts.controller';
import { Hunt } from './hunt.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hunt])],
  providers: [HuntService],
  // controllers: [HuntController],
})
export class HuntModule {}