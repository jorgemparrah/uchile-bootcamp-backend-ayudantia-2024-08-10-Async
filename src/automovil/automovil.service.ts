import { Injectable } from '@nestjs/common';
import { CreateAutomovilDto } from './dto/create-automovil.dto';
import { UpdateAutomovilDto } from './dto/update-automovil.dto';
import { Automovil } from './entities/automovil.entity';

@Injectable()
export class AutomovilService {

  lista: Automovil[];

  constructor() {
    this.lista = [
      new Automovil(1, 2019, 10000, false),
      new Automovil(2, 2020, 8000, true),
      new Automovil(3, 2018, 12000, false),
      new Automovil(4, 2017, 11000, true),
    ];
  }

  create(createAutomovilDto: CreateAutomovilDto) {
    return 'This action adds a new automovil';
  }

  findAll() {
    return this.lista;
  }

  findOne(id: number) {
    for (let i = 0; i < this.lista.length; i++) {
      if (this.lista[i].id === id) {
        return this.lista[i];
      }
    }
    throw new Error('No se encontró el automóvil');
  }

  update(id: number, updateAutomovilDto: UpdateAutomovilDto) {
    return `This action updates a #${id} automovil`;
  }

  remove(id: number) {
    return `This action removes a #${id} automovil`;
  }
}
