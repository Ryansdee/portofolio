fetch('projects.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('projects-container');

    data.forEach(project => {
      const card = document.createElement('div');
      card.className = "border rounded-lg overflow-hidden shadow hover:shadow-lg transition";

      card.innerHTML = `
        <img src="${project.image}" alt="${project.title}" class="w-full h-48 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold mb-2">${project.title}</h3>
          <p class="text-gray-700 text-sm mb-4">${project.description}</p>
          <a href="${project.link}" target="_blank" class="inline-block px-4 py-2 text-sm bg-black text-white rounded hover:bg-gray-800 transition">Voir le projet</a>
        </div>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Erreur lors du chargement des projets :', error);
  });
