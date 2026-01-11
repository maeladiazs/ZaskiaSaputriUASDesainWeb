document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("loading-overlay");
  const greetingText = document.getElementById("greeting-text");
  const heroGreeting = document.getElementById("hero-greeting");

  if (!overlay || !greetingText || !heroGreeting) return;

  const hour = new Date().getHours();
  let greeting = "Selamat Malam";

  if (hour >= 5 && hour < 12) greeting = "Selamat Pagi";
  else if (hour >= 12 && hour < 15) greeting = "Selamat Siang";
  else if (hour >= 15 && hour < 18) greeting = "Selamat Sore";

  greetingText.innerText = greeting;
  heroGreeting.innerText = `${greeting}, Selamat Datang!`;

  setTimeout(() => {
    overlay.classList.add("fade");
    overlay.classList.remove("show");
    setTimeout(() => overlay.style.display = "none", 500);
  }, 3000);
});
