const hamMenu = document.querySelector('.ham-menu');
const offScreenMenu = document.querySelector('.off-screen-menu');
const body = document.body;

hamMenu.addEventListener('click', () => {
  hamMenu.classList.toggle('active');
  offScreenMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

// Keyboard accessibility for hamburger menu
hamMenu.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    hamMenu.classList.toggle('active');
    offScreenMenu.classList.toggle('active');
    body.classList.toggle('no-scroll');
  }
});

document.querySelectorAll('.off-screen-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamMenu.classList.remove('active');
    offScreenMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
  });
});


const toggle = document.getElementById("theme-toggle");
const linkdinIcon = document.getElementById("linkdin-icon");
const instaIcon = document.getElementById("inst-icon");

/* Load saved preference and set icon sources */
const isLightMode = localStorage.getItem("theme") === "light";
if (isLightMode) {
  document.body.classList.add("light");
  toggle.checked = true;
  instaIcon.src = "img/instagramDark.png";
  linkdinIcon.src = "img/linkedinDark.png";
} else {
  instaIcon.src = "img/Instagram.png";
  linkdinIcon.src = "img/linkedin.png";
}

/* Toggle */
toggle.addEventListener("change", () => {
  document.body.classList.toggle("light");
  const isLight = document.body.classList.contains("light");

  instaIcon.src = isLight
    ? "img/instagramDark.png"
    : "img/Instagram.png";

  linkdinIcon.src = isLight
    ? "img/linkedinDark.png"
    : "img/linkedin.png";

  localStorage.setItem(
    "theme",
    isLight ? "light" : "dark"
  );
});