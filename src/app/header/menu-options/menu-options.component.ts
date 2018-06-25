import { Option } from './menu-option/menu-option.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pin-menu-options',
  templateUrl: './menu-options.component.html'
})
export class MenuOptionsComponent implements OnInit {
  constructor() {}

  options: Option[] = [
    {
      text: 'Bradesco',
      haveSubOption: true,
      SubOptions: [{ text: 'CACS', path: 'mainForm' }]
    },
    {
      text: 'Mercado Pago',
      haveSubOption: false,
      path: 'mainForm'
    }
  ];

  ngOnInit() {}
}
