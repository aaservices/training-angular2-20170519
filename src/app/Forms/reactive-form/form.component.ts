import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'reactive-form',
    templateUrl: './form.component.html'
})


//use of FormControl class only
// export class ReactiveFormComponent {
//     name = new FormControl();
// }

//use of FormGroup along with FormControl
// export class ReactiveFormComponent {
//     myForm = new FormGroup ({
//         name: new FormControl()
//     });
// }

//FormBuilder which takes a FormControls in a key value pair paradigm
// export class ReactiveFormComponent {
//     myForm: FormGroup; // <--- heroForm is of type FormGroup
//
//     constructor(private formBuilder: FormBuilder) { // <--- inject FormBuilder
//         this.createForm();
//     }
//
//     createForm() {
//         this.myForm = this.formBuilder.group({
//             name: '', // <--- the FormControl called "name"
//         });
//     }
// }


export class ReactiveFormComponent {
    myForm: FormGroup; // <--- heroForm is of type FormGroup

    constructor(private formBuilder: FormBuilder) { // <--- inject FormBuilder
        this.createForm();
    }

    createForm() {
        this.myForm = this.formBuilder.group({ //parent FormGroup
            name: [''],
            address: this.formBuilder.group({ //child FormGroup
                street: '',
                city: '',
                zip: ''
            })
        });
    }
}




