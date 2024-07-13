import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
 } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  //สร้าง FormGroup
  loginForm!: FormGroup;

  //สร้างตัวแปรไว้เช็คว่ามีการกดปุ่มมารึยัง
  submitted = false;

  //ตัวแปรสำหรับการผูกกับฟอร์ม
  userLogin ={
    "email" : "",
    "password" : ""
  }

  //เรียกผ่าน Constructor
  constructor(private formBuilder: FormBuilder){

  }

  //ngOnInit
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email:['',[Validators.required, Validators.email]],
      password:['',[Validators.required, Validators.minLength(6)]]
    })

  }
  submitLogin(){

    this.submitted = true

    //ถ้าฟอร์มไม่ถูกต้อง (Invalid)

    if(this.loginForm.invalid){
      return
    }else{
    this.userLogin.email = this.loginForm.value.email
    this.userLogin.password = this.loginForm.value.password

    if(this.userLogin.email == "admin@gmail.com" && this.userLogin.password == "123456"){
      alert("เข้าสู่ระบบสำเร็จ")
    }else{
      alert("เข้าสู่ระบบไม่สำเร็จ")
    }
    }
  }
  resetForm(){
    this.submitted = false
    this.loginForm.reset()
  }

}
