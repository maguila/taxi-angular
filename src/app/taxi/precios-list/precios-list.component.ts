import { Component, OnInit } from '@angular/core';
import { Precio } from '../../model/precios';
import { PreciosService } from '../../service/precios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { KeyFilterModule } from 'primeng/keyfilter';

@Component({
  selector: 'app-precios-list',
  standalone: true,
  imports: [CommonModule, FormsModule, PanelModule, ButtonModule, InputTextModule, DialogModule, CardModule, KeyFilterModule  ],
  templateUrl: './precios-list.component.html',
  styleUrl: './precios-list.component.scss',
  providers: [PreciosService]
})
export class PreciosListComponent implements OnInit{

  preciosArray: Precio[] = []
  visible: boolean = false

  constructor(private precioService:PreciosService){}

  ngOnInit(): void {
    this.precioService.getPrecios().subscribe(data=>{
      this.preciosArray = data      
    })
  }

  filterChange(event:any){

    let value = event.target.value

    if(value == '' || value == undefined){
      this.precioService.getPrecios().subscribe(data=>{
        this.preciosArray = data      
      })      
    }else{
      let filterList = 
      this.preciosArray.filter(precio => 
        precio.nombre!.toLowerCase().includes(value.toLowerCase())
      )      
      this.preciosArray = filterList
    }



  }

  visibleClick(){
    this.visible = true
  }

}
