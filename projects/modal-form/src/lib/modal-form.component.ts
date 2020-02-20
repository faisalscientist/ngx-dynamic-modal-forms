import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef
} from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "ngx-modal-form",
  templateUrl: "./modal-form.component.html",
  styles: []
})
export class ModalFormComponent implements OnInit {
  @Input() controls: any;
  @Output() next: EventEmitter<any> = new EventEmitter();

  constructor(private modalService: NgbModal) {}

  onNext(event: any) {
    this.next.emit(event);
  }

  openModal(content: any) {
    this.modalService.open(content, { centered: true });
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  ngOnInit() {
    this.controls = [
      {
        description: "Name",
        type: "text",
        label: "name",
        value: "",
        validators: ["required", "email"]
      },
      {
        description: "Number",
        type: "number",
        label: "number",
        value: ""
      }
    ];
    document.getElementById("showModal").click();
  }
}
