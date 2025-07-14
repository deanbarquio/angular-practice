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
  
  selectedUser: any = null;
  showModal = false;

  openUserModal(user: any) {
    this.selectedUser = user;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedUser = null;
  }

  onModalClick(event: Event) {
    // Close modal if clicking on the backdrop
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}
