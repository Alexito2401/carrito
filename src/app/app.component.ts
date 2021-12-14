import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ConstantsService } from './constants';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    public _constatsService: ConstantsService,
    private menu: MenuController
  ) {}

  public carrito = this._constatsService.getCarrito();
}
