import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature } from '../features.service';

@Component({
  selector: 'app-features-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './features-table.component.html',
  styleUrls: ['./features-table.component.css'],
})
export class FeaturesTableComponent {
  @Input() features: Feature[] = [];
}
