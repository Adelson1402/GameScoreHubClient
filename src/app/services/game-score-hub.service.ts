import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GameInfo } from '../interfaces/game-info';

@Injectable({
  providedIn: 'root'
})
export class GameScoreHubService {

  constructor(private http: HttpClient) { }

  getTest(): Observable<any>{
    return this.http.get<any>('http://localhost:8080/api/welcomeApi');
  }

  searchGame(nameGame: string): Observable<GameInfo[]>{
    return this.http.get<GameInfo[]>(`http://localhost:8080/api/FindGame?gameName=${nameGame}`);
  }


}
