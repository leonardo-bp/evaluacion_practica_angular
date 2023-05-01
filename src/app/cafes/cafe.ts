export class Cafe {
  id: number;
  nombre: string;
  tipo: string;
  region: string;
  sabor: string;
  altura: number;


  public constructor(id: number, nombre: string, tipo: string, region: string, sabor: string, altura: number){
    this.id = id;
    this.nombre = nombre;
    this.tipo = tipo;
    this.region = region;
    this.sabor = sabor;
    this.altura = altura;
  }
}
