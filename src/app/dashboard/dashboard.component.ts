import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDashboardComponent } from '../components/table/table.dashboard.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TableDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  users = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
    { name: 'Alice Johnson', email: 'alice.johnson@example.com' },
  ];
}
