import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@mdv15/material';
import { UiModule } from '@mdv15/ui';
import { CoreStateModule } from '@mdv15/core-state';
import { CoreDataModule } from '@mdv15/core-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ComputersComponent } from './computers/computers.component';
import { ListComponent } from './computers/list/list.component';
import { DetailComponent } from './computers/detail/detail.component';
import { FormComponent } from './computers/form/form.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ComputersComponent,
    ListComponent,
    DetailComponent,
    FormComponent
  ],
  imports: [
    MaterialModule,
    BrowserModule,
    UiModule,
    CoreStateModule,
    CoreDataModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
