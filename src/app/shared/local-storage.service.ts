import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorage {
	_ID = 'kanban';
	id = 0;

  constructor() { }

  get(){
  	this.kanbanItems = JSON.parse(localStorage.getItem(this._ID) || '[]');
  	return this.kanbanItems;
  };

  delete(kanbanItem){
  	let index = this.kanbanItems.indexOf(kanbanItem);
  	if(index >=0){
  	this.kanbanItems.splice(index,1);
  	this.update(this.kanbanItems);
  	}
  };

  add(kanbanItem){
  	kanbanItem['id'] = this.id++;
  	kanbanItem['isComplete'] = false;
  	this.kanbanItems.push(kanbanItem);
  	this.update(this.kanbanItems)
  }

  update(kanbanItems){
  	localStorage.setItem(this._ID, JSON.stringify(kanbanItems));
  }

  complete(kanbanItem){
    let index = this.kanbanItems.indexOf(kanbanItem);
    this.kanbanItems[index] = kanbanItem;
    this.update(this.kanbanItems);
  }

  total(){
    return this.kanbanItems.length;
   }



  getComplete(element){
    return (element.isComplete);
  }

	kanbanItems = [

	];
}
