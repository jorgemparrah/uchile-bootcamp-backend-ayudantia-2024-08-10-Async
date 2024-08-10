import { Module } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { ModeloController } from './modelo.controller';
import { MarcaModule } from 'src/marca/marca.module';

@Module({
  imports: [MarcaModule],
  controllers: [ModeloController],
  providers: [ModeloService],
})
export class ModeloModule {}
