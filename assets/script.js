( function( $ ) {
  "use strict";

  $( function() {

    // Update the icons.
    feather.replace();

    // Check for click events on the navbar burger icon
    $( ".navbar-burger" ).on( "click", function() {

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      $( ".navbar-burger" ).toggleClass( "is-active" );
      $( ".navbar-menu" ).toggleClass( "is-active" );

    } );

    // Add a class to all paragraph tags.
    $( "p" ).addClass( "mb-2" );

    // Add a class to all ol tags.
    $( "ol" ).addClass( "mb-2 ml-4" );

    // Adjust the styling of the footer on mobile.
    if ( $( ".is-footer-menu ul" ).css( "flex-direction" ) === "column" ) {
      $( ".is-footer-menu" ).removeClass( "has-text-centered" );
    }

    // Shuffle any random lists as required.
    $( ".is-random ul" ).randomizeChildrenOrder();

  } );

  /**
   * Randomly shuffle the child elements of the parent element.
   * Based on a technique from: https://stackoverflow.com/a/66907166
   */
  $.fn.randomizeChildrenOrder = function() {
    this.each( function() {
      var  childrenArray = $( this ).children().toArray();
      var  shuffledChildrenArray = fisherYatesShuffle( childrenArray );
      $( shuffledChildrenArray ).detach().appendTo( this );
    } );

    return this;

    // https://stackoverflow.com/a/2450976/665825
    function fisherYatesShuffle( array ) {
      var  currentIndex = array.length, temporaryValue, randomIndex;
      while ( currentIndex !== 0 ) {
        randomIndex = Math.floor( Math.random() * currentIndex );
        currentIndex -= 1;
        temporaryValue = array[ currentIndex ];
        array[ currentIndex ] = array[ randomIndex ];
        array[ randomIndex ] = temporaryValue;
      }
      return array;
    }
  };

} )( jQuery );
