import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { Candidate } from '../interfaces/candidate';
import { tap } from 'rxjs/operators';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  private candidates$ = new BehaviorSubject<Candidate[]>([]);

  constructor(
    private http: HttpClient,
    private authService: AuthService,
  ) { }

  get candidates(): Observable<Candidate[]> {
    return this.candidates$.asObservable();
  }

  getCandidates(): Observable<Candidate[]> {
    return of([{
      id: '1',
      name: 'first User',
      noOfChallengesSolved: 1,
      expertiseLevel: 3,
      totalVotes: 0,
      expertIn: {
      dataStructures: 2,
      algorithms: 2,
      cpp: 2,
      java: 2,
      python: 2,
      },
    }, {
      id: '2',
      name: 'second User',
      noOfChallengesSolved: 10,
      expertiseLevel: 5,
      totalVotes: 0,
      expertIn: {
      dataStructures: 4,
      algorithms: 4,
      cpp: 4,
      java: 4,
      python: 4,
      },
    }, {
      id: '3',
      name: 'third User',
      noOfChallengesSolved: 100,
      expertiseLevel: 5,
      totalVotes: 0,
      expertIn: {
      dataStructures: 4,
      algorithms: 4,
      cpp: 4,
      java: 4,
      python: 4,
      },
    }]).pipe(
      tap(result => this.candidates$.next(result)),
    ) as Observable<Candidate[]>;
  }

  vote(): Observable<boolean> {
    const user = this.authService.user;
    if (!!user) {
      const votedUser = {...user, voted: true};
      localStorage.setItem('User', JSON.stringify(votedUser));
      this.authService.setUser(votedUser);
    }
    return of(true);
  }

  updateCandidate(candidate: Candidate): Observable<boolean> {
    console.log(candidate);
    return of(true);
  }

  createCandidate(candidate: Candidate): Observable<boolean> {
    console.log(candidate);
    return of(true);
  }

  delete(candidateId: string): Observable<boolean> {
    return of(true);
  }
}
