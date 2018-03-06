import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';

import { AddNewMsDialogComponent } from './add-new-ms-dialog.component';

/* Set error state when invalid control is dirty, but not submitted.
 * The reason for this is that currently, in a reactive form, there is no way of
 * fully reset a form state. You can reset the model itself, which is what FormGroup
 * is able to control, but the submitted state is out of the bounds of it, hence
 * the control could be marked as erroneous when they are actually pristine.
 *
 * The default ErrorStateMatcher implementation considers an error cases fulfilling:
 * !!(control && control.invalid && (control.touched || (form && form.submitted)));
*/
export class CustomErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null): boolean {
    return !!(control && control.invalid && control.dirty);
  }
}


@Component({
  selector: 'frees-add-new-ms',
  templateUrl: './add-new-ms.component.html',
  styleUrls: ['./add-new-ms.component.scss']
})
export class AddNewMsComponent {

  public newMsForm: FormGroup;
  public matcher = new CustomErrorStateMatcher();

  constructor(private fb: FormBuilder, private dialog: MatDialog) {
    this.createForm();
  }

  private createForm() {
    this.newMsForm = this.fb.group({
      name: ['', Validators.required],
      node: ['', Validators.required]
    });
  }

  onSubmit() {
    this.openDialog();
  }

  openDialog() {
    const dialogRef = this.dialog.open(AddNewMsDialogComponent, {
      data: this.newMsForm.value
    });

    dialogRef.afterClosed().subscribe(_ => this.newMsForm.reset());
  }

}
