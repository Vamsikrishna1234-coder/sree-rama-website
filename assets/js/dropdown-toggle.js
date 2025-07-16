function toggleMenu(e, id) {
  e.preventDefault();
  e.stopPropagation();

  const clickedItem = document.getElementById(id);
  const wasOpen = clickedItem.classList.contains('open');

  // Close all open dropdowns first
  document.querySelectorAll('.dropdown.open').forEach(el => el.classList.remove('open'));

  // Toggle the clicked one if it was not already open
  if (!wasOpen) {
    clickedItem.classList.add('open');
  }
}

// Close when clicking outside
document.addEventListener('click', function () {
  document.querySelectorAll('.dropdown.open').forEach(el => el.classList.remove('open'));
});
