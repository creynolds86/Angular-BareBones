import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

    constructor() { }

    public getProjectName() {
        return 'Angular Bare Bones';
    }
}
