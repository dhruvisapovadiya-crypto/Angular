import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlights',
  imports: [],
  templateUrl: './highlights.html',
  styleUrl: './highlights.css',
})
export class Highlights {
  @Input() data:any;
}
