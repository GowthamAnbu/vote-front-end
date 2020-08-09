import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap, tap, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';
import { Candidate } from '../../interfaces/candidate';
import { CandidateService } from '../../services/candidate.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {

  formEditable = false;
  candidate$: Observable<Candidate> = this.activatedRoute.paramMap.pipe(
    switchMap(params => this.candidateService.candidates
      .pipe(
        map(candidates => candidates.find(c => c.id === params.get('id'))),
        tap(candidate => {
          if (!candidate) {
            this.router.navigate(['./candidates']);
          } else {
            this.updateForm(candidate);
          }
        }),
        shareReplay(),
      ))
  );
  selectedCandidate;

  candidateForm = this.formBuilder.group({
    name: ['', [Validators.required]],
    experLevel: ['', [Validators.required]],
    noOfChallegesCompleted: ['', Validators.required],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private candidateService: CandidateService,
    private router: Router,
    public autheService: AuthService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.activatedRoute.data.pipe(
      tap(data =>  this.formEditable =  data.sameUser)
    ).subscribe();
  }

  updateForm(candidate: Candidate): void {
    this.selectedCandidate = candidate;
    this.candidateForm = this.formBuilder.group({
      name: [candidate.name, [Validators.required]],
      experLevel: [candidate.expertiseLevel, [Validators.required]],
      noOfChallegesCompleted: [candidate.noOfChallengesSolved, Validators.required],
    });
  }

  vote(): void {
    if (this.autheService.user && !this.autheService.user.voted) {
      this.candidateService.vote()
      .subscribe(response => this.router.navigate(['/candidates']));
    } else if (this.autheService.user && this.autheService.user.voted) {
      console.log('already voted');
    } else {
      this.router.navigate(['/login']);
    }
  }

  onSubmit(candidate, valid): void {
    if (valid) {
      const payload = {...this.selectedCandidate, ...candidate};
      this.candidateService.updateCandidate(payload).subscribe(response => this.router.navigate(['/candidates']));
    }
  }

  delete(candidateId: string): void {
    this.candidateService.delete(candidateId).subscribe(response => this.router.navigate(['/candidates']));
  }
}
