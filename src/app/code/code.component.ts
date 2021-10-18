import { Component, OnInit } from '@angular/core';
import {EditorState, EditorView, basicSetup} from "@codemirror/basic-setup"
import {javascript} from "@codemirror/lang-javascript"

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {
  appmodcode: any;
  constructor() { }

  ngOnInit(): void {
    this.appmodcode = document.querySelector('#appmodulecode');
    let editor = new EditorView({
      state: EditorState.create({
        doc: `import { NgModule } from '@angular/core';
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
export class AppModule { }`,
extensions: [basicSetup, javascript()]
      }),
      parent: this.appmodcode
    })
  }

}
