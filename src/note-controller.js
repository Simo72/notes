// element = document.getElementById("app");
//
// element.innerHTML = "Howdy"

(function(exports) {

  function NoteController(noteList) {
    this.noteList = noteList;
    this.noteListView = new NoteListView(noteList);
  };

  NoteController.prototype.updateHtml = function(element) {
    element.innerHTML = this.noteListView.htmlView();
  };

  exports.NoteController = NoteController;
})(this);
