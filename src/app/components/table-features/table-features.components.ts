import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table-features',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table-features.html',
  styleUrls: ['./table-features.css'],
})
export class TableFeaturesComponent {
  @Input() features: any[] = [];

  currentPage: number = 1;
  pageSize: number = 18;

  get paginatedFeatures() {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.features.slice(start, start + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.features.length / this.pageSize);
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  selectedFeature: any = null;
  showModal = false;

  openFeatureModal(feature: any) {
    this.selectedFeature = feature;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedFeature = null;

  }

  onModalClick(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeModal();
    }
  }
}