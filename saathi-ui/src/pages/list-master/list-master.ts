import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Feeling } from '../../models/feeling';
import { Feelings } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Feeling[] = [];

  constructor(
    public navCtrl: NavController, 
    public modalCtrl: ModalController,
    public items: Feelings
  ) {}

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
    this.loadFeelings();
  }

  loadFeelings() {
    this.items.query().then(items => this.currentItems = items);
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items
          .add(item)
          .then(_ => this.loadFeelings());
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    console.log('no deletes for now')
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Feeling) {
    this.navCtrl.push('ItemDetailPage', { item });
  }
}