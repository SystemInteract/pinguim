import { Http } from '@angular/http';
import { Observable } from 'rxjs';

import { Injectable } from '@angular/core';

import { map } from 'rxjs/operators';

import { PIN_API } from './../../app.api';
import { MenuOption } from '../header.model';

@Injectable()
export class MenuService {
  constructor(private http: Http) {}

  options(): Observable<MenuOption[]> {
    return this.http
      .get(`${PIN_API}/api/Options`)
      .pipe(map((response: any) => response.json()));
  }
}
