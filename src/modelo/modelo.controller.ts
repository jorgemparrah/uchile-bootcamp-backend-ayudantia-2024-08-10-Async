import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { ModeloService } from './modelo.service';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';

@Controller('modelo')
export class ModeloController {
  constructor(private readonly modeloService: ModeloService) {}

  @Post()
  create(@Body() createModeloDto: CreateModeloDto) {
    return this.modeloService.create(createModeloDto);
  }

  @Get()
  findAll(@Res() response) {
    console.log("CREANDO PROMESA");
    const promesa = new Promise((resolve, reject) => {
      const lista = this.modeloService.findAll();
      if (lista.length === 0) {
        setTimeout(() => {
          console.log("PROMESA RECHAZADA");
          reject('No hay registros');
        }, 8000);
      } else{
        setTimeout(() => {
          console.log("PROMESA RESUELTA1");
          resolve(lista);
        }, 8000);
      }
    })

    const promesa2 = new Promise((resolve, reject) => {
      const lista = this.modeloService.findAll();
      if (lista.length === 0) {
        setTimeout(() => {
          console.log("PROMESA RECHAZADA");
          reject('No hay registros');
        }, 5000);
      } else{
        setTimeout(() => {
          console.log("PROMESA RESUELTA2");
          resolve(lista);
        }, 5000);
      }
    })
    console.log("PROMESA CREADA");

    Promise.all([promesa, promesa2]).then((respuesta) => {
      const respuestaPromesa1 = respuesta[0];
      const respuestaPromesa2 = respuesta[1];
      const respuestaFinal = {
        promesa1: respuestaPromesa1,
        promesa2: respuestaPromesa2
      };
      response.status(200).send(respuestaFinal);
    }).catch(function (error) {
      response.status(400).send(error);
    })
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.modeloService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateModeloDto: UpdateModeloDto) {
    return this.modeloService.update(+id, updateModeloDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.modeloService.remove(+id);
  }
}
