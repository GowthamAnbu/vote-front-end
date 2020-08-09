import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageNotFoundComponent implements OnInit {

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.openSnackBar();
  }

  openSnackBar(): void {
    const snackBarRef = this.snackBar.open('Page Not Found', 'Go to Home', {
      duration: 3000,
    });

    snackBarRef.onAction().subscribe(() => this.router.navigate(['/candidates']));
  }

}
