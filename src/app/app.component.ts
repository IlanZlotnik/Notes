import { Component } from '@angular/core';
import { Note } from 'src/app/note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  noteList: Note[] = [
    {content: "note one", createDate: Date().toString() }
  ];

  addNote(note){
    let value = note.value;
    note.value = "";
    this.noteList.push(
      {
        content: value,
        createDate:Date().toString()
      });  }

  deleteNote(i: number){
    this.noteList.splice(i, 1);
  }

  editNote(i: number){
    let content = this.noteList[i].content;
    let result = prompt("Edit Note", content);
    if (result !== null && result !== ""){
      this.noteList[i].content = result;
    }
  }
}
