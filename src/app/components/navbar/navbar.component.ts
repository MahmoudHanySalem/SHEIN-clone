import { Component, inject } from '@angular/core';
import { NgClass } from "@angular/common";
import { GlobalService } from '../../services/global.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule,NgClass],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
globalService : GlobalService = inject(GlobalService);
isHovered=false;
catBtnHover=false;
}
