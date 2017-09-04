import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AddNoteComponent } from './add-note/add-note.component';
import { ColorEditorComponent } from './color-editor/color-editor.component';
import { HeaderComponent } from './header/header.component';
import { NoteComponent } from './note/note.component';
import { NotesComponent } from './notes/notes.component';

@NgModule({
  declarations: [
    AppComponent,
    AddNoteComponent,
    ColorEditorComponent,
    HeaderComponent,
    NoteComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
