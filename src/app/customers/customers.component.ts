import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  constructor() { }

public customers = [
  {firstname: 'Michelle',
    lastname: 'Avery',
    gender : 'Female',
    email : 'email@email.com',
    address : '346 Cedar Avenue',
    city : 'Dallas',
    state : 'Texas'},

  {firstname: 'Sunrise',
    lastname: 'Sunset',
    gender : 'Female',
    email : 'email@email.com',
    address : '346 Cedar Avenue',
    city : 'Dallas',
    state : 'Texas'},

  {firstname: 'Mawi',
    lastname: 'Fireman',
    gender : 'Female',
    email : 'email@email.com',
    address : '346 Cedar Avenue',
    city : 'Dallas',
    state : 'Texas'}
];

  ngOnInit() {}

  sortByFirstName(){
    this.customers = this.customers.sort((a,b) => (a.firstname > b.firstname) ? 1 : ((b.firstname > a.firstname) ? -1 : 0));
  }

  sortByLastName(){
    this.customers = this.customers.sort((a,b) => (a.lastname > b.lastname) ? 1 : ((b.lastname > a.lastname) ? -1 : 0));
  }

}
