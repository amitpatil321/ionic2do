import { Component } from '@angular/core';
import { ModalController, NavController } from 'ionic-angular';
import { AddItemPage } from '../add-item-page/add-item-page'
import { ItemDetailPage } from '../item-detail-page/item-detail-page';
import { Data } from '../../providers/data';
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  public items = [];
  
  // fetch list of todos on first call  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public dataService: Data) {
     
    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = JSON.parse(todos); 
      }
    });
 	
  }
  
  // Show add todo modal 
  addItem(){
 
    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
     this.dataService.getData().then((todos) => {
       this.items = JSON.parse(todos);
     });  
    });
 
    addModal.present();
 
  }
 
  // save item to todos list
  // @params item:object => list  
  saveItem(item){
    if(item === null){
      this.items.push(item);
      this.dataService.save(this.items);
    }
  }
   
  // Show todo description 
  // @params item:object => list   
  viewItem(item){
    this.navCtrl.push(ItemDetailPage, {
      item: item
    });
  }

  // Mark todo as done
  // @params itemid:number => list index number
  markDone(itemid:number){
   	this.items[itemid].isDone = true;
    this.dataService.save(this.items);
  }  

  // Remove todo
  // @params index:number => list index number  
  removeTodo(index:number){
    this.items.splice(index, 1);
    this.dataService.save(this.items);
  }

  // Mark todo as undone
  // @params itemid:number => list index number  
  markUndone(itemid:number){
    this.items[itemid].isDone = false;
    this.dataService.save(this.items);    
  }
 
}