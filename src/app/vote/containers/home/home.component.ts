import { Component, OnInit } from '@angular/core';
import { CandidateService } from '../../services/candidate.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  candidate$ = this.candidateService.candidates;

  constructor(
    private candidateService: CandidateService,
    private router: Router,
    public authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.candidateService.getCandidates().subscribe();
  }

  goto(id: string): void {
    this.router.navigate([`./candidates/candidates/${id}`]);
  }
}
