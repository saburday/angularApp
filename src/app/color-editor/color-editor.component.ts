import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'color-editor',
  templateUrl: './color-editor.component.html',
  styleUrls: ['./color-editor.component.sass']
})
export class ColorEditorComponent implements OnInit {

@Input() color;
@Output() changingColor = new EventEmitter();

colors = [ 'white', 'red', 'blue', 'green' ];

constructor() { }

ngOnInit() {
}

changeColor( newColor ){
  this.color = newColor;
  this.changingColor.emit( newColor );
}

}
