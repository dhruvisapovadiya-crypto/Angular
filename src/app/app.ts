import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Jira {
  title: string;
  description: string;
  EstimationTime: string;
  Status: string;
  date: Date;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class AppComponent {


  taskInput: string = '';
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
  tasks: { text: string; completed: boolean }[] = [];

  filter: string = 'all';
  saveData() {
    if (this.formData.title && this.formData.EstimationTime) {

      this.tasks.push({
        text: this.formData.title,
        completed: this.formData.Status === 'Completd'
      });
      this.taskInput = '';
      this.showForm = false;
    }
  }


  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  getFilteredTasks() {
    if (this.filter === 'active') {
      return this.tasks.filter(t => !t.completed);
    }
    if (this.filter === 'completed') {
      return this.tasks.filter(t => t.completed);
    }
    return this.tasks;
  }


}




