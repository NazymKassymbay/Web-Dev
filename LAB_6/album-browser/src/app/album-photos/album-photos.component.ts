import { Component, OnInit } from '@angular/core';
import { Photo} from '../../models';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule , RouterModule],
  templateUrl: './album-photos.component.html',
  styleUrl: './album-photos.component.css'
})
export class AlbumPhotosComponent implements OnInit{
  photos : Photo[] = [] ;
  loaded : boolean = false; 
  
  constructor(private route : ActivatedRoute , private albumsService : AlbumsService){
  }

  ngOnInit(){
  this.route.paramMap.subscribe((params) => {
    const albumId = Number(params.get('id'));
    this.loaded = false;
  

    this.albumsService.getAlbumPhotos(albumId).subscribe({
      next: (photos: Photo[]) => {
        this.photos = photos.map(photo => ({
          ...photo,
          thumbnailUrl: `https://picsum.photos/id/${photo.id}/150/150`,
          url: `https://picsum.photos/id/${photo.id}/600/600`
        }));
        this.loaded = true;
      }
    });
  });

  }
}