import { Component , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'search-form',
  templateUrl: './search-form.component.html'
})
export class SearchFormComponent {
  @Output() changed = new EventEmitter<String>();
  private term: String;

  constructor(){
    this.clear();
  }
  clear(){
    this.term = '';
    this.changed.emit(this.term);
  }
  filterChanged(event: Event){
    event.preventDefault();
    this.changed.emit(this.term);
  }
}