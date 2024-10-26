import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AuthService } from '../../service/auth.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule , ButtonModule, DividerModule, InputTextModule, PanelModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService]
})
export class LoginComponent implements OnInit{

  usuario?:string
  password?:string
  
  constructor(private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object,
    private authService:AuthService
  ){}

  ngOnInit(): void {
    // Verifica si estamos en el entorno del navegador antes de acceder al document
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.addClass(document.body, 'body-background');      
    }
    
  }

  
  login(){
    this.authService.login('','').subscribe(response =>{
      debugger
    })
  }
  


}
