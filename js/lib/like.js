
$(function() {
 var div = $("#like__panel").on("like__panel", function(e) {
  div.slideDown() ;
  e.stopPropagation() ;
 }) ;
 $(document).on("click", "body", function() {
  div.slideUp() ;
 }) ;
}) ;