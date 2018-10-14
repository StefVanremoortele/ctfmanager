import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {UserService} from './user.service';
import {throwError} from 'rxjs';  // Angular 6/RxJS 6
import { ToastsManager } from 'ng6-toastr/ng2-toastr';


@Component({
  selector: 'app-root',

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * An object representing the user for the login form
   */
  public user: any;
  public newUser: any;

  /**
   * An array of all the BlogPost objects from the API
   */
  public posts;

  /**
   * An object representing the data in the "add" form
   */
  public new_post: any;

  constructor(private _userService: UserService, public toastr: ToastsManager, vcr: ViewContainerRef) { 
    this.toastr.setRootViewContainerRef(vcr);
 
  }

  popToast() {
    this.toastr.error('success', 'Args Title');
  }

  ngOnInit() {
    // check if  user has token in localstorage
    // if he doess, make sure he doesn't need to log in
    
    this._userService.isLoggedIn()

    this.new_post = {};
    this.user = {
      username: '',
      password: ''
    };
    this.newUser = {
      username: '',
      email: '',
      password: '',
    };
  }


  login() {
    this._userService.login({'username': this.user.username, 'password': this.user.password});
  }

  register() {
    console.log("registering...")
    // this._userService.register({'username': this.newUser.username, 'email': this.newUser.email, 'password': this.newUser.password}, this.user.token);
    this._userService.register({'username': this.newUser.username, 'email': this.newUser.email, 'password': this.newUser.password}).subscribe(
      data => {
        // refresh the list
        console.log("Sucessfully registered")
        return true;

      },
      error => {
        console.error('Error saving!');
        return throwError(error);
      }
   );
  }


  refreshToken() {
    this._userService.refreshToken();
  }

  logout() {
    this._userService.logout();
  }
}
