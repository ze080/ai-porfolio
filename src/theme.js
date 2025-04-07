export function toggleTheme() {
  const html = document.documentElement; // this targets <html>
  const currentTheme = localStorage.getItem("theme");

  if (currentTheme === "dark") {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }
}

export function getInitialTheme() {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
  } else if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    // Default to system preference if nothing is stored
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }
}