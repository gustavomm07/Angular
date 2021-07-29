import { AuthService } from './../sevice/auth.service';
import { UserLogin } from './../model/UserLogin';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {
userLogin : UserLogin = new UserLogin;
  constructor(
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  window.scroll(0,0)
  }

  test(){
    alert(JSON.stringify(this.userLogin))
  }

  entrar(){
   this.auth.entrar(this.userLogin).subscribe((resp: UserLogin)=>{
     this.userLogin = resp
   })
  }
}
