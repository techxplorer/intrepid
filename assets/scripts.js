
document.addEventListener( "DOMContentLoaded", () => {

  "use strict";

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll( ".navbar-burger" ),
    0
  );

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener( "click", () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById( target );

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle( "is-active" );
      $target.classList.toggle( "is-active" );

    } );
  } );

  // Get all of the 'navbar-item' elements in the 'navbar-start' element
  const $navbarItems = document.querySelectorAll( ".navbar-start .navbar-item" );

  // Add a click event on each of them
  $navbarItems.forEach( el => {
    el.addEventListener( "click", () => {

      // Get the 'navbar-burger' element
      const navbarBurger = document.querySelector( ".navbar-burger" );

      // Get the target from the "data-target" attribute
      const $target  = document.getElementById( navbarBurger.dataset.target );

      // Make both elements inactive
      navbarBurger.classList.remove( "is-active" );
      $target .classList.remove( "is-active" );

    } );
  } );

} );
