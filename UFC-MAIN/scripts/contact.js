document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact");

  function showFeedback(message, type) {
    const feedbackDiv = document.createElement("div");
    feedbackDiv.textContent = message;
    feedbackDiv.className = `feedback ${type}`;
    document.body.appendChild(feedbackDiv);

    setTimeout(() => feedbackDiv.remove(), 3000);
  }

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
      showFeedback("Please fill in all fields.", "error");
      return;
    }
    showFeedback(
      `Thank you, ${name}! Your message has been sent. 🥊`,
      "success"
    );
    contactForm.reset();
  });
});
