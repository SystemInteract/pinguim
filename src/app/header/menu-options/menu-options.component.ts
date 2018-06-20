import { Option } from './menu-option/menu-option.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pin-menu-options',
  templateUrl: './menu-options.component.html'
})
export class MenuOptionsComponent implements OnInit {
  constructor() {}
  options: Option[] = [
    { id: '1', text: 'Bradesco' },
    { id: '2', text: 'Mercadopago' },
    { id: '3', text: 'Sky' },
    { id: '4', text: 'Creditis' },
    { id: '5', text: 'Outros' }
  ];

  ngOnInit() {}
}
