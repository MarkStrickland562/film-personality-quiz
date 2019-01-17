$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var gender = parseInt($("input:radio[name=gender]:checked").val());
    var age = parseInt($("input:radio[name=age]:checked").val());
    var result;
    debugger;
    if ( isNaN(gender) || isNaN(age) ) {
      result = "You didn't select an answer for all questions, please try again."
    } else if ( gender === 1 ) {
      if ( age === 1) {
        result = "Scarface";
      } else if ( age === 2) {
        result = "Star Wars";
      } else if ( age === 3 ) {
        result = "The Godfather";
      }
    } else if ( gender === 2 ) {
      if ( age === 1) {
        result = "The Lion King";
      } else if ( age === 2) {
        result = "Silence of the Lambs";
      } else if ( age === 3 ) {
        result = "Ghost";
      }
    } else if ( gender === 3 ) {
      if ( age === 1) {
        result = "Jurrassic Park";
      } else if ( age === 2) {
        result = "Star Wars";
      } else if ( age === 3 ) {
        result = "Forrest Gump";
      }
    }
    $("#output").empty().append(result);
  });
});
