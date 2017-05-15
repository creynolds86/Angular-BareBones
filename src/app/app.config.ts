import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppConfig {

  private config: Object;

  constructor(private http: Http) { }

  /**
   * Use to get the data found in the second file (config file)
   */
  public getConfig(key: any) {
    return this.config[ key ];
  }

  /**
   * This method:
   *   a) Loads "env.json" to get the current working environment (e.g.: 'production', 'development')
   *   b) Loads "config.[env].json" to get all env's variables (e.g.: 'config.development.json')
   */
  public load() {
    return new Promise((resolve, reject) => {
      this.http.get('/src/app/config.json').map(res => res.json()).catch((error: any): any => {
        console.log('Configuration file "config.json" could not be read', error);
        resolve(true);
        return Observable.throw(error.json().error || 'Server error');
      }).subscribe((res: Response) => {
        this.config = res;
        resolve(true);
      });
    });
  }
}
