import { Component, OnInit, Input } from '@angular/core';
import { SubOptions } from './../menu-option.model';

@Component({
  selector: 'pin-menu-sub-option',
  templateUrl: './menu-sub-option.component.html',
  styleUrls: ['./menu-sub-option.component.scss']
})
export class MenuSubOptionComponent implements OnInit {
  @Input() subOption: SubOptions;

  constructor() {}

  ngOnInit() {}
}
