import { MenuSubOptions } from './../../../header.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pin-menu-sub-option',
  templateUrl: './menu-sub-option.component.html',
  styleUrls: ['./menu-sub-option.component.scss']
})
export class MenuSubOptionComponent implements OnInit {
  @Input() subOption: MenuSubOptions;

  constructor() {}

  ngOnInit() {}
}
