function testThatNoteControllerCanBeInstantiated() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList);
  if(noteController.noteList !== noteList) {
    throw new Error("noteController.noteList does not contain a note list object")
  }
};

function testThatNoteControllerUpdatesInnerHtmlOfElement() {
  function htmlDouble() {
    this.innerHTML = null
  }
  htmlDouble = new htmlDouble();
  var noteList = new NoteList();
  noteList.addToList("test note");
  var noteController = new NoteController(noteList);
  noteController.updateHtml(htmlDouble);
  if(htmlDouble.innerHTML !== "<ul><li><div>test note</div></li></ul>") {
    throw new Error("innerHTML of object did not get updated")
  }
};

testThatNoteControllerCanBeInstantiated();
testThatNoteControllerUpdatesInnerHtmlOfElement();
