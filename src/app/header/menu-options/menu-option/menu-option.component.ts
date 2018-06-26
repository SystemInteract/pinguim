import { MenuOption } from './../../header.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pin-menu-option',
  templateUrl: './menu-option.component.html'
})
export class MenuOptionComponent implements OnInit {
  @Input() menuOption: MenuOption;

  constructor() {}

  ngOnInit() {}
}
