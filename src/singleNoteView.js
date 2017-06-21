(function(exports) {
  function SingleNoteView(note) {
    this.note = note
  }

    SingleNoteView.prototype.outputHtmlText = function() {
      var note = "<div>";
      note += this.note.text;
      note += "</div>"
    return note;
  }

exports.SingleNoteView = SingleNoteView;

})(this);
