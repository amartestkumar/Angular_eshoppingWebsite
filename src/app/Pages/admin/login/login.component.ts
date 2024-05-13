import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginObj:any={
    Username:'',
    Password:''

  };

  constructor(private router:Router){}
  onbtnclick(){
    if (this.loginObj.Username === "admin" && this.loginObj.Password === "123") {
      this.router.navigateByUrl('/products');
    }
    else{
      alert("worng username and password");
    }
    }

}
