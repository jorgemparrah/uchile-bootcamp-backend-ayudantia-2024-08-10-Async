import { Injectable } from '@nestjs/common';
import { CreateMarcaDto } from './dto/create-marca.dto';
import { UpdateMarcaDto } from './dto/update-marca.dto';
import { Marca } from './entities/marca.entity';

@Injectable()
export class MarcaService {

  lista: Marca[];

  constructor() {
    this.lista = [
      new Marca(1, 'Toyota'),
      new Marca(2, 'Chevrolet'),
      new Marca(3, 'Hyundai'),
      new Marca(4, 'Kia'),
    ];
  }

  create(createMarcaDto: CreateMarcaDto) {
    const nuevaMarca = new Marca(createMarcaDto.id, createMarcaDto.nombre);
    this.lista.push(nuevaMarca);
    return nuevaMarca;
  }

  findAll() {
    return this.lista;
  }

  findOne(id: number) {
    const marca = this.lista.find((marca) => marca.id === id);
    if (!marca) {
      throw new Error('No se encontró la marca');
    }
    return marca;
  }

  update(id: number, updateMarcaDto: UpdateMarcaDto) {
    return `This action updates a #${id} marca`;
  }

  remove(id: number) {
    return `This action removes a #${id} marca`;
  }

}
