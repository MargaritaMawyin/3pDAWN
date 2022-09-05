import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../servicio/inventario.service';

@Component({
  selector: 'app-dispositivo',
  templateUrl: './dispositivo.component.html',
  styleUrls: ['./dispositivo.component.css']
})
export class DispositivoComponent implements OnInit {
  dataSource = [];
  dispositivosIds: any = []
  dispositivosMarcas: any = []
  dispositivos: any = []
  wearables: any = []
  marca = ''
  id = ''
  visible: boolean = true;
  selected = 'Apple';

  mostrar:boolean= true;
  
  constructor(private inventarioService: InventarioService) { }

  ngOnInit(): void {
console.log(this.selected)
    //para mostras la info en el select
    this.inventarioService.obtenerDispositivos().subscribe(
      data => {
        console.log('dispositivos',data)
        this.dispositivos = data;
      }
    )
    this.inventarioService.obtenerWearables().subscribe(
      data => {
        console.log('wearbles en dispositivo',data)
        this.wearables = data;
      }
    )

  }


}
// export default imagen();

