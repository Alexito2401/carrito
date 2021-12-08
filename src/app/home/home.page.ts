import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor() { }
  public productos: Producto[] = [
    //Ordenadores
    new Producto(1, "Acer Predator Orion 3000", "1499,00", "Samsung", "../../assets/imgs/productos/ordenador.png", 1),
    new Producto(2, "MSI MAG Codex 5", "1499,00", "MSI", "../../assets/imgs/productos/ordenador2.png", 1),
    new Producto(3, "PcCom Silver Pro", "1514,00", "PcCom", "../../assets/imgs/productos/ordenador3.png", 1),
    new Producto(4, "PcCom Gold Snow Edition", "2070,00", "PcCom", "../../assets/imgs/productos/ordenador4.png", 1),

    //Portatil
    new Producto(5, "HP 255 G8 AMD ", "409,00", "HP", "../../assets/imgs/productos/portatil.png", 2),
    new Producto(6, "Asus VivoBook Pro 15", "949,00", "Asus", "../../assets/imgs/productos/portatil2.png", 2),
    new Producto(7, "Alurin Go Intel Pentium", "248,99", "Alurin", "../../assets/imgs/productos/portatil3.png", 2),
    new Producto(8, "Lenovo IdeaPad 3", "329,00", "Lenovo", "../../assets/imgs/productos/portatil4.png", 2),

    //Perifericos
    new Producto(9, 'MSI Optix G271 27"', "199,00", "MSI", "../../assets/imgs/productos/periferico.png", 3),
    new Producto(10, "HyperX Quadcast S", "198,00", "HyperX", "../../assets/imgs/productos/periferico2.png", 3),
    new Producto(11, "Wacom Cintiq 16", "590,00", "Wacom", "../../assets/imgs/productos/periferico3.png", 3),
    new Producto(12, "Logitech G502 Hero", "49,99", "Logitech", "../../assets/imgs/productos/periferico4.png", 3),

    //Impresoras
    new Producto(9, 'HP Officejet Pro 6230', "83,87", "HP", "../../assets/imgs/productos/impresora.png", 4),
    new Producto(10, "Epson Workforce WF-2010W", "86,98", "Epson", "../../assets/imgs/productos/impresora2.png", 4),
    new Producto(11, "HP Officejet 200", "252,83", "HP", "../../assets/imgs/productos/impresora3.png", 4),
    new Producto(12, "Zebra GK420d", "439,70", "Zebra", "../../assets/imgs/productos/impresora4.png", 4),

    //Televisores
    new Producto(13, 'Xiaomi Mi TV P1 43"', "339", "Xiaomi", "../../assets/imgs/productos/tele.png", 5),
    new Producto(14, 'Samsung UE55AU7172 55" ', "489", "Samsung", "../../assets/imgs/productos/tele2.png", 5),
    new Producto(15, 'Toshiba 32LA2063DG 32"', "199,99", "Toshiba", "../../assets/imgs/productos/tele3.png", 5),
    new Producto(16, 'TD Systems K55DLG12US 55"', "398,50", "Td systems", "../../assets/imgs/productos/tele4.png", 5),
  ];

  public icono_carrito: boolean = false;

  public categorias: Categoria[] = [
    new Categoria(1, "Ordenadores"),
    new Categoria(2, "Portatiles"),
    new Categoria(3, "Perifericos"),
    new Categoria(4, "Impresoras"),
    new Categoria(5, "Televisores"),
  ];

  public carrito: Carrito = new Carrito();
  public visible: boolean = true;

  changeVisible(): void {
    this.visible = !this.visible
  }

  changeIcon(): void {
    this.carrito.productos.length != 0 ? this.icono_carrito = true : this.icono_carrito = false;
  }



  ngOnInit(): void {
  }

}

class Producto {

  public id: number;
  public nombre: string;
  public precio: string;
  public marca: string;
  public link: string;
  public idCategoria: number;
  public cantidad: number;

  constructor(id: number, nombre: string, precio: string, marca: string, link: string = "", categoria: number) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.link = link;
    this.idCategoria = categoria
    this.cantidad = 1;
  }
}

class Categoria {

  public id: number;
  public nombre: string;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}

class Carrito {
  public productos: Producto[];

  constructor() {
    this.productos = [];
  }

  agregarCarrito = (producto: Producto) => {
    let pro = this.productos.findIndex((e) => e.id == producto.id);
    pro == -1 ? this.productos.push(producto) : this.productos[pro].cantidad += 1;
  }

  borrarProducto = (id: number) => {
    let pro = this.productos.findIndex((e) => e.id == id);
    this.productos[pro].cantidad -= 1;

    if (this.productos[pro].cantidad == 0) {
      this.productos.splice(pro, 1);
    }
  }

  borrarTotal = (id: number) => {
    let pro = this.productos.findIndex((e) => e.id == id);
    this.productos.splice(pro, 1);
  }
}