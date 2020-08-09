import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { VoteRoutingModule } from './vote-routing.module';
import { HomeComponent } from './containers/home/home.component';
import { CandidateDetailsComponent } from './containers/candidate-details/candidate-details.component';
import { NewCandidateComponent } from './containers/new-candidate/new-candidate.component';

const containers = [
  HomeComponent,
  CandidateDetailsComponent,
  NewCandidateComponent,
];

@NgModule({
  declarations: [
    ...containers,
  ],
  imports: [
    CommonModule,
    VoteRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class VoteModule { }
