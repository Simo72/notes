function testThatSingleNoteViewReturnsHtmlString() {
  var note = new Note("How's the dry cereal");
  var singleNoteView = new SingleNoteView(note);

  if(singleNoteView.outputHtmlText() !== "<div>How's the dry cereal</div>" ) {
    throw new Error("singleNoteView does not show correct HTML")
  }
};
testThatSingleNoteViewReturnsHtmlString();
