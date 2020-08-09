import { Component, ViewChild, ElementRef } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils.service';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {

  @ViewChild('drawer') drawer: ElementRef<MatSidenav>;
  constructor(
    public utilsService: UtilsService,
    public authService: AuthService,
  ) {}

  logout(): void {
    this.authService.logout();
  }
}
