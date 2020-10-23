import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LoggerService } from './services/logger.service';

const log = new LoggerService('AppComponent');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (environment.production) {
      LoggerService.enableProduciton();
    }
    log.info('Initialized AppComponent');
  }
}