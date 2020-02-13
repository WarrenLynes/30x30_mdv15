import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '@mdv15/material';
import { UiModule } from '@mdv15/ui';
import { CoreStateModule } from '@mdv15/core-state';
import { CoreDataModule } from '@mdv15/core-data';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent],
  imports: [
    MaterialModule,
    BrowserModule,
    UiModule,
    CoreStateModule,
    CoreDataModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([], { initialNavigation: 'enabled' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
