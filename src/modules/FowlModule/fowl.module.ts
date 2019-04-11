import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FowlService } from './fowl.service';
// import { FowlsController } from '../../Fowls/Fowls.controller';
import { Fowl } from './fowl.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Fowl])],
  providers: [FowlService],
  // controllers: [FowlController],
})
export class FowlModule {}