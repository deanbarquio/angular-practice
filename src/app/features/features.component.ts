import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Feature, FeatureService } from './features.service';
import { FeaturesTableComponent } from './features-table/features-table.component';
import { TableFeaturesComponent } from '../components/table-features/table-features.components';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule, TableFeaturesComponent],
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  features: Feature[] = [];

  constructor(private featureService: FeatureService) {}

  ngOnInit() {
    this.featureService.getFeatures().subscribe({
      next: (data) => (this.features = data),
      error: (err) => console.error(err),
    });
  }
}
