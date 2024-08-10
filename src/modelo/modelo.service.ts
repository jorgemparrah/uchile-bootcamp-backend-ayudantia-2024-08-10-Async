import { Injectable } from '@nestjs/common';
import { CreateModeloDto } from './dto/create-modelo.dto';
import { UpdateModeloDto } from './dto/update-modelo.dto';
import { Modelo } from './entities/modelo.entity';
import { MarcaService } from 'src/marca/marca.service';
import { Marca } from 'src/marca/entities/marca.entity';

@Injectable()
export class ModeloService {

  lista: Modelo[];

  constructor(private readonly marcaService: MarcaService) {
    const marca1 : Marca = marcaService.findOne(1)
    const marca2 : Marca = marcaService.findOne(2)
    const marca3 : Marca = marcaService.findOne(3)
    const marca4 : Marca = marcaService.findOne(4)
    this.lista = [
      new Modelo(1, 'Corolla', marca1),
      new Modelo(2, 'Spark', marca2),
      new Modelo(3, 'Accent', marca3),
      new Modelo(4, 'Rio', marca4),
    ];
  }

  create(createModeloDto: CreateModeloDto) {
    // POR LA CANTIDAD DE REGISTROS
    // const nuevoId = this.lista.length + 1;

    // RECORRER LISTA Y OBTENER EL MAYOR ID
    let nuevoId = 0;
    for (const modelo of this.lista) {
      if (modelo.id > nuevoId) {
        nuevoId = modelo.id;
      }
    }
    nuevoId++;
    // INVESTIGAR reduce()
    const marca = this.marcaService.findOne(createModeloDto.marcaId);
    const nuevoModelo = new Modelo(nuevoId, createModeloDto.nombre, marca);
    this.lista.push(nuevoModelo);
    return nuevoModelo;
  }

  findAll() {
    return this.lista;
  }

  findOne(id: number) {
    let buscar = null;
    for (const modelo of this.lista) {
      if (modelo.id === id) {
        buscar = modelo;
      }
    }
    if (buscar) {
      return buscar;
    }
    throw new Error('No se encontró el modelo');
  }

  update(id: number, updateModeloDto: UpdateModeloDto) {
    return `This action updates a #${id} modelo`;
  }

  remove(id: number) {
    return `This action removes a #${id} modelo`;
  }
}
