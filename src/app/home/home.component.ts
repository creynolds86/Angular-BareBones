import { Component, OnInit } from '@angular/core';

import { DataService } from '../shared/services/data.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  public projectName: string;

  constructor(private dataService: DataService) { }

  public ngOnInit() {
    this.projectName = this.dataService.getProjectName();
  }
}
