import { Storage } from '@ionic/storage';
import {Injectable} from '@angular/core';
 
@Injectable()
export class Data {
  public items = [];
  constructor(public storage: Storage){
 
  }
  
  getData() {
    //this.storage.clear();
    return this.storage.get('todos');  
  }
 
  // save data to localstorage
  // @params data:object => list of todos
  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
    console.log(" Just saved : "+this.storage.get('todos'));
  }

}