import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';

@Injectable({
  providedIn: 'root'
})
export class CtfService {

  public ctf_list: any = [];

  // http options used for making API calls
  private httpOptions: any;


  // error messages received from the login attempt
  public errors: any = [];

  constructor(private http: HttpClient,  private _userService: UserService) {
    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    this.ctf_list = this.list();

  }


  // Uses http.get() to load data from a single API endpoint
  list() {
    return this.http.get('/api/hackathons', this.httpOptions);
  }

  // send a POST request to the API to create a new data object
  create(post, token) {
    return this.http.post('/api/ctfs', JSON.stringify(post), this.getHttpOptions());
  }

  // helper function to build the HTTP headers
  getHttpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'JWT ' + this._userService.token
      })
    };
  }

}
