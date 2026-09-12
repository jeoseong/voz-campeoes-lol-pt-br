function playAudio(url) {
  const player = document.getElementById('player');
  player.src = url;
  player.play();
}
