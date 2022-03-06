import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-component',
  templateUrl: './profile-component.component.html',
  styleUrls: ['./profile-component.component.scss'],
})
export class ProfileComponentComponent implements OnInit {
  displayName = '';
  firstName = '';
  lastName = '';
  aboutYourself = '';
  student = false;
  professional = false;
  role = '';
  experience = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit(submittedForm: any) {
    console.log(submittedForm.form.value, submittedForm);
    if (submittedForm.form.value['first-name'] != '')
      this.firstName = submittedForm.form.value['first-name'];
    if (submittedForm.form.value['last-name'] != '')
      this.lastName = submittedForm.form.value['last-name'];
    if (submittedForm.form.value['experience'] != '')
      this.firstName = submittedForm.form.value['experience'];
  }

  onClickProfessional() {
    this.professional = true;
  }
  onClickStudent() {
    this.professional = false;
  }
}
