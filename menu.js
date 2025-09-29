fetch("menu.json")
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("menu-sekce");
    container.innerHTML = ""; 

    data.forEach(category => {
      const catDiv = document.createElement("div");
      catDiv.classList.add("menu-category");

      const heading = document.createElement("h2");
      heading.textContent = category.kategorie;
      catDiv.appendChild(heading);

      category.polozky.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("menu-item");

        itemDiv.innerHTML = `
          <span class="name">${item.nazev}</span>
          ${item.popis ? `<span class="popis">${item.popis}</span>` : ''}
          <span class="price">${item.cena}</span>
        `;

        catDiv.appendChild(itemDiv);
      });

      container.appendChild(catDiv);
    });
  })
  .catch(err => {
    console.error("Chyba při načítání menu:", err);
  });
