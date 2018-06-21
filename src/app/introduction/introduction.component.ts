import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'dynamo-introduction',
  template: `
    <form [formGroup]="form" (submit)="submit()">
      <div class="modal-header">
        <h4 class="modal-title">Welcome!</h4>
      </div>

      <div class="modal-body">
        <div class="form-group">
          <label for="name">To get started, please enter your name</label>
          <input id="name" class="form-control" type="text" formControlName="name" />
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-success" type="submit" [disabled]="!form.valid">Go!</button>
      </div>
    </form>
  `
})
export class IntroductionComponent implements OnInit {
  public form: FormGroup;
  @Output() public output: EventEmitter<string> = new EventEmitter<string>();

  constructor (
    private formBuilder: FormBuilder,
    private ngbActiveModal: NgbActiveModal
  ) {}

  public ngOnInit (): void {
    this.form = this.formBuilder.group({
      name: [
        null,
        Validators.required
      ]
    });
  }

  public submit (): void {
    this.output.emit(this.form.controls.name.value);

    this.ngbActiveModal.close();
  }
}
