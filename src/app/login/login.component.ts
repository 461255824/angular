import { Component, OnInit } from '@angular/core';
import { Router }                 from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router) {//依赖注入路由
    this.username = "admin";
    this.password = "";
  }

  ngOnInit() {
  }
  login() {
    console.log('登录', this.username)
    if(this.username==='admin'&&this.password==='123456'){
      this.router.navigate(['/main']);
    }else{
      alert('密码或用户名有误请重新输入')
      this.username = ''
      this.password = ""
    }
  }
}
