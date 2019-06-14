      
      //My Ts Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shooping';

  Check=true;
  ToyName:string="";
  ToyPrice:string="";
  CartDetails=[];
  Toypic:string="";
  newPrice: number=0;

Toys=[
    {Pic:'toy1.jpg',Name:'Iron Man',Price:150,Quantity:0},
    {Pic:'toy2.jpg',Name:'Deadpool',Price:150,Quantity:0},
    {Pic:'toy3.jpg',Name:'Captain America',Price:250,Quantity:0},
    {Pic:'toy4.jpg',Name:'Bicycle',Price:350,Quantity:0},
    
];

NewToy = [];
total: Number = 0;
productNumber:Number = 0; 


AddtoCart(toy){

this.NewToy.push(toy);
this.total = this.total + toy.Price;
this.productNumber = this.NewToy.length;
}

deleteCart(new_toy){
  let index = this.NewToy.indexOf(new_toy)
  this.NewToy.splice(index, 1);
  this.total = this.total - toy.Price;
}

  }


