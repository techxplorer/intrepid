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
    $( ".is-random ul" ).each( function( index, element ) {
      tinysort(
        element.children,
        {
          natural: true,
          order: "rand"
        }
      );
    } );
  } );

} )( jQuery );
