// import { CommonModule } from '@angular/common';
// import { Component } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router';


// interface Jira {
//   title: string;
//   description: string;
//   EstimationTime: string;
//   date: Date;
// }

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [FormsModule, CommonModule, RouterModule],
//   templateUrl: './app.html',
//   styleUrls: ['./app.css']
// })

// export class AppComponent {
//   tasks: any[] = [];
//   filter: string = 'all';
//   taskInput: string = '';
//   showForm: any;
//   editIndex: number | null = null;
//   formData: Jira = {
//     title: '',
//     description: '',
//     EstimationTime: '',
//     date: new Date(),
//   };
//   isEdit!: boolean;

//   openAddForm() {
//     this.showForm = true;
//     this.isEdit = false;
//     this.formData = {
//       title: '',
//       description: '',
//       EstimationTime: '',
//       date: new Date(),

//     };
//   }

//   saveData() {
//     if (!this.formData.title) return;

//     if (this.isEdit && this.editIndex !== null) {

//       this.tasks[this.editIndex] = {
//         ...this.formData,
//         completed: this.tasks[this.editIndex].completed
//       };
//     } else {

//       this.tasks.push({
//         ...this.formData,
//         completed: false
//       });
//     }

//     this.closeForm();
//   }

//   closeForm() {
//     this.showForm = false;
//     this.isEdit = false;
//     this.editIndex = null;
//     this.formData = {
//       title: '',
//       description: '',
//       EstimationTime: '',
//       date: new Date(),
//     };
//   }

//   deleteTask(index: number) {
//     this.tasks.splice(index, 1);
//   }

//   openEditForm(task: any, index: number): void {
//     this.showForm = true;
//     this.editIndex = index;
//     this.isEdit = true;
//     this.formData = { ...task };
//   }


//   getFilteredTasks() {
//     if (this.filter === 'all') {
//       return this.tasks.filter(t => !t.completed);
//     }


//     if (this.filter === 'completed') {
//       return this.tasks.filter(t => t.completed);
//     }
//     return this.tasks;
//   }


// }




import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Jira {
  title: string;
  description: string;
  estimationTime: string;
  date: string;
  status: 'todo' | 'development' | 'testing' | 'merging' | 'completed';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class AppComponent {
  tasks: Jira[] = [];
  filter: string = 'todo'; 
  showForm: boolean = false;
  isEdit: boolean = false;
  editIndex: number | null = null;

  formData: Jira = this.getEmptyForm();

  getEmptyForm(): Jira {
    return {
      title: '',
      description: '',
      estimationTime: '',
      date: '',
      status: 'todo' 
    };
  }

  openAddForm() {
    this.formData = this.getEmptyForm();
    this.isEdit = false;
    this.showForm = true;
  }

  saveData() {
    if (!this.formData.title) return;

    if (this.isEdit && this.editIndex !== null) {

      this.tasks[this.editIndex] = { ...this.formData };
    } else {

      this.tasks.push({ ...this.formData });
    }
    this.closeForm();
  }

  closeForm() {
    this.showForm = false;
    this.editIndex = null;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  openEditForm(task: Jira, index: number) {
    this.formData = { ...task };
    this.editIndex = index;
    this.isEdit = true;
    this.showForm = true;
  }


  getFilteredTasks() {
    return this.tasks.filter(task => task.status === this.filter);
  }

  changeStatus(task: Jira, newStatus: any) {
    task.status = newStatus;
  }
}
