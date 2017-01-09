import { Component } from '@angular/core';
import { NavController, ViewController } from 'ionic-angular';
import { Data } from '../../providers/data';

@Component({
  selector: 'page-add-item-page',
  templateUrl: 'add-item-page.html'
})
export class AddItemPage {
 
  title;
  description;
  tcount;
  
  public items = [];

  constructor(public navCtrl: NavController, public view: ViewController, public dataService : Data) {
  }
  
   
  saveItem(){
    console.log("clicked");
    let newItem = {
      title      : this.title,
      description: this.description,
      created    : new Date(),
      isDone     : false 
    };

    // this.dataService.addItem(newItem);
    // this.view.dismiss(newItem); 

    // Fetch existing list and append new item to it
    this.dataService.getData().then((todos) => {
      if(todos){
        this.items = JSON.parse(todos);
      }
      this.items.push(newItem);
      this.dataService.save(this.items); 
    });
    this.view.dismiss(newItem);    
  }
 
  close(){
    this.view.dismiss();
  }
 
}