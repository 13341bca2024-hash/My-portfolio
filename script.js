// Smooth scroll for nav buttons
document.querySelectorAll("nav .fancy-btn").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const targetId = btn.textContent.trim().toLowerCase();
    const targetSection = document.querySelector(`#${targetId}`);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Typing effect for name
const typingName = document.querySelector(".typing-name");
const text = typingName.textContent;
typingName.textContent = "";
let i = 0;
function typeWriter() {
  if (i < text.length) {
    typingName.textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, 120);
  } else {
    typingName.style.borderRight = "none";
  }
}
typeWriter();

// Fade-in animation on scroll
const sections = document.querySelectorAll("section");
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

sections.forEach(section => {
  section.classList.add("hidden");
  observer.observe(section);
});
