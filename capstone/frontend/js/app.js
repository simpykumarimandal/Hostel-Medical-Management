// Load page content dynamically
function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then((res) => res.text())
    .then((data) => {
      document.getElementById("main-content").innerHTML = data;
    })
    .catch((err) => {
      document.getElementById("main-content").innerHTML =
        "<p>Error loading page.</p>";
      console.error(err);
    });
}

// Default page load
window.onload = () => {
  loadPage("dashboard");
};
