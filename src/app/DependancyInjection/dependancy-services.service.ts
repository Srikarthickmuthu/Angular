import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DependancyServicesService {
  constructor() { 
    console.log('service class');
  }
  books=[{'name':'book1'},
{'name':'book2'},
{'name':'book3'},
{'name':'book4'},
{'name':'book5'}
]
}

