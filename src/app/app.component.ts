import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<h1>Hello {{name}}</h1>`,
})
export class AppComponent { name = 'Nicolas Mavroeidis Agularistas....' +
                            'Νίκο Μαυροειδή Αγγουρίστα....'; }
