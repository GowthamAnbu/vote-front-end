import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { MaterialModule } from '../material/material.module';

import { FirstComponent } from './components/first/first.component';
import { FormExampleComponent } from './components/form-example/form-example.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FirstComponent, FormExampleComponent],
  imports: [
    CommonModule,
    ExampleRoutingModule,
    MaterialModule,
    SharedModule,
  ]
})
export class ExampleModule { }
