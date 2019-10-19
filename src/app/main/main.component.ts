import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  constructor(private catService: CatService) { }

  ngOnInit() {
    this.catService.fetchImages();
  }

  get images() {
    return this.catService.catImages;
  }

  onIntersect() {
    this.catService.fetchImages();
  }
}
