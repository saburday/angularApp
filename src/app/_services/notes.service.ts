import { Injectable } from '@angular/core';
import { Notes } from '../notes';

@Injectable()
export class NotesService {

  constructor() { }

  getNotes(){
    return Notes;
  }

  addNote( note ){
    Notes.push( note );
  }

  changeColor( i, newColor ){
    Notes[i].color = newColor;
  }

  removeNote( i ){
    Notes.splice( i, 1 );
  }

}
