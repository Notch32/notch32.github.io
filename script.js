function toggleTheme() {
  document.body.classList.toggle("dark");
  const btn = document.querySelector(".toggle-btn");
  if (document.body.classList.contains("dark")) {
    btn.textContent = "☀️ Light";
  } else {
    btn.textContent = "🌙 Dark";
  }
}
