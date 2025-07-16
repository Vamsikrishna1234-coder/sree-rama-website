  const toggler = document.querySelector('.navbar-toggler');
  const iconBars = toggler.querySelector('.icon-bars');
  const iconClose = toggler.querySelector('.icon-close');

  toggler.addEventListener('click', () => {
    iconBars.style.display = iconBars.style.display === "none" ? "inline" : "none";
    iconClose.style.display = iconClose.style.display === "none" ? "inline" : "none";
  });

