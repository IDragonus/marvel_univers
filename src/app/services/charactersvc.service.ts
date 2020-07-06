import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersvcService {
  constructor(private http: HttpClient) {}

  getCharacters(): Observable<object> {
    return this.http.get(
      'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=7423f31d4557ee99c1c14a90a9111779&hash=a21d35a1fe1c151ae2dc433cdeefff1c'
    );
  }

  getSingleCharacter(id): Observable<object> {
    console.log('id en services', id);
    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=7423f31d4557ee99c1c14a90a9111779&hash=a21d35a1fe1c151ae2dc433cdeefff1c`
    );
  }

  getComics(id): Observable<object> {
    console.log('id en services', id);
    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters/${id}/comics?ts=1&apikey=7423f31d4557ee99c1c14a90a9111779&hash=a21d35a1fe1c151ae2dc433cdeefff1c`
    );
  }

  getSeries(id): Observable<object> {
    console.log('id en services', id);
    return this.http.get(
      `http://gateway.marvel.com/v1/public/characters/${id}/series?ts=1&apikey=7423f31d4557ee99c1c14a90a9111779&hash=a21d35a1fe1c151ae2dc433cdeefff1c`
    );
  }
}
