import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../../user.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // http options used for making API calls
  private httpOptions: any;


  constructor(private http: HttpClient, private _userService: UserService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }

  getAllHackathons(): Observable<any> {
    return this.http.get('/api/hackathons');
  }

  getHackathon(id: Number): Observable<any> {
    return this.http.get('/api/hackathons/' + String(id));
  }

  createHackathon(data: any): Observable<any> {
    return this.http.put('/api/hackathons', JSON.stringify(data), this.getHttpOptions(true));
  }

  updateHackathon(hackathon: any): Observable<any> {
    return this.http.put('/api/hackathons/' + hackathon.id,
      JSON.stringify(hackathon), this.getHttpOptions(false));
  }

  getAllChallenges(): Observable<any> {
    return this.http.get('/api/challenges');
  }

  getHttpOptions(anonymous = true) {
    if (anonymous) {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        })
      }
    } else {
      return {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
          'Authorization': 'JWT ' + this._userService.token
        })
      }
    }
  }


}
