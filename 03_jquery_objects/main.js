// Shorthand for $( document ).ready()
$(function() {
  var $h1Sel = $("h1");
  var $h2Sel = $("h2");
  if ($h2Sel.length) {
    //console.log(h1Sel);
    // for(var i=0; i < h2Sel.length; i++) {
    //   h2Sel[i].innerHTML = "Modified by JS";
    // }
  //  $h2Sel.html("<span>Modified by jQuery</span>");
      var content = $h2Sel.eq(1).html();
      console.log(content);
      var firstContent = $h2Sel.html();
      console.log(firstContent);
  //  var elem = $h2Sel[0];
  //  var $elem = $(elem);

  //  $elem.html("modified");
  //  console.dir(elem);
  //  console.log($elem);
  }

  $h2Sel.click(function(){
    console.log("click");
  });
  
  $h2Sel.click();
});
