
  // Animation au scroll avec Intersection Observer
  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if(entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Une fois visible, on arrête d'observer
        }
      });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));
  });

  // Simple validation + simulation d'envoi formulaire contact
  const form = document.getElementById('contact-form');
  const status = document.getElementById('form-status');

  form.addEventListener('submit', e => {
    e.preventDefault();
    status.textContent = '';

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !message) {
      status.textContent = "Merci de remplir tous les champs.";
      status.className = "text-red-600";
      return;
    }

    status.textContent = "Envoi en cours...";
    status.className = "text-black";

    setTimeout(() => {
      status.textContent = "Message envoyé avec succès, merci !";
      status.className = "text-green-600";
      form.reset();
    }, 1500);
  });