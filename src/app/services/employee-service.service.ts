import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { Employeelist } from '../employee-list/employee-list.component';

@Injectable({
  providedIn: 'root',
})
export class EmployeeServiceService {
  #http = inject(HttpClient);
  constructor() {}

  // get api all
  getemployee() {
    return lastValueFrom(
      this.#http.get<Employeelist[]>(
        'https://jsonplaceholder.typicode.com/posts'
      )
    );
  }
  // get api by id
  getemployeebyid(id: number) {
    return lastValueFrom(
      this.#http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    );
  }

  CreateEmployee(data: any) {
    return lastValueFrom(
      this.#http.post('https://jsonplaceholder.typicode.com/posts', data)
    );
  }
}
