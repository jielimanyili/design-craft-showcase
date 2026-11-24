// Set the color theme before first paint (FOUC-free).
// Served as an external file so it is allowed by a `script-src 'self'` CSP
// (an inline script in index.html would be blocked on Vercel).
(function () {
  var theme;
  var query = new URLSearchParams(location.search).get("theme");
  if (query === "dark" || query === "light") {
    theme = query;
  } else {
    var stored = null;
    try {
      stored = localStorage.getItem("theme");
    } catch (e) {
      // storage unavailable (e.g. private browsing) — fall back to OS preference
    }
    theme =
      stored === "dark" || stored === "light"
        ? stored
        : window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light";
  }
  document.documentElement.setAttribute("data-theme", theme);
})();
