import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { SideNavComponent } from './components/sidenav/side-nav.component';
import { AppComponent } from './containers/app.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';

const components  = [
  SideNavComponent,
  PageNotFoundComponent,
];

const containers = [
];

@NgModule({
  declarations: [
    AppComponent,
    ...components,
    ...containers,
    ToolbarComponent,
    LoginFormComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
  ],
  exports: [
    ...components,
    ...containers,
  ],
})
export class CoreModule { }
