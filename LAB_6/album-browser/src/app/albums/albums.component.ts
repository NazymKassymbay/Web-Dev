import { Component, OnInit } from '@angular/core';
import { Album } from '../../models';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumsService } from '../albums.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.component.html',
  styleUrl: './albums.component.css'
})
export class AlbumsComponent implements OnInit {

  albums!: Album[];
  loaded: boolean = false;

  constructor(private albumsService: AlbumsService) {}

  ngOnInit() {
    this.loadAlbums();
  }

  loadAlbums() {
    this.loaded = false;

    this.albumsService.getAlbums().subscribe((albums: Album[]) => {

      // APPLY SAVED TITLES FROM LOCAL STORAGE
      this.albums = albums.map(album => {
        const savedTitle = localStorage.getItem(`album-${album.id}`);

        if (savedTitle) {
          return {
            ...album,
            title: savedTitle
          };
        }

        return album;
      });

      this.loaded = true;
    });
  }

  deleteAlbum(id: number, event: Event) {
    event.stopPropagation();

    this.albumsService.deleteAlbum(id).subscribe({
      next: () => {

        this.albums = this.albums.filter(album => album.id !== id);

        // also delete from local storage
        localStorage.removeItem(`album-${id}`);

      }
    });
  }

}