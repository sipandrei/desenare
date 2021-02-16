const main = document.querySelector("main");
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
function crearePixeli(...arg) {
  if (arg.length != 0) {
    let linii = arg[0];
    let coloane = linii; // la inceput facem patrat
    if (arg.length > 1) {
      // daca avem si numarul coloanelor, il folosim
      coloane = arg[1];
    }
    main.style.gridTemplateRows = `repeat(${linii}, 1fr)`;
    main.style.gridTemplateColumns = `repeat(${coloane}, 1fr)`;
    for (let j = 0; j < coloane * linii; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");
      pixel.style.width = 1 + "fr";
      pixel.addEventListener("mouseover", () => {
        pixel.style.backgroundColor = alegereCuloare();
      });
      main.appendChild(pixel);
    }
  } else {
    while (main.hasChildNodes()) {
      main.removeChild(main.firstChild);
    }
  }
}

crearePixeli(10);
