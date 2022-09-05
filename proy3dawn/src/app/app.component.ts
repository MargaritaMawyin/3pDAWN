import { Component } from '@angular/core';
import { InventarioService } from './servicio/inventario.service';
import { Inventario } from './interfaz/inventario';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proy3dawn';
  marca =''

  constructor(private inventarioService: InventarioService) {
    inventarioService.obtenerWearables().subscribe(respuesta => {
      let wearable = respuesta as Inventario
      this.marca = wearable.marca
    })

    inventarioService.obtenerDispositivos().subscribe(respuesta => {
      let wearable = respuesta as Inventario
      this.marca = wearable.marca
    })
  }
}
