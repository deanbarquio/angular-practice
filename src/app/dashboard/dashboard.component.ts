import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableDashboardComponent } from '../components/table/table.dashboard.component';
import { DashboardService, RandomUser } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, TableDashboardComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  users: RandomUser[] = [];

  constructor(private dashboardService: DashboardService) {}

  ngOnInit() {
    this.dashboardService.getRandomUsers().subscribe({
      next: (data) => (this.users = data.results),
      error: (err) => console.error(err),
  
      
  // users = [
  //   { 
  //     id: 1,
  //     name: 'John Doe', 
  //     email: 'john.doe@example.com',
  //     role: 'Admin',
  //     status: 'Active',
  //     joinDate: '2023-01-15'
  //   },
  //   { 
  //     id: 2,
  //     name: 'Jane Smith', 
  //     email: 'jane.smith@example.com',
  //     role: 'User',
  //     status: 'Active',
  //     joinDate: '2023-02-20'
  //   },
  //   { 
  //     id: 3,
  //     name: 'Alice Johnson', 
  //     email: 'alice.johnson@example.com',
  //     role: 'Manager',
  //     status: 'Active',
  //     joinDate: '2023-03-10'
  //   },
  //   { 
  //     id: 4,
  //     name: 'Bob Wilson', 
  //     email: 'bob.wilson@example.com',
  //     role: 'User',
  //     status: 'Inactive',
  //     joinDate: '2023-01-30'
  //   },
  //   { 
  //     id: 5,
  //     name: 'Carol Davis', 
  //     email: 'carol.davis@example.com',
  //     role: 'User',
  //     status: 'Active',
  //     joinDate: '2023-04-05'
  //   },
  //   { 
  //     id: 6,
  //     name: 'David Brown', 
  //     email: 'david.brown@example.com',
  //     role: 'Manager',
  //     status: 'Active',
  //     joinDate: '2023-02-28'
  //   },
  //   { 
  //     id: 7,
  //     name: 'Eva Garcia', 
  //     email: 'eva.garcia@example.com',
  //     role: 'User',
  //     status: 'Active',
  //     joinDate: '2023-05-12'
  //   },
  //   { 
  //     id: 8,
  //     name: 'Frank Miller', 
  //     email: 'frank.miller@example.com',
  //     role: 'Admin',
  //     status: 'Inactive',
  //     joinDate: '2023-01-08'
  //   }
  // ];
    });
  }
}
