import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
    private logs: Array<String>;
    constructor(){
        this.logs = [];
    }
    log(logMessage: String) {
      this.logs.push(logMessage);
      console.log(logMessage);
    }
    clearLog(){
      this.logs = [];
      console.log('class Logger:this.logs[] cleared');
    }
    printAll(){
      console.log(this.logs);
    }
}