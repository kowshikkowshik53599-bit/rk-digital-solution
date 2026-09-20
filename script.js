const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav-links');
menuBtn.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.getElementById('year').textContent = new Date().getFullYear();

// IMPORTANT: Replace this with your WhatsApp number in international format.
// Example for India: 919876543210 (do not use + or spaces).
const whatsappNumber = "919965857012";
const whatsappMessage = encodeURIComponent("Hello RK Digital Solution, I would like to know more about your services.");
document.getElementById("whatsappLink").href = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
