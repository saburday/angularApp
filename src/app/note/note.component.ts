import { Component, OnInit, Input  } from '@angular/core';
import { NotesService } from '../_services/notes.service';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.sass'],
  providers: [NotesService]
})
export class NoteComponent implements OnInit {

@Input() note;
 @Input() i;

 constructor(
   private ns: NotesService
 ) { }

 ngOnInit() {
 }

 changeColor( i, newColor ){
   this.ns.changeColor( i, newColor );
 }

 removeNote( i ){
   this.ns.removeNote( i );
 }

}
