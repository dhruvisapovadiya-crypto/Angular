import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  @Input() user: any;
  @Output() deleteCard = new EventEmitter(); 

  showBio = true;

  toggleBio() {
    this.showBio = !this.showBio;
  }

  onDelete() {
    this.deleteCard.emit();
  }
}
