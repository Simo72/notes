var newNoteList = new NoteList()
newNoteList.addToList("Hello everybody!!!!!!!")
var newNoteController = new NoteController(newNoteList)
var app = document.getElementById("app")
newNoteController.updateHtml(app);
