const queryString = window.location.search;

document.addEventListener("DOMContentLoaded", () => {
  document.body.textContent = queryString;
});
