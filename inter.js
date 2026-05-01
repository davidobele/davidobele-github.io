document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.querySelector(".theme-toggle");
  const body = document.body;
  const dateElement = document.getElementById("current-date");
  const timeElement = document.getElementById("current-time");

  // Function to update the clock
  const updateClock = () => {
    const now = new Date();

    // 1. Format Date: Month Day, Year (e.g. April 28, 2026)
    const dateOptions = { month: "long", day: "numeric", year: "numeric" };
    dateElement.textContent = now.toLocaleDateString("en-US", dateOptions);

    // 2. Format Time: HH:MM:SS (24-hour format)
    const timeOptions = {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    };
    timeElement.textContent = now.toLocaleTimeString("en-GB", timeOptions);
  };

  // Run immediately and then every second
  updateClock();
  setInterval(updateClock, 1000);

  // Updated Theme Logic
  const htmlElement = document.documentElement; // Target <html> instead of <body>

  themeToggleBtn.addEventListener("click", () => {
    htmlElement.classList.toggle("light-mode");

    // Save preference to localStorage
    const isLight = htmlElement.classList.contains("light-mode");
    localStorage.setItem("theme", isLight ? "light" : "dark");
  });
});
