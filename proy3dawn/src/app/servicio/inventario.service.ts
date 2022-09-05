import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //
import { MatCardActions } from '@angular/material/card';

@Injectable({
  providedIn: 'root'
})
export class InventarioService {
  constructor(private http: HttpClient) { }
  obtenerBaseDeDatos() {
    return this.http.get('https://inventario-16c63-default-rtdb.firebaseio.com/wearables.json?print=pretty')

  }
  obtenerWearables() {
    return this.http.get('http://localhost:3000/wearables')
  }

  obtenerWearablesPorMarca(marca: string) {
    return this.http.get(`https://inventario-16c63-default-rtdb.firebaseio.com/wearables.json?print=pretty&orderBy=%22marca%22&equalTo=%22${marca}%22`)
  }

  /* para ngfor anidado */
  obtenerWearablePorId(id: string) {
    return this.http.get('http://localhost:3000/wearables/id/' + id)
  }

  obtenerDispositivos() {
    return this.http.get('http://localhost:3000/dispositivos')
  }

  // obtenerDispositivosPorMarca(marca: string) {
  //   return this.http.get('http://localhost:3000/dispositivos/marca' + marca)
  // }


  // obtenerDispositivosPorId(id: string) {
  //   return this.http.get(`http://localhost:3000/dispositivos/id/${id}`)
  // }



}
