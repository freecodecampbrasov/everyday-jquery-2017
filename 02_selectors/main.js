//console.log("Hello");

$(function() {
  var $header = $("h1");
  //console.log($header);
  var $red = $(".red");
  //console.log($red);
  var $p5 = $("#p5");
//  console.log($p5);
  var $redp = $("p.red");
  //console.log($redp);
  var $bigred = $(".red.big");
  //console.log($bigred);
  var $textInput = $('input[type="text"]');
  //console.log($textInput);
  var $allElements = $("*");
  //console.log($allElements);
  var $h1InsideDiv = $("div h1");
  //console.log($h1InsideDiv);
  var $allInsideDiv = $("div *");
  //  console.log($allInsideDiv);
  var $pNestedInside2Divs = $("div div p");
  //console.log($pNestedInside2Divs);
  var $firstLiDescendents = $("div > ul > li");
  //console.log($firstLiDescendents);
  var $firstChild = $("li:first-child");
  console.log($firstChild );




});
