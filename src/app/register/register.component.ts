import { Component } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormBuilder,
  Validators
 } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  //สร้าง FormGroup
  registerForm!: FormGroup;

  //สร้างตัวแปรไว้เช็คว่ามีการกดปุ่มมารึยัง
  submitted = false;

  //ตัวแปรสำหรับการผูกกับฟอร์ม
  userRegister ={
    "fullname" : "",
    "email" : "",
    "mobile" : "",
    "password" : ""
  }

  //เรียกผ่าน Constructor
  constructor(private formBuilder: FormBuilder){

  }

  //ngOnInit
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname:['',[Validators.required]],
      email:['',[Validators.required, Validators.email]],
      mobile:['',[Validators.required], Validators.minLength(10)],
      password:['',[Validators.required, Validators.minLength(6)]]
    })

  }
  submitRegister(){

    this.submitted = true

    //ถ้าฟอร์มไม่ถูกต้อง (Invalid)

    if(this.registerForm.invalid){
      return
    }else{
    this.userRegister.fullname = this.registerForm.value.fullname
    this.userRegister.email = this.registerForm.value.email
    this.userRegister.mobile = this.registerForm.value.mobile
    this.userRegister.password = this.registerForm.value.password
    }
  }
  resetForm(){
    this.submitted = false
    this.registerForm.reset()
  }

}
