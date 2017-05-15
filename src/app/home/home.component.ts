import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import * as _ from 'lodash';

import { DataService } from '../shared/services/data.service';

@Component({
  moduleId: module.id,
  selector: 'home',
  templateUrl: 'home.component.html'
})
export class HomeComponent implements OnInit {

  public characterParses: any[];

  constructor(private dataService: DataService) {
    this.dataService.getCharacterParses('Scarybúsh').subscribe(
      data => {
        // console.log('data', data);
        this.characterParses = _.filter(data, (fights: any) => {
          console.log('fights', fights);
          return fights.difficulty === 4;
        });
      },
      error => console.log(error)
    );
  }

  public ngOnInit() { }
}
