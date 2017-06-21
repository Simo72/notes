function testThatNoteControllerCanBeInstantiated() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  assert.isTrue(noteController.noteList === noteList);
};

testThatNoteControllerCanBeInstantiated();
