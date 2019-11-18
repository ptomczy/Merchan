import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Suppliers',
      url: '/suppliers',
      icon: 'transgender'
    },
    {
      title: 'Rooms',
      url: '/rooms',
      icon: 'home'
    },
    {
      title: 'Scheduler',
      url: '/scheduler',
      icon: 'calendar'
    },
    {
      title: 'Other',
      url: '/other',
      icon: 'help'
    },
    {
      title: "Last",
      url: '/last',
      icon: 'home'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
