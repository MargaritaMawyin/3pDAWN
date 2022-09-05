import { Component, OnInit } from '@angular/core';
import { Inventario } from '../interfaz/inventario';
// import DispositivoComponent from '../dispositivo/dispositivo.component';
// import  fuente from '../dispositivo/dispositivo.component'
import { InventarioService } from '../servicio/inventario.service';
import { ActivatedRoute } from '@angular/router';
import { Wearable } from '../interfaz/wearable';
@Component({
  selector: 'app-wearable',
  templateUrl: './wearable.component.html',
  styleUrls: ['./wearable.component.css']
})
export class WearableComponent implements OnInit {
  item: Wearable = {
    idW: -1,
    idD: -1,
    nombre: '',
    marca: '',
    modelo: '',
    precio: 0,
    descripcion: '',
    touch: true,
    enlazado: false,
    src:''
  };
  wearables:any=[]
  marcaWearables:any=[]
  marca =''
  wearable={}
  wearable2={}
  constructor(private inventarioService:InventarioService,private activatedRoute: ActivatedRoute) { }
  
  ngOnInit(): void {
    let paramsId = this.activatedRoute.snapshot.params['id'];

    this.inventarioService.obtenerWearables().subscribe(
      data=>{
        this.wearables = data;
      }
    )
    this.inventarioService.obtenerWearablePorId(paramsId).subscribe(
      data=>{
        console.log('paramsId',paramsId)
        // console.log('wearables ',data)
        this.wearable2=data;
        this.item = data as Wearable;
        console.log('wearbles que clickeo', data)
      }
    )
    
    this.inventarioService.obtenerWearablesPorMarca(this.marca).subscribe(
      respuesta => {
      this.marcaWearables= respuesta as Inventario[]
      
    })

  }
}
