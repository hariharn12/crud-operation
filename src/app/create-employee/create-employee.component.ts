import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  ReactiveFormsModule,
  FormsModule,
  FormControl,
} from '@angular/forms';
import { EmployeeServiceService } from '../services/employee-service.service';

@Component({
  selector: 'app-create-employee',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './create-employee.component.html',
  styleUrl: './create-employee.component.css',
})
export class CreateEmployeeComponent {
  constructor(private employeeService: EmployeeServiceService) {}
  //  by using formbuilder ..

  // createEmployee:FormGroup;
  // constructor(private fb: FormBuilder) {
  //   this.createEmployee = this.fb.group({
  //     email:[''],
  //     password:['']
  //   })
  // }

  // by using reactive form ..
  createEmployee = new FormGroup({
    id: new FormControl(''),
    body: new FormControl(''),
    title: new FormControl(''),
  });

  onsubmit() {
    const formdata = this.createEmployee.value;
    try {
      this.employeeService.CreateEmployee(formdata);
    } catch (error) {
      console.error(error);
    }
  }
}
