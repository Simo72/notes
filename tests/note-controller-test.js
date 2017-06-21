function testThatNoteControllerCanBeInstantiated() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  if(noteController.noteList !== noteList) {
    throw new Error("noteController.noteList does not contain a note list object")
  }
};

testThatNoteControllerCanBeInstantiated();
