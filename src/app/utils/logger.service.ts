import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
    private logs: Array<String>;
    constructor(){
        this.logs = [];
    }
    log(logMessage: String) {
      let now = new Date();
      logMessage=now.toString()+':'+logMessage;
      this.logs.push(logMessage);
      console.log(logMessage);
    }
    clearLog(){
      let now = new Date();
      this.logs = [];
      console.log(now.toString()+':class Logger:this.logs[] cleared');
    }
    printAll(){
      console.log(this.logs);
    }
}