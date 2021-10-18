import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxWavesurferModule} from 'ngx-wavesurfer';
import {NgxWavesurferRxjsModule} from 'ngx-wavesurfer-rxjs';

import { AppComponent } from './app.component';
import { CodeComponent } from './code/code.component';

@NgModule({
  declarations: [
    AppComponent,
    CodeComponent
  ],
  imports: [
    BrowserModule,
    NgxWavesurferModule,
    NgxWavesurferRxjsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
