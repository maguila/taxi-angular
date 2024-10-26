import { Component, OnInit } from '@angular/core';
import { Precio } from '../../model/precios';
import { PreciosService } from '../../service/precios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-precios-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './precios-list.component.html',
  styleUrl: './precios-list.component.scss',
  providers: [PreciosService]
})
export class PreciosListComponent implements OnInit{

  preciosArray: Precio[] = []

  constructor(private precioService:PreciosService){}

  ngOnInit(): void {
    this.precioService.getPrecios().subscribe(data=>{
      this.preciosArray = data
    })
  }
}
