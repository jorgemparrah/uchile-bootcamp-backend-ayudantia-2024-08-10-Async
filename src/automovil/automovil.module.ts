import { Module } from '@nestjs/common';
import { AutomovilService } from './automovil.service';
import { AutomovilController } from './automovil.controller';

@Module({
  controllers: [AutomovilController],
  providers: [AutomovilService],
})
export class AutomovilModule {}
