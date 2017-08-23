import { Component, OnInit } from '@angular/core';
import { Instrument } from '../../../model/instrument.model';


@Component({
  selector: 'app-instrument',
  templateUrl: './instrument.component.html',
  styleUrls: ['./instrument.component.css']
})
export class InstrumentComponent implements OnInit {
visable:boolean=true;
instruments : Instrument[] =[
new Instrument ("../../../../assets/images/violin.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" , 240 , -175 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "Violin"),
new Instrument ("../../../../assets/images/bouzouki.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,420 ,-86 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "bouzouki"),
new Instrument ("../../../../assets/images/drum.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,525 ,-230 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "drums"),
new Instrument ("../../../../assets/images/quena.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,610 ,-65 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "Quena"),
new Instrument ("../../../../assets/images/guitar.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,705 ,-220 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "Guitar"),
new Instrument ("../../../../assets/images/panflute.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,860 ,-63 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "panflute"),
new Instrument ("../../../../assets/images/piano.png","../../../../assets/images/guitar.png","../../../../assets/images/guitar2.png" ,1010 ,-170 ,"../../../../assets/images/guitar2.png","../../../../assets/images/dotBefore.png","../../../../assets/images/dotAfter.png", "piano"),

];

  onClick(){
      for(var i=0 ; i<this.instruments.length; i++ ){
      this.instruments[i].ImgCurrent=this.instruments[i].ImgSrcAfter;
      // if(this.visable==true){
      // return this.instruments[0].X;
      // }
      console.log(this.instruments[i].ImgCurrent)
      console.log(this.instruments.length)
      console.log(i);
      console.log("fffb")
 
      }
      // this.instruments.find
  }
// instriments [] = {
//     new instriment ("jdjgfjg","jdjgfjg","jdjgfjg" ,3 ,3 ,"jdjgfjg","jdjgfjg", "jdjgfjgyyyyyyyyy")
// 
  constructor( ){
  }

  ngOnInit() {
  }


}
