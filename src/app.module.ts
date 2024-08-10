import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ModeloModule } from './modelo/modelo.module';
import { PruebaModule } from './prueba/prueba.module';
import { MarcaModule } from './marca/marca.module';
import { AutomovilModule } from './automovil/automovil.module';

@Module({
  imports: [ModeloModule, PruebaModule, MarcaModule, AutomovilModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
