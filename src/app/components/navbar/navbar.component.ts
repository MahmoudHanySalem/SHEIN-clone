import { Component } from '@angular/core';
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-navbar',
  imports: [NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
isHovered=false;
catBtnHover=false;
}
