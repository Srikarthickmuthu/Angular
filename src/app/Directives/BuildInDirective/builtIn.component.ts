import { Component } from "@angular/core";
@Component({
    selector: 'app-builtIn',
    // template:'<p>hrefgewhd</p>'
    templateUrl: './builtIn.component.html',
    styleUrls: ['./builtIn.component.css']
})
export class builtIn {
    val = 11;
    constructor() {
        setTimeout(() => {
            this.val = 3;
        }, 3000);
    }
    people: any[] = [
        {
            "name": "karthick"
        },
        {
            "name": "santha"
        },
        {
            "name": "divish"
        },
        {
            "name": "mugesh"
        },
        {
            "name": "amar"
        }
    ];
}