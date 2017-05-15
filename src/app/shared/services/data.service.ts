import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { AppConfig } from '../../app.config';

@Injectable()
export class DataService {

  private api: any;
  private guild: any;

  constructor(
    private config: AppConfig,
    private httpService: Http
  ) {
    this.api = this.config.getConfig('apis');
    this.guild = this.config.getConfig('guild');
  }

  public getGuildReports(): Observable<JSON> {

    return this.httpService.get(
      `${this.api.warcraftLogs.endpoint}` +
      `/reports/guild` +
      `/${this.guild.name}` +
      `/${this.guild.realm}` +
      `/${this.guild.region}` +
      `?api_key=${this.api.warcraftLogs.key}`
    )
    .map(res => res.json());
  }

  public getReport(reportId: string) {
    return this.httpService.get(
      `${this.api.warcraftLogs.endpoint}` +
      `/report/fights` +
      `/${this.guild.name}` +
      `/${this.guild.realm}` +
      `/${this.guild.region}` +
      `?api_key=${this.api.warcraftLogs.key}`
    )
    .map(res => res.json());
  }

  public getCharacterParses(characterName: string) {
    return this.httpService.get(
      `${this.api.warcraftLogs.endpoint}` +
      `/parses/character` +
      `/${characterName}` +
      `/${this.guild.realm}` +
      `/${this.guild.region}` +
      `?api_key=${this.api.warcraftLogs.key}`
    )
    .map(res => res.json());
  }
}
