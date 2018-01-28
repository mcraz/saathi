import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ToastController } from 'ionic-angular';

import { Feelings, Comments } from '../../providers/providers';
import { Feeling } from '../../models/feeling';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html'
})
export class ItemDetailPage {
  item: any;
  comments: any[] = [];

  constructor(
    private feelings: Feelings,
    private commentService: Comments,
    private navParams: NavParams, 
    public navCtrl: NavController, 
    private modalCtrl: ModalController, 
    private toastCtrl: ToastController
  ) {
    
    this.loadItem();
    this.loadComments(this.item);
  }

  loadItem() {
    if (!this.navParams.get('item')) {
      this.navCtrl.setRoot('ListMasterPage')
    }
    this.item = this.navParams.get('item');
  }

  loadComments(feeling: Feeling) {
    this.commentService.query(feeling).then(comments => this.comments = comments);
  }


  /**
   * Prompt the user to add a new item. This shows our CommentCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addComment() {
    let addModal = this.modalCtrl.create('CommentCreatePage');
    
    addModal.onDidDismiss(comment => {
      if (comment) {
        this.commentService
          .add(this.item, comment)
          .then(onAdded => this.loadComments(this.item));
      }
    })
    
    addModal.present();
  }

  onNeedsHelp() {
    this.toastCtrl.create({
      message: "Help request is under process. Thank You",
      showCloseButton: true
    }).present();
  }

}
