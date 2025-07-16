$(document).ready(function () {
    $('.dropdown-submenu > a').on('click', function (e) {
      var submenu = $(this).next('.dropdown-menu');

      // Close other open submenus
      $('.dropdown-submenu .dropdown-menu').not(submenu).slideUp();

      // Toggle current submenu
      submenu.slideToggle();

      // Prevent default behavior (following the link)
      e.stopPropagation();
      e.preventDefault();
    });
  });
