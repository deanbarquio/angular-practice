import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.dashboard.html',
  styleUrls: ['./table.dashboard.css'],
})
export class TableDashboardComponent {
  @Input() users: any[] = [];
}
