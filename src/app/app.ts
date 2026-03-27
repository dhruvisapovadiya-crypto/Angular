import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {

  filter: string = 'all';
  tasks: any[] = [];
  showForm: boolean = false;
  isEdit: boolean = false;
  editIndex: number = -1;
  alertMessage: string = '';
  showAlertBox: boolean = false;

  showAlert(message: string) {
    this.alertMessage = message;
    this.showAlertBox = true;

    setTimeout(() => {
      this.showAlertBox = false;
    }, 2000);
  }

  formatStatus(status: string): string {
    switch (status) {
      case 'todo': return 'To Do';
      case 'development': return 'Development';
      case 'testing': return 'Testing';
      case 'merging': return 'Merging';
      case 'completed': return 'Completed';
      default: return status;
    }
  }

  searchText: string = '';
  formData: any = {
    title: '',
    assignee:'',
    reporter:'',
    description: '',
    estimationTime: '',
    date: '',
    status: 'all'
  };

  openAddForm() {
    this.showForm = true;
    this.isEdit = false;
    this.formData = {
      title: '',
      assignee: '',
      reporter: '',
      dueDate: '',
      estimationTime: '',
      description: '',
      priority: '',
      status: 'all'
    };
  }

  closeForm() {
    this.showForm = false;
  }

  saveData() {
    if (!this.formData.title || !this.formData.description) {
      alert("Please fill all fields");
      return;
    }
    if (this.isEdit) {
      this.tasks[this.editIndex] = { ...this.formData };
    }
    else {
      this.tasks.push({ ...this.formData });
    }
    this.closeForm();
  }

  openEditForm(task: any, index: number) {
    this.showForm = true;
    this.isEdit = true;
    this.editIndex = index;
    this.formData = { ...task };
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  showView: boolean = false;
  selectedTask: any = null;

  openView(task: any) {
    this.selectedTask = task;
    this.showView = true;
  }

  closeView() {
    this.showView = false;
  }

changeStatus(task: any, newStatus: string) {

  const oldStatus = task.status;
  task.status = newStatus;

  this.filter = newStatus;
  this.showAlert(
    ` Status changed from ${this.formatStatus(oldStatus)} → ${this.formatStatus(newStatus)}`
  );
}


getFilteredTasks() {
  return this.tasks.filter(task => {

    const matchesStatus =
      this.filter === 'all' || task.status === this.filter;


    const matchesSearch =
      task.title.toLowerCase().includes(this.searchText.toLowerCase());

    return matchesStatus && matchesSearch;
  });
}

}