import { Component, OnInit , Input} from '@angular/core';
import { Song } from '../../../../model/song.model';
import {SongService} from '../../../../app.SongService'

@Component({
  selector: 'app-intro-songs',
  templateUrl: './intro-songs.component.html',
  styleUrls: ['./intro-songs.component.css']
})
export class IntroSongsComponent implements OnInit {

  @Input() songs : Song[] =[];

  constructor(private SongService:SongService) { }

  ngOnInit() {
    //   this.SongService.getSongs((s)=>{
    //   this.songs=s;
    //   console.log(this.songs);
    // });
  }

}
