import {Component, OnInit} from '@angular/core';
import {BlogPostService} from './blog_post.service';
import {UserService} from './user.service';
import {throwError} from 'rxjs';  // Angular 6/RxJS 6


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

  constructor(private _blogPostService: BlogPostService, private _userService: UserService) { }

  ngOnInit() {
    // check if  user has token in localstorage
    // if he doess, make sure he doesn't need to log in
    
    this._userService.isLoggedIn()


    this.getPosts();
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

  getPosts() {
    this._blogPostService.list().subscribe(
      // the first argument is a function which runs on success
      data => {
        this.posts = data;
        // convert the dates to a nice format
        for (let post of this.posts) {
          post.date = new Date(post.date);
        }
      },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading posts')
    );
  }

  createPost() {
    this._blogPostService.create(this.new_post, this.user.token).subscribe(
       data => {
         // refresh the list
         this.getPosts();
         return true;
       },
       error => {
         console.error('Error saving!');
         return throwError(error);
       }
    );
  }

}
