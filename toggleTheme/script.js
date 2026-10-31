// Cache DOM elements and the media query so they're looked up only once
const body = document.body;
const btn = document.querySelector("button");
const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

// Safely read the saved theme (localStorage can throw, e.g. in private mode)
function getSavedTheme() {
  try {
    const theme = localStorage.getItem("theme");
    return theme === "light" || theme === "dark" ? theme : null;
  } catch {
    return null;
  }
}

// Safely save the theme
function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch {
    // Ignore: the theme still works for this session, it just won't persist
  }
}

// Apply a theme by setting exactly one of the two classes
function applyTheme(theme) {
  body.classList.toggle("dark", theme === "dark");
  body.classList.toggle("light", theme === "light");
}

// Get the system's preferred theme
function getSystemTheme() {
  return darkQuery.matches ? "dark" : "light";
}

// On load: use the saved theme if there is one, otherwise follow the system
applyTheme(getSavedTheme() ?? getSystemTheme());

// If the system theme changes, follow it, but only if the user hasn't chosen a theme manually
darkQuery.addEventListener("change", () => {
  if (!getSavedTheme()) applyTheme(getSystemTheme());
});

// Button click: flip the theme and remember the choice
btn.addEventListener("click", () => {
  const newTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(newTheme);
  saveTheme(newTheme);
});