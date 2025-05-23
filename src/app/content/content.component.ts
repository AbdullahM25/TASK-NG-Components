import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-content',
  imports: [HomeComponent],
  standalone: true,
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {}
