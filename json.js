fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const facilitiesContainer = document.getElementById('facilities');
    data.forEach(facility => {
      const link = document.createElement('a');
      link.href = facility.link;
      link.className = 'facility-link';
      link.innerHTML = `
        <div class="facility">
          <div class="platforms">
            <img src="${facility.image}" alt="${facility.title}">
          </div>
          <div class="description">
            <h3>${facility.description}</h3>
          </div>
          <div class="adress">
            <h3>${facility.address}</h3>
          </div>
        </div>
      `;
      facilitiesContainer.appendChild(link);
    });
  })
  .catch(error => console.error('Ошибка:', error));





