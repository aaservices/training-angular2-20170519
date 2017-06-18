import { Component } from '@angular/core';

import { Logger } from './utils/logger.service';

@Component({
    selector: 'my-app',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent { 
    private name = ''; 
    constructor(private logger: Logger) {
      this.name = 'Νικόλαε Μαυροειδή';
      logger.log('AppComponent:'+this.name);
    }
}
