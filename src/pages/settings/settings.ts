import { Config } from './../../providers/config';
import { Settings } from './../../providers/settings';
import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';

/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {
  public seconds = Config.DEFAULT_CONTINUE_MODE_TIMEOUT;

  constructor(
    public viewCtrl: ViewController,
    public navCtrl: NavController,
    public settings: Settings,
  ) {
  }

  ionViewDidLoad() {
    this.settings.getContinueModeTimeout().then(seconds => {
      this.seconds = seconds;
    })
  }

  dismiss() {
    this.settings.setContinueModeTimeout(this.seconds);
    this.viewCtrl.dismiss();
  }

}
