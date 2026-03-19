(() => {
  const sessionRaw = localStorage.getItem("hms_session");
  if (!sessionRaw) {
    window.location.href = "/index.html";
    return;
  }

  let session;
  try {
    session = JSON.parse(sessionRaw);
  } catch (err) {
    localStorage.removeItem("hms_session");
    window.location.href = "/index.html";
    return;
  }

  const now = Date.now();
  if (!session.expiresAt) {
    session.expiresAt = now + 15 * 60 * 1000;
    localStorage.setItem("hms_session", JSON.stringify(session));
  }

  if (now > session.expiresAt) {
    localStorage.removeItem("hms_session");
    window.location.href = "/index.html";
    return;
  }

  const logoutHandler = (event) => {
    const target = event.target.closest("[data-logout]");
    if (!target) return;
    event.preventDefault();
    localStorage.removeItem("hms_session");
    window.location.href = "/index.html";
  };

  document.addEventListener("click", logoutHandler);
})();
