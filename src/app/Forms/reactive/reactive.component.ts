import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  constructor() { }

  userForm! : FormGroup;

  ngOnInit(): void {
    this.userForm=new FormGroup({
      "fname": new FormControl(null),
      "lname": new FormControl(null),
      "number": new FormControl("6789876"),
      "email": new FormControl(null),
      "gender": new FormControl(null),
      "country": new FormControl(null),
    })
  }

  countryList = [
    { "countryname": "--Select Your Country--" },
    { "countryname": "India" },
    { "countryname": "America" },
    { "countryname": "Japan" },
    { "countryname": "China" },
    { "countryname": "Srilanka" },
    { "countryname": "Russia" }
];

}
