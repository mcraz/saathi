import { Injectable } from '@angular/core';

import { Feeling } from '../../models/feeling';
import { Comment } from '../../models/comment';
import { Api } from '../api/api';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class Comments {

  constructor(public api: Api) { }

  query(feeling: Feeling) {
    return this.api
        .get(`feelings/${feeling.id}/comments`)
        .toPromise()
        .then((resources) => resources.map((r) => new Comment(r)));
  }

  add(feeling: Feeling, comment: { body: string }) {
    return this.api
        .post(`feelings/${feeling.id}/comments`, comment)
        .toPromise();
  }

}
