const main = document.querySelector("main");
function crearePixeli(linii, coloane) {
  for (let i = 0; i < linii; i++) {
    const linie = document.createElement("span");
    linie.classList.add("linie");
    for (let j = 0; j < coloane; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");

      pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = alegereCuloare();
      });
      linie.appendChild(pixel);
    }
    main.appendChild(linie);
  }
}
function alegereCuloare() {
  let color =
    "rgb(" +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    "," +
    Math.round(Math.random() * 255) +
    ")";

  return color;
}
crearePixeli(23, 23);
