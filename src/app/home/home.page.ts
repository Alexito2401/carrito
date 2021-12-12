import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Carrito, Categoria, ConstantsService, Producto } from '../constants';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public _constatsService: ConstantsService,private menu: MenuController, private http: HttpClient) {}
  public categorias = Array<Categoria>();
  public productos = Array<Producto>();
  public carrito: Carrito = new Carrito();
  public icono_carrito: boolean = false;
  public folder: string = 'Id';
  private url: string = 'http://localhost:3000/';
  
  public visible: boolean = true;

  changeVisible(): void {
    this.visible = !this.visible;
  }

  changeIcon(): void {
    this.carrito.productos.length != 0
      ? (this.icono_carrito = true)
      : (this.icono_carrito = false);
  }

  ngOnInit(): void {
    this.http
      .get(this.url + 'Categorias')
      .toPromise()
      .then((e) =>
        Object.values(e).map((f) =>
          this.categorias.push(new Categoria(f.id, f.nombre))
        )
      )
      .then((g) =>
        this.categorias.forEach((h) =>
          this.http
            .get(this.url + h.nombre)
            .toPromise()
            .then((e) =>
              Object.values(e).map((f) =>
                this.productos.push(
                  new Producto(
                    f.id,
                    f.nombre,
                    f.precio,
                    f.marca,
                    f.imagen,
                    f.categoria
                  )
                )
              )
            )
        )
      )
      .catch((err) => console.log('error'));
  }
}