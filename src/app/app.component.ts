import { AfterViewInit, Component } from '@angular/core';
import { NgxWavesurferService } from 'ngx-wavesurfer';
import {
  NgxWavesurferRxjsService,
  WaveSurferRxJSEventObservables,
} from 'ngx-wavesurfer-rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  waveSurfer: any = null;
  waveSurferRxJS: WaveSurferRxJSEventObservables = {};

  constructor(
    public waveSurferService: NgxWavesurferService,
    public waveSurferRxJSService: NgxWavesurferRxjsService
  ) {}

  ngAfterViewInit(): void {
    this.waveSurfer = this.waveSurferService.create({
      container: '#basetemplate',
    });

    this.waveSurfer.load(
      '//www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3'
    );

    this.waveSurfer.on('ready', () => {
      this.waveSurferRxJS = this.waveSurferRxJSService.getRxJSWave(
        this.waveSurfer
      );
    });
  }

  stop() {
    this.waveSurfer.stop();
    this.waveSurferRxJSService.stop();
  }

  ngOnDestroy(): void {
    this.waveSurferRxJSService.unsubscribeAll();
  }
}
