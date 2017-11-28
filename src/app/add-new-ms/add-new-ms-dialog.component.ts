import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'frees-add-new-ms-dialog',
  templateUrl: './add-new-ms-dialog.component.html'
})
export class AddNewMsDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
