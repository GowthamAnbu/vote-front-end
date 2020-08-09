import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
import { CandidateService } from '../../services/candidate.service';

@Component({
  selector: 'app-new-candidate',
  templateUrl: './new-candidate.component.html',
  styleUrls: ['./new-candidate.component.css']
})
export class NewCandidateComponent implements OnInit {

  candidateForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    experLevel: ['', [Validators.required]],
    noOfChallegesCompleted: ['', Validators.required],
    expertIn: [{
      dataStructures: 2,
      algorithms: 2,
      cpp: 2,
      java: 2,
      python: 2,
      }],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private candidateService: CandidateService,
    private router: Router,
    public authService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    if (this.authService.user && !this.authService.user.roles.admin || (!this.authService.user)) {
      this.router.navigate(['/candidates']);
    }
  }

  onSubmit(candidate, valid): void {
    if (valid) {
      this.candidateService.createCandidate(candidate).subscribe(response => this.router.navigate(['/candidates']));
    }
  }

}
