// Carrega os dados do arquivo JSON
fetch('champions.json')
  .then(response => response.json())
  .then(data => renderQuotes(data));

function renderQuotes(champions) {
  const container = document.getElementById('quotes-container');
  container.innerHTML = '';

  champions.forEach(item => {
    const card = document.createElement('div');
    card.className = 'champion-card';
    
    let quotesHTML = `<h2>${item.champion} (${item.skin})</h2>`;
    
    item.quotes.forEach(q => {
      quotesHTML += `
        <div class="quote">
          <p>"${q.text}"</p>
          <button onclick="playAudio('${q.audio}')">▶ Ouvir</button>
        </div>
      `;
    });

    card.innerHTML = quotesHTML;
    container.appendChild(card);
  });
}

function playAudio(url) {
  const player = document.getElementById('player');
  player.src = url;
  player.play();
}
