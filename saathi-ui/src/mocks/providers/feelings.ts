import { Injectable } from '@angular/core';

import { Feeling } from '../../models/feeling';

@Injectable()
export class Feelings {
  items: Feeling[] = [];

  defaultItem: any = {
    "body": "Burt Bear (default)",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };


  constructor() {
    let items = [
      {
        "body": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis illo eos qui itaque recusandae consectetur in dolore accusantium magni, nulla quia placeat, dolor sunt dolorem commodi ipsa sint eius velit.",
        "profilePic": "assets/img/speakers/bear.jpg",
        "tags": ['crush', 'shy']
      },
      {
        "body": "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
        "profilePic": "assets/img/speakers/cheetah.jpg",
        "about": "Charlie is a Cheetah."
      },
      {
        "body": "Donald Duck",
        "profilePic": "assets/img/speakers/duck.jpg",
        "about": "Donald is a Duck."
      },
      {
        "body": "Eva Eagle",
        "profilePic": "assets/img/speakers/eagle.jpg",
        "about": "Eva is an Eagle."
      },
      {
        "body": "Ellie Elephant",
        "profilePic": "assets/img/speakers/elephant.jpg",
        "about": "Ellie is an Elephant."
      },
      {
        "body": "Molly Mouse",
        "profilePic": "assets/img/speakers/mouse.jpg",
        "about": "Molly is a Mouse."
      },
      {
        "body": "Paul Puppy",
        "profilePic": "assets/img/speakers/puppy.jpg",
        "about": "Paul is a Puppy."
      }
    ];

    for (let item of items) {
      this.items.push(new Feeling(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Feeling) {
    this.items.push(item);
  }

  delete(item: Feeling) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
