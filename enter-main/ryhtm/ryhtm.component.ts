import { Component, OnInit } from '@angular/core';
import { Ryhtm } from '../../../model/ryhtm.model';
@Component({
  selector: 'app-ryhtm',
  templateUrl: './ryhtm.component.html',
  styleUrls: ['./ryhtm.component.css']
})
export class RyhtmComponent implements OnInit {
  constructor() { }
  ryhtms : Ryhtm[] =[
new Ryhtm ("../../../../assets/images/violin.png",150,150),

];
// src:string="../../../../assets/images/studio.png";
  ngOnInit() {
// var range = document.getElementById('range');
// var x = this.ryhtms;
// var value:100;
// // var width = 150;
// // var height = 150;
// // var value =100;
// // var height = image.height;

// range.onchange = function(){
//    x[0].width=x[0].width * range/ 100;
//    console.log(x[0]);
//      // width = width * 100;
//      // var image = width;
//      // console.log(width)
//     // image.height = height * (ranger.value / 100);
//      // console.log(image)
// }
  }

}
