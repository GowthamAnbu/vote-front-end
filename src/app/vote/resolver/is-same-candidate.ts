import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { AuthService } from 'src/app/core/services/auth.service';

@Injectable({ providedIn: 'root' })
export class IsSameUserResolver implements Resolve<boolean> {

  constructor(
    private authSercie: AuthService
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    let sameUser = false;
    // console.log(route.paramMap.get('id'));
    if (this.authSercie.user && this.authSercie.user.roles.admin) {
      sameUser = true;
    } else if (this.authSercie.user && this.authSercie.user.roles.candidate) {
      // mocked response;
      return of(true);
    }
    return sameUser;
  }
}
