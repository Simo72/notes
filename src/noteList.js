(function(exports) {
  function NoteList() {
    this.notes = [];
  };

  NoteList.prototype.addToList = function(note) {
    this.notes.push(new Note(note));
  }

  NoteList.prototype.viewNotes = function() {
    return this.notes
  }

  exports.NoteList = NoteList;
})(this);
