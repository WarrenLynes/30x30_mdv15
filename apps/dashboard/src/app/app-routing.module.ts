import { NgModule } from '@angular/core';
import { LoginComponent, NotFoundComponent, UiModule } from '@mdv15/ui';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ComputersComponent } from './computers/computers.component';
import { FormComponent } from './computers/form/form.component';

@NgModule({
  imports: [
    UiModule,
    RouterModule.forRoot([
      { path: '404', component: NotFoundComponent },
      { path: 'login', component: LoginComponent },
      { path: '', canActivate: [AuthGuard], children: [
          { path: '', component: ComputersComponent },
          { path: 'compare/:id/:id2', component: FormComponent }
      ]},
      { path: '**', redirectTo: '404', pathMatch: 'full' }
    ], { initialNavigation: 'enabled' })
  ]
})
export class AppRoutingModule {}
