import { Component, OnInit } from '@angular/core';
import { Era } from '../../../model/Era.model';

@Component({
  selector: 'app-era',
  templateUrl: './era.component.html',
  styleUrls: ['./era.component.css']
})
export class EraComponent implements OnInit {

era : Era[] =[
new Era ("../../../../assets/images/2017.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" , 280 , -93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "2017"),
new Era ("../../../../assets/images/2010.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,385 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "2010"),
new Era ("../../../../assets/images/2000.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,490 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "2000"),
new Era ("../../../../assets/images/90's.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,595,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "90's"),
new Era ("../../../../assets/images/80's.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,700 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "80's"),
new Era ("../../../../assets/images/70's.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,805 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "70's"),
new Era ("../../../../assets/images/60's.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,910 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "60's"),
new Era ("../../../../assets/images/50's.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,1015 ,-93 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "50's"),

];
  constructor() { }

  ngOnInit() {
  }

}



