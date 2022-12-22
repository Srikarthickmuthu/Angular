import { Component, OnInit } from '@angular/core';
import { DependancyServicesService } from '../dependancy-services.service';

@Component({
  selector: 'app-dependancy',
  templateUrl: './dependancy.component.html',
  styleUrls: ['./dependancy.component.css'],
  providers:[DependancyServicesService]
})
export class DependancyComponent implements OnInit {
  values;
  constructor(ser:DependancyServicesService) {
    console.log(ser.books);
    this.values=ser.books;
    console.log(this.values);
   }

  ngOnInit(): void {
  }
  

}
