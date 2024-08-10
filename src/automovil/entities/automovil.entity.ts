import { Modelo } from "src/modelo/entities/modelo.entity";

export class Automovil {
  id: number;
  anio: number;
  precio: number;
  vendido: boolean;

  constructor(id: number, anio: number, precio: number, vendido: boolean) {
    this.id = id;
    this.anio = anio;
    this.precio = precio;
    this.vendido = vendido;
  }
}
