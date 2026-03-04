import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Album } from '../../models';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-details',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './album-details.component.html',
  styleUrl: './album-details.component.css'
})
export class AlbumDetailsComponent implements OnInit {

  album!: Album;
  loaded: boolean = false;

  editTitle: string = '';
  isEditing: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private albumsService: AlbumsService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {

      const albumId = Number(params.get('id'));
      this.loaded = false;

      this.albumsService.getAlbum(albumId).subscribe((album: Album) => {
        this.album = album;
        this.editTitle = album.title;
        this.loaded = true;
      });

    });
  }

  toggleEdit() {
    this.isEditing = !this.isEditing;

    if (this.isEditing) {
      this.editTitle = this.album.title;
    }
  }

  saveTitle() {

  if (this.editTitle !== this.album.title) {

    const updatedAlbum: Album = {
      ...this.album,
      title: this.editTitle
    };

    this.albumsService.updateAlbum(updatedAlbum).subscribe({
      next: () => {

        // UI update
        this.album.title = this.editTitle;

        // SAVE TITLE
        localStorage.setItem(`album-${this.album.id}`, this.editTitle);

        this.isEditing = false;
      }
    });

  } else {
    this.isEditing = false;
  }
}
}