import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { CatImage } from '../models/cat-image.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  image: CatImage;
  constructor(private catService: CatService) { }

  ngOnInit() {
    this.catService.fetchImages();
  }

  get images() {
    return this.catService.catImages;
  }
}
