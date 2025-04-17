import { Component } from '@angular/core';
import { CircleButtonComponent } from '../../buttons/circle-button/circle-button.component';

@Component({
  selector: 'app-task-card',
  standalone: true,
  imports: [CircleButtonComponent],
  templateUrl: './task-card.component.html',
  styleUrl: './task-card.component.scss'
})
export class TaskCardComponent {

}
