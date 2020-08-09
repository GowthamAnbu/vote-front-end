import { Component, OnInit, Input } from '@angular/core';
import { UtilsService } from '../../../shared/services/utils.service';
import { MatSidenav } from '@angular/material/sidenav/sidenav';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  @Input() drawer: MatSidenav;

  constructor(
    public utilsService: UtilsService,
    public authService: AuthService,
  ) {}

  ngOnInit(): void {
  }

}
