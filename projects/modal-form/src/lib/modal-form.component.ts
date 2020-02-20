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
  @Input()
  set open(_open: boolean) {
    if (_open) {
      document.getElementById("showModal").click();
    } else {
      this.closeModal();
    }
    this._open = _open;
  }
  get open(): boolean {
    return this._open;
  }
  @Output() next: EventEmitter<any> = new EventEmitter();

  _open: boolean = false;

  constructor(private modalService: NgbModal) {}

  onNext(event: any) {
    this.next.emit(event);
  }

  openModal(content: any) {
    if (this.controls !== null && this.controls !== undefined) {
      this.modalService.open(content, { centered: true });
    }
  }

  closeModal() {
    this.modalService.dismissAll();
  }

  ngOnInit() {}
}
