import { IonicPage, NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ViewController } from 'ionic-angular/navigation/view-controller';

/**
 * Generated class for the CommentCreatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-comment-create',
  templateUrl: 'comment-create.html',
})
export class CommentCreatePage {
  isReadyToSave: boolean;

  item: any;

  form: FormGroup;

  constructor(
    formBuilder: FormBuilder,
    public navCtrl: NavController, 
    public viewCtrl: ViewController
  ) {
    this.form = formBuilder.group({
      body: ['', Validators.required],
    });

    // Watch the form for changes, and
    this.form.valueChanges.subscribe((v) => {
      this.isReadyToSave = this.form.valid;
    });
  }

  ionViewDidLoad() {

  }

  /**
   * The user cancelled, so we dismiss without sending data back.
   */
  cancel() {
    this.viewCtrl.dismiss();
  }

  /**
   * The user is done and wants to create the item, so return it
   * back to the presenter.
   */
  done() {
    if (!this.form.valid) { return; }
    this.viewCtrl.dismiss(this.form.value);
  }
}