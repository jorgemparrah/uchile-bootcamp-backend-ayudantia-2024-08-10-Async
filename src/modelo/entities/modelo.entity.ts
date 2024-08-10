import { Marca } from "src/marca/entities/marca.entity";

export class Modelo {

  constructor(
    public id: number,
    public nombre: string,
    public marca: Marca,
  ) {}

}
