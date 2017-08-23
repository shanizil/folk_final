import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AlbumService } from '../../../app.AlbumService';
import { Album } from '../../../model/Album.model';

@Component({
  selector: 'app-intro-favorite',
  templateUrl: './intro-favorite.component.html',
  styleUrls: ['./intro-favorite.component.css']
})
export class IntroFavoriteComponent implements OnInit {
  @Output() albumSelected  = new EventEmitter<Album>();
  albums : Album[] =[];

  constructor(private AlbumService:AlbumService) {}

  ngOnInit() {
      this.AlbumService.getAlbums(result=>{
      this.albums=result;
      console.log(this.albums);
    });
  }

  onAlbumClick(album:Album){
    console.log(`IntroFavoriteComponent -> onAlbumClick(${album._id})`);
    this.albumSelected.emit(album);
  }
}
