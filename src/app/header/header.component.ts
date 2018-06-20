import { Option } from './header.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'pin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() option: Option;

  constructor() {}

  ngOnInit() {}
}
