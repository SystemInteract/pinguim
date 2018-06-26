import { MenuService } from './menu-options.service';

import { Component, OnInit } from '@angular/core';
import { MenuOption } from '../header.model';

@Component({
  providers: [],
  selector: 'pin-menu-options',
  templateUrl: './menu-options.component.html'
})
export class MenuOptionsComponent implements OnInit {
  constructor(private menuService: MenuService) {}

  menuOptions: MenuOption[];

  ngOnInit() {
    this.menuService
      .options()
      .subscribe(menuOptions => (this.menuOptions = menuOptions));
  }
}
