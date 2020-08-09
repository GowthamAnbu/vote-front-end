import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user$ = new BehaviorSubject<User | null>(JSON.parse(localStorage.getItem('User')));
  public mockedUserResponse: User = { userName: 'superman', token: 'asdlkjf', voted: false, roles: { candidate: false, admin: false}};

  constructor(
    public router: Router
  ) {}

  get user(): User | null {
    return this.user$.value;
  }

  setUser(user: User): void {
    this.user$.next(user);
  }

  login(payload: { userName: string, password: string }): Observable<User> {
    // mocked login
    localStorage.setItem('User', JSON.stringify(this.mockedUserResponse));
    this.user$.next(this.mockedUserResponse);
    return of(this.mockedUserResponse);
  }

  logout(): void {
    localStorage.removeItem('User');
    localStorage.clear();
    this.user$.next(null);
    this.router.navigate(['./login']);
  }
}
