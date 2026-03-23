import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from "../app";

interface Jira {
  title: string;
  description: string;
  EstimationTime: string;
  Status: string;
  date: Date;
}

@Component({
  selector: 'app-form',
  imports: [FormsModule, AppComponent],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  showForm: any;
  formData: Jira = {
    title: '',
    description: '',
    EstimationTime: '',
    Status: '',
    date: new Date(),
  };
  isEdit!: boolean;

  openAddForm() {
    this.showForm = true;
    this.isEdit = false;
    this.formData = {
      title: '',
      description: '',
      EstimationTime: '',
      Status: '',
      date: new Date(),

    };
  }
}
