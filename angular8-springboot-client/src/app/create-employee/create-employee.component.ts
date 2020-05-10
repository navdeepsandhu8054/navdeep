import { EmployeeService } from '../employee.service';
import { Employee } from '../employee';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  employee: Employee = new Employee();
  submitted = false;
  errorMessage: any;
 // successMessage: string;
  //aForm: FormGroup;
  

  constructor(private employeeService: EmployeeService,
    private router: Router) { }

   ngOnInit()
   {
    // this.aForm=this.formBuilder.group({
    //   firstName:['', Validators.required],
    //   lastName:['', Validators.required],
    //   emailId:['', [Validators.required, Validators.email]],
    //   mobileNo:['', [Validators.required, Validators.pattern("[\\d]{10}")]]
    // })
  }

  newEmployee(): void {
    this.submitted = false;
    this.employee = new Employee();
  }

  save() {
    this.employeeService.createEmployee(this.employee)
      .subscribe(data => console.log(data), error => this.errorMessage=error.error.message);
      if(this.errorMessage==null){
        this.errorMessage="New Employee Created successfully";
      }
    this.employee = new Employee();

    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  goBack(){this.gotoList();}
  
  gotoList() {
    this.router.navigate(['/employees']);
  }
}
