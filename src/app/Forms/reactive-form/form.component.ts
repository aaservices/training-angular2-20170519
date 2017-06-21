import {Component, OnInit} from "@angular/core";
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


export class ReactiveFormComponent implements OnInit{
    myForm: FormGroup; // <--- heroForm is of type FormGroup



    constructor(private formBuilder: FormBuilder) { // <--- inject FormBuilder
        this.createForm();


    }
    ngOnInit(): void {
        this.myForm.patchValue({
            name: 'Leandros',
            address: { //child FormGroup
                street: 'Oxford Street',
                city: 'London',
                zip: 'BH911D'
            }
        });

        const formControl = this.myForm
        formControl.valueChanges.forEach(
            (value: string) => console.log('t',value)
        );
    }

    createForm() {
        this.myForm = this.formBuilder.group({ //parent FormGroup
            name: ['', [Validators.minLength(2)] ],
            address: this.formBuilder.group({ //child FormGroup
                street: '',
                city: '',
                zip: ''
            })
        });
    }

    reset(){
        this.myForm.reset({
            name:'test',
        })
    }
}




