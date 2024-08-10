import { Controller, Get, Post, Body, Patch, Param, Delete, Res } from '@nestjs/common';
import { AutomovilService } from './automovil.service';
import { CreateAutomovilDto } from './dto/create-automovil.dto';
import { UpdateAutomovilDto } from './dto/update-automovil.dto';

@Controller('automovil')
export class AutomovilController {
  constructor(private readonly automovilService: AutomovilService) {}

  @Post()
  create(@Body() createAutomovilDto: CreateAutomovilDto) {
    return this.automovilService.create(createAutomovilDto);
  }

  @Get()
  async findAll(@Res() response) {
    const promesa = new Promise((resolve, reject) => {
      const lista = this.automovilService.findAll();
      // "0" == 0  // true
      // "0" === 0 // false
      // 0 === 0   // true
      if (lista.length === 0) {
        setTimeout(() => {
          reject('No hay registros');
        }, 2000);
      } else{
        setTimeout(() => {
          resolve(lista);
        }, 2000);
      }
    });
    /*
    try {
      const lista = null;
      console.log("Paso 1");
      console.log(lista[0]);
      console.log("Paso 2");
      console.log("Paso 3");
    } catch (error) {
      console.log("ERROR");
      console.log(error);
    }
    */
    try {
      const respuesta = await promesa;
      console.log(respuesta);
      response.status(200).send(respuesta);
    } catch (error) {
      console.log(error);
      response.status(400).send(error);
    }

    /*
    promesa.then((respuesta) => {
      console.log(respuesta);
      response.status(200).send(respuesta);
    }).catch(function (error) {
      console.log(error);
      response.status(400).send(error);
    })
    */
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.automovilService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAutomovilDto: UpdateAutomovilDto) {
    return this.automovilService.update(+id, updateAutomovilDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.automovilService.remove(+id);
  }
}
