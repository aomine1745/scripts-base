document.addEventListener("DOMContentLoaded", () => {
  const puntitos = document.getElementById('puntito'),
  puntos = [
  ".",
  "..",
  "...",
  ],
  puntosDelay = 500,
  displayPuntos = () => {
    let delay = 0;
    puntos.forEach(punto => {
      setTimeout(() => puntitos.textContent = punto, delay);
      delay += puntosDelay;
    });
  };
  displayPuntos();
  setInterval(displayPuntos, (puntos.length * puntosDelay));
});