import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators
} from "@angular/forms";

@Component({
  selector: "ngx-dynamic-form",
  templateUrl: "./dynamic-form.component.html",
  styleUrls: ["./dynamic-form.component.css"]
})
export class DynamicFormComponent implements OnInit {
  @Input() controls: any;
  @Output() next: EventEmitter<any> = new EventEmitter();
  @Input() spinner: boolean = false;
  formGroup: FormGroup;

  constructor(
    private modalService: NgbModal,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    let group = {};
    this.controls.forEach((control: any) => {
      let validators = null;
      if (control.validators !== null && control.validators !== undefined) {
        validators = control.validators.map((validator: string) => {
          return Validators[validator];
        });
      }
      group[control.label] = new FormControl(control.value, validators);
    });
    this.formGroup = this.formBuilder.group(group);
    console.log(this.formGroup);
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  submitForm() {
    console.log(this.formGroup);
    // this.spinner = true;
    const returnData = [];
    Object.keys(this.formGroup.controls).forEach(control => {
      var controlValue = {};
      controlValue[control] = this.formGroup.controls[control].value;
      returnData.unshift(controlValue);
    });
    this.next.emit(returnData);
  }
}
