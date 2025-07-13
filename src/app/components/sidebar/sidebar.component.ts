import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarButtonsComponent } from '../buttons/sidebar-buttons/sidebar_buttons.component';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, SidebarButtonsComponent],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {}
