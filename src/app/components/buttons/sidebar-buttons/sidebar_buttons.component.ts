import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-button',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar_buttons.component.html',
  styleUrls: ['./sidebar_buttons.component.css'],
})
export class SidebarButtonsComponent {
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() routerLink: string = '';
}
