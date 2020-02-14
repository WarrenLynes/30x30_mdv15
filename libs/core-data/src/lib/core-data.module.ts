import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth/auth.service';
import { ComputersService } from './computers/computers.service';
import { SnackbarComponent } from './snackbar/snackbar.component';

@NgModule({
  declarations: [SnackbarComponent],
  imports: [CommonModule, HttpClientModule],
  providers: [ AuthService, ComputersService, ],
  entryComponents: [SnackbarComponent]
})
export class CoreDataModule {}
