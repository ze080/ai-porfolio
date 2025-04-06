export function setInitialTheme() {
  const isDark = localStorage.getItem('theme') === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches);

  if (isDark) {
    document.documentElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  }
}

export function toggleTheme() {
  const root = document.documentElement;
  const isDark = root.classList.contains('dark');
  if (isDark) {
    root.classList.remove('dark');
    localStorage.setItem('theme', 'light');
  } else {
    root.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  }
}