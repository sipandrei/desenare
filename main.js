function crearePixeli(linii, coloane) {
  for (let i = 0; i < linii; i++) {
    const linie = document.createElement("div");
    for (let j = 0; j < coloane; j++) {
      const pixel = document.createElement("div");
      pixel.classList.add("pixel");

      linie.appendChild(pixel);
    }
    document.body.appendChild(linie);
  }
}
crearePixeli(16, 16);
