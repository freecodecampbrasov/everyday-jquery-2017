$(function(){
  // console.log('dom ready');
  // $( "#content" ).load( "menu.html" );
  $.ajax({
    url: "http://api.icndb.com/jokes/random",
    data: {
      "firstName": "Ion",
      "lastName": "Amariei"
    },
    dataType: "json",
    success: function(data, status, xhr){
      // console.log('----- HERE: success -----');
      console.log(data);
      // console.log(status);

      $("#content").html(data.value.joke);
    }
    // error: function(){
    //   console.log('HERE: error');
    // },
    // complete: function(){
    //   console.log('HERE: complete');
    // }
  });
})
