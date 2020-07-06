import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ComicssvcService {
  constructor(private http: HttpClient) {}

  getComics(): Observable<object> {
    return this.http.get(
      'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=7423f31d4557ee99c1c14a90a9111779&hash=a21d35a1fe1c151ae2dc433cdeefff1c'
    );
  }

  getSingleComic(id): Observable<object> {
    console.log('id en services', id);
    return this.http.get(
      `http://gateway.marvel.com/v1/public/comics/${id}?ts=1&apikey=7423f31d4557ee99c1c14a90a9111779&hash=a21d35a1fe1c151ae2dc433cdeefff1c`
    );
  }

  getComicCharacters(id): Observable<object> {
    console.log('id en services', id);
    return this.http.get(
      `http://gateway.marvel.com/v1/public/comics/${id}/characters?ts=1&apikey=7423f31d4557ee99c1c14a90a9111779&hash=a21d35a1fe1c151ae2dc433cdeefff1c`
    );
  }
}
