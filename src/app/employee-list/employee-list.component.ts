import { Component, inject, OnInit } from '@angular/core';
import { EmployeeServiceService } from '../services/employee-service.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

export interface Employeelist {
  id: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css',
})
export class EmployeeListComponent implements OnInit {
  emplist: Employeelist[] = [];
  empid: any;
  employelist = inject(EmployeeServiceService);

  constructor() {}

  async Getemployee() {
    try {
      const res = await this.employelist.getemployee();
      this.emplist = res;
      console.log('hari', this.emplist);
    } catch (error) {
      console.error(error);
    }
  }

  async getemployeebyid() {
    try {
      this.empid = await this.employelist.getemployeebyid(5);
      console.log(this.empid);
    } catch (error) {
      console.error(error);
    }
  }

  ngOnInit(): void {
    this.Getemployee();
    this.getemployeebyid();
  }
}
