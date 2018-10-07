import { InjectionToken } from '@angular/core';
import { IAppConfig } from './iapp.config';


export let APP_CONFIG = new InjectionToken('app.config');

export const api_url = '/api';

export const AppConfig: IAppConfig = {
  loggedInRoutes: [
      // which routes are visible when the user is logged in 
  ],
  loggedOutRoutes: [
      // which routes are visible when the user is logged out
    {
      name: 'Home',
      routerLink: 'home'
    },
    
  ],
  endpoints: {
    ctf: api_url + 'CTF',
  },
};