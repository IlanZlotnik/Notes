import { Note } from './../note';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent {

  @Input('note') data: Note;
  @Output() onDelete = new EventEmitter()

  constructor() { }

  deleteNote(){
    this.onDelete.emit()
  }


  editNote(i: number){
    let content = this.data.content;
    let result = prompt("Edit Note", content);
    if (result !== null && result !== ""){
      this.data.content = result;
    }
  }

}
