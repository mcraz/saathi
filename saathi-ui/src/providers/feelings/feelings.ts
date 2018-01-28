import { Injectable } from '@angular/core';

import { Feeling } from '../../models/feeling';
import { Api } from '../api/api';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Feelings {

  constructor(public api: Api) { }

  query(params?: any) {
    return this.api
        .get('feelings')
        .toPromise()
        .then((resources) => resources.map((r) => new Feeling(r)));
  }

  add(item: Feeling) {
    return this.api
      .post('feelings', item)
      .toPromise();
  }

}
