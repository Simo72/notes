(function(exports) {
  function NoteListView(noteList) {
    this.noteList = noteList
  };

  NoteListView.prototype.htmlView = function() {
    var list = "<ul>";
    this.noteList.notes.forEach(function(entry) {
      list += ("<li><div>" + entry.text + "</div></li>");
    });
    list += "</ul>"
    return list;
  }

  exports.NoteListView = NoteListView;
})(this);
