import { Component, OnInit } from '@angular/core';
import { Era } from '../../../model/Era.model';

@Component({
  selector: 'app-era',
  templateUrl: './era.component.html',
  styleUrls: ['./era.component.css']
})
export class EraComponent implements OnInit {

era : Era[] =[
new Era ("../../../../assets/images/2017.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" , 210 , -93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "2017"),
new Era ("../../../../assets/images/2010.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,315 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "2010"),
new Era ("../../../../assets/images/2000.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,420 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "2000"),
new Era ("../../../../assets/images/90's.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,525,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "90's"),
new Era ("../../../../assets/images/80's.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,630 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "80's"),
new Era ("../../../../assets/images/70's.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,735 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "70's"),
new Era ("../../../../assets/images/60's.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,840 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "60's"),
new Era ("../../../../assets/images/50's.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,945 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "50's"),

];
  constructor() { }

  ngOnInit() {
  }

}



