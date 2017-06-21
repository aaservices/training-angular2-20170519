import {Component} from "@angular/core";

@Component({
    selector: "template-driven-form",
    templateUrl: './form.html'
})
export class TemplateDrivenFormComponent {

    user: Object = {
        firstName: 'John',
        password:  'test'
    };

}
