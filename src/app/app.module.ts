import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AddItemPage } from '../pages/add-item-page/add-item-page';
import { ItemDetailPage } from '../pages/item-detail-page/item-detail-page';
import { Storage } from '@ionic/storage';
import { Data } from '../providers/data';
import {MomentModule} from 'angular2-moment';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    MomentModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AddItemPage,
    ItemDetailPage
  ],
  providers: [Storage, Data]
})
export class AppModule {}
