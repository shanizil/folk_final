import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../../../app.AlbumService';
import { UserAlbum } from '../../../model/UserAlbum.model';

@Component({
  selector: 'app-intro-albums',
  templateUrl: './intro-albums.component.html',
  styleUrls: ['./intro-albums.component.css']
})

export class IntroAlbumsComponent implements OnInit {

  userAlbums : UserAlbum[] =[];

  constructor(private AlbumService:AlbumService) { }

  ngOnInit() {
      this.AlbumService.getUserAlbums(result=>{
      this.userAlbums=result;
      console.log(this.userAlbums);
    });     
  }

}
