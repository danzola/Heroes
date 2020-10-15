import { Component, OnInit } from '@angular/core';
import { Dependency } from 'src/app/models/Dependency';
import { DependencyService } from 'src/app/dependency.service';

@Component({
  selector: 'app-dependencies',
  templateUrl: './dependencies.component.html',
  styleUrls: ['./dependencies.component.css']
})
export class DependenciesComponent implements OnInit {
  dependencies: Dependency[] = [];

  constructor(private dependencyService: DependencyService) { }

  ngOnInit(): void {
    this.fetchDependencies();
  }

  fetchDependencies() {
    this.dependencyService.getAllDependencies().subscribe((dep) => {
      this.dependencies = dep;
    });
  }

}
