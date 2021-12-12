export class Producto {
  public id: number | string;
  public nombre: string;
  public precio: string;
  public marca: string;
  public link: string;
  public idCategoria: number;
  public cantidad: number;

  constructor(
    id: number | string,
    nombre: string,
    precio: string,
    marca: string,
    link: string = '',
    categoria: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.marca = marca;
    this.link = link;
    this.idCategoria = categoria;
    this.cantidad = 1;
  }
}

export class Categoria {
  public id: number | string;
  public nombre: string;

  constructor(id: number | string, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }
}

export class Carrito {
  public productos: Producto[];

  constructor() {
    this.productos = [];
  }

  agregarCarrito = (producto: Producto) => {
    const pro = this.productos.findIndex((e) => e.id == producto.id);
    pro == -1
      ? this.productos.push(producto)
      : (this.productos[pro].cantidad += 1);
  };

  borrarProducto = (id: number | string) => {
    let pro = this.productos.findIndex((e) => e.id == id);
    this.productos[pro].cantidad -= 1;

    if (this.productos[pro].cantidad == 0) {
      this.productos.splice(pro, 1);
    }
  };

  borrarTotal = (id: number | string) => {
    let pro = this.productos.findIndex((e) => e.id == id);
    this.productos.splice(pro, 1);
  };
}

export class ConstantsService {
  private _Producto: Producto;
  private _Categoria: Categoria;
  private _Carrito: Carrito = new Carrito();

  public getProducto(): Producto {
    return this._Producto;
  }
  public getCategoria(): Categoria {
    return this._Categoria;
  }
  public getCarrito(): Producto[] {
    return this._Carrito.productos;
  }

  public setProducto(v: Producto) {
    this._Producto = v;
  }
  public setCategoria(v: Categoria) {
    this._Categoria = v;
  }
  public setCarrito(v: Carrito) {
    this._Carrito = v;
  }

  public agregarProducto(producto: Producto) {
    this._Carrito.agregarCarrito(producto);
    console.log(this._Carrito);
  }
  public borrarUno(producto: Producto) {
    this._Carrito.borrarProducto(producto.id);
  }
  public borrarTodo(producto: Producto) {
    this._Carrito.borrarTotal(producto.id);
  }
}
