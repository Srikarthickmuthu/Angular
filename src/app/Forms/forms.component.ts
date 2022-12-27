import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
    selector: 'app-forms',
    templateUrl: './forms.component.html',
    styleUrls: ['forms.component.css']
})

export class forms {
    onSubmit(myForm: NgForm) {
        console.log(myForm);
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