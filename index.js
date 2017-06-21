var newNoteList = new NoteList()
newNoteList.addToList("Hello everybody!")
var newNoteController = new NoteController(newNoteList)
newNoteController.updateHtml();
