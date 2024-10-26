import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, Inject, OnInit, PLATFORM_ID, Renderer2 } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { AuthService } from '../../service/auth.service';
import { PasswordModule } from 'primeng/password';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule ,ButtonModule, DividerModule, InputTextModule, PanelModule, PasswordModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  providers: [AuthService]
})
export class LoginComponent implements OnInit{

  username?:string
  password?:string

  private router = inject(Router);
  
  constructor(private authService:AuthService){}

  ngOnInit(): void {    

  }

  
  login(){
    this.authService.login(this.username!,this.password!).subscribe(response =>{
      this.router.navigate(['/precios']);
    })
  }
  


}
