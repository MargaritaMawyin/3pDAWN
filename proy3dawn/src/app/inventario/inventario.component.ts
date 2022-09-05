import { Component, OnInit } from '@angular/core';
import { InventarioService } from '../servicio/inventario.service';
import { Inventario } from '../interfaz/inventario';
import { ActivatedRoute } from '@angular/router';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {
  item: Inventario = {
    idW: -1,
    idD: -1,
    nombre: '',
    marca: '',
    modelo: '',
    precio: 0,
    descripcion: '',
    touch: true,
    enlazado: false,
  };
  fileName = 'reporteWearables.xlsx';
  displayedColumns: string[] = ['id', 'nombre', 'marca', 'color', 'precio'];
  displayedColumns2: string[] = ['no hay'];

  dataSource = [];
  dataSourceVacia2: any = [{ caracteristicas: 'NA', color: "NA", fechaDeCreacion: "NA", id: 'NA', marca: "NA", nombre: "NA", precio: 'NA' }];
  wearables: any = [];
  dataSourceVacia: any = { marca: 'NA' };
  marcas: any = [];
  marcas2: any = [];
  selectedMarca: any = { marca: '' };
  nada = false;
  constructor(private inventarioService: InventarioService, private activatedRoute: ActivatedRoute) { }
  exportexcel(): void {
    /* pass here the table id */
    let element = document.getElementById('excel-table');
    const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);

  }
  ngOnInit(): void {
    //para mostras la info en la tabla
    this.inventarioService.obtenerBaseDeDatos().subscribe(
      respuesta => {
        // console.log(respuesta)
        this.dataSource = respuesta as any
        console.log(this.dataSource)
      })

    this.inventarioService.obtenerDispositivos().subscribe(
      respuesta => {
        this.marcas = respuesta;
        //   for(let i in this.marcas) {
        //    if(!this.marcas2.includes(this.marcas[i].marca)){
        //     this.marcas2.push(this.marcas[i].marca )
        //    }
        // }
        console.log(this.marcas)
      })

    this.mostarWearablesPorMarca()

  }

  mostarWearablesPorMarca() {
    // console.log(this.selectedMarca)
    this.inventarioService.obtenerWearablesPorMarca(this.selectedMarca.marca).subscribe(
      respuesta => {

        if (this.selectedMarca != undefined) {
          // console.log(this.selectedMarca)
          // console.log(Object.values(respuesta))
          if (this.dataSource != null) {
            this.dataSource = Object.values(respuesta) as any
          }
          if (this.dataSource != null) {
            this.nada= true;
          }
          
          console.log(this.dataSource)

        }

      })
  }


}
