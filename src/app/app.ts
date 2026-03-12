import { Component } from '@angular/core';
import { Profile } from "./profile/profile";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})


export class App {
  users = [
    {
      id: 1,
      name: 'Dhruvi',
      avatarUrl: "person1.jpg",
      role: 'Software Engineer',
      bio: 'Angular developer Who enjoys to develop web App',
      socialUrl:"https://www.facebook.com/",
    }
  ];

  addUser() {
    const newUser: any = {
      id: Date.now(),
      name: "abc",
      avatarUrl: "https://i.pravatar.cc/300",
      role: "Software Developer",
      bio: 'Angular developer Who enjoys to develop web App',
      socialUrl:"https://www.facebook.com/",
    };
    this.users.push(newUser);
  }

deleteUser(id: number) {
  for (let i = 0; i < this.users.length; i++) {
    if (this.users[i].id === id) {
      this.users.splice(i, 1);
      break; 
    }
  }
}
}