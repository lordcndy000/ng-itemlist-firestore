import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../services/item.service';
import { Item } from '../../models/item';
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  items: Item[];
  editState: boolean = false;
  itemToEdit: Item;

  constructor(private itemSrvc: ItemService) {}

  ngOnInit() {
    this.itemSrvc.getItems().subscribe(items => {
      this.items = items;
    });
  }
  deleteItem(e, item: Item) {
    this.clearState();
    this.itemSrvc.deleteItem(item);
  }

  editItem(e, item: Item) {
    this.editState = true;
    this.itemToEdit = item;
  }
  updateItem(item: Item) {
    this.itemSrvc.updateItem(item);
    this.clearState();
  }

  clearState() {
    this.editState = false;
    this.itemToEdit = null;
  }
}
