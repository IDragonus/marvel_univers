import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreatorssvcService {
  constructor(private http: HttpClient) {}

  getCreators(): Observable<object> {
    return this.http.get(
      'http://gateway.marvel.com/v1/public/creators?ts=1&apikey=7423f31d4557ee99c1c14a90a9111779&hash=a21d35a1fe1c151ae2dc433cdeefff1c'
    );
  }

  getSingleCreator(id): Observable<object> {
    return this.http.get(
      `http://gateway.marvel.com/v1/public/creators/${id}?ts=1&apikey=7423f31d4557ee99c1c14a90a9111779&hash=a21d35a1fe1c151ae2dc433cdeefff1c`
    );
  }
}
