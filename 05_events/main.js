$(function() {
  $( 'li' ).on('click' , function( event ) {
  //  console.log( 'clicked', $( this ).text() );
  });

  var handleClick = function() {
  //  console.log( 'something was clicked from function', $( this ).text() );
  };
  $( 'li' ).on( 'click', handleClick );

  $( 'a' ).on( 'click', function( event ) {
    // Prevent the default action.
    event.preventDefault();
    // Log stuff.
    //console.log( 'I was just clicked!' );
  });

// $( '*' ).add( [ document, window ] ).on( 'click', function( event ) {
//   console.log( this );
//   event.stopPropagation();
// });

// $( 'ul' ).on( 'click', function( event ) {
//   console.log( event.target ); // logs the element that initiated the event
//   $(event.target).html('clicked');
//
// });

$( 'ul' ).on( 'click', 'li', function( event ) {
  console.log( this ); // logs the list item that was clicked
  $( '<li>a new list item!</li>' ).appendTo( 'ul' );
});

})
