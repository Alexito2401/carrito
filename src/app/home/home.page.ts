import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  public productos: Producto[] = [
    new Producto(1, "Ordenador", "130,00", "Samsung", "../../assets/imgs/productos/ordenador.png"),
    new Producto(2, "Television", "140,00", "Samsung"),
    new Producto(3, "Cafetera", "150,00", "Samsung"),
    new Producto(4, "Portatil", "160,00", "Samsung"),
    new Producto(5, "Nevera", "170,00", "Samsung"),
  ];
  ngOnInit(): void {
    this.productos.forEach(element => {
      console.log(element)
    });
  }

}

class Producto {

  public id: number;
  public nombre: string;
  public precio: string;
  public marca: string;
  public link: string;

  constructor(id: number, nombre: string, precio: string, marca: string, link:string = "") {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.link = link;
  }
}
