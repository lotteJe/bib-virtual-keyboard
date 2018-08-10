import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTabsModule } from '@angular/material/tabs';

import { MaterialModule } from './material/material.module';

import { MatKeyboardModule } from '@ngx-material-keyboard/core';

import { AppComponent } from './app.component';

import { DataService } from './data.service';
import { ModalService } from './modal.service';
import { LOCALE_ID } from '@angular/core';

import { NgxMasonryModule } from 'ngx-masonry';
import { ModalComponent } from './modal/modal.component';

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent
  ],
  imports: [
    // Angular modules
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Material modules
    MaterialModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatKeyboardModule,
    MatChipsModule,
    MatTableModule,

    //Masonary
    NgxMasonryModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'nl-BE' },
    DataService,
    ModalService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }