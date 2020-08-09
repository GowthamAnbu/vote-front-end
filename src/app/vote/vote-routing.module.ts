import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home/home.component';
import { CandidateDetailsComponent } from './containers/candidate-details/candidate-details.component';
import { IsSameUserResolver } from './resolver/is-same-candidate';
import { NewCandidateComponent } from './containers/new-candidate/new-candidate.component';

const routes: Routes = [{
  path: '',
  children: [
    {
      path: '',
      redirectTo: 'candidates',
      pathMatch: 'full',
    },
    {
      path: 'candidates',
      component: HomeComponent,
    },
    {
      path: 'candidates/:id',
      component: CandidateDetailsComponent,
      resolve: {
        sameUser: IsSameUserResolver,
      }
    },
    {
      path: 'newcandidate',
      component: NewCandidateComponent,
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VoteRoutingModule { }
