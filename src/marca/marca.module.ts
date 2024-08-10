import { Module } from '@nestjs/common';
import { MarcaService } from './marca.service';
import { MarcaController } from './marca.controller';

@Module({
  controllers: [MarcaController],
  providers: [MarcaService],
  exports: [MarcaService]
})
export class MarcaModule {}
