import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CatImage } from './models/cat-image.model';

const API_ENDPOINT = 'https://api.thecatapi.com/v1';
const API_KEY = '510ff8c2-f0a8-4372-b1b7-5f7f6d880fbf';

@Injectable({
  providedIn: 'root'
})
export class CatService {
  catImages: CatImage[] = [];
  constructor(private http: HttpClient) {}

  fetchImages() {
    this.http
      .get<CatImage[]>(
        `${API_ENDPOINT}/images/search`,
        {
          headers: new HttpHeaders({
            'x-api-key': API_KEY
          }),
          params: {
            limit: '10',
            page: '1',
          }
        })
        .subscribe(images => {
          this.catImages = [ ...this.catImages, ...images];
        });
  }

  fetchImage(id: string) {
    this.http
      .get<CatImage>(
        `${API_ENDPOINT}/images/${id}`,
        {
          headers: new HttpHeaders({
            'x-api-key': API_KEY
          })
        })
        .subscribe(image => {
          this.catImages.push(image);
        });
  }

  findImage(id: string) {
    return this.catImages.find(image => image.id === id);
  }
}
