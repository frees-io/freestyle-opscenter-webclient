import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'frees-add-new-ms',
  templateUrl: './add-new-ms.component.html',
  styleUrls: ['./add-new-ms.component.scss']
})
export class AddNewMsComponent implements OnInit {

  private newMsForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() { }

  private createForm() {
    this.newMsForm = this.fb.group({
      name: ['', Validators.required],
      node: ['', Validators.required]
    });
  }

  onSubmit() {
    console.log('Form submitted:');
    console.log(this.newMsForm.value);
  }

}
