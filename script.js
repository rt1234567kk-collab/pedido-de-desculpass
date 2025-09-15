const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const music = document.getElementById("music");

// Botão SIM foge quando passa o mouse
yesBtn.addEventListener("mouseover", () => {
  const x = Math.random() * (window.innerWidth - yesBtn.offsetWidth);
  const y = Math.random() * (window.innerHeight - yesBtn.offsetHeight);
  yesBtn.style.left = `${x}px`;
  yesBtn.style.top = `${y}px`;
});

// Música toca quando clica no NÃO
noBtn.addEventListener("click", () => {
  music.play();
  alert("EU TE AMO E TE DEDICO ESSA MUSGA!");
});
