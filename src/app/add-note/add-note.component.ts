import { Component, OnInit } from '@angular/core';
import { NotesService } from '../_services/notes.service';

@Component({
  selector: 'add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.sass'],
  providers: [NotesService]
})
export class AddNoteComponent implements OnInit {

defaultColor = 'white';

constructor(
  private ns: NotesService
) { }

ngOnInit() {
  console.log( this.defaultColor )
}

addNote( text ){
  let note = {
    text: text.value,
    color: this.defaultColor
  }
  this.ns.addNote(note);
  text.value = '';
}

chooseColor( newColor ){
  this.defaultColor = newColor;
}

}
