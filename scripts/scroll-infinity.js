const COLORS = ["#ffd700", "#ff8c00"];
const TAGS = [
  "ANOS 60, 70, 80, 90 e 2000 (Remix)",
  "BREGAS (Remix)",
  "ITALIANAS 60,70,80 (Originais)",
  "INTERNACIONAIS 60,70,80 (Originais Remix)",
  "NACIONAIS - Vários artistas - 60,70 e 80 (Remix)",
  "CLASSICOS DA MPB - Originais todos os tempos",
  "CLÁSSICOS DOS BOLEROS - Luiz Miguel",
  "DISCO MUSIC - Internacionais (Remix)",
  "FESTA DE REVEILLON - (Nacionais e Internacionais)",
  "FORRÓ TRADICIONAL - (Originais)",
  "GRANDE ORQUESTRAS - (Internacionais)",
  "INTERNACIONAIS - (Vários artistas Originais)",
  "LATINAS - Vários artistas (Originais)",
  "NEW FORRÓ - (Várias Bandas)",
  "PISEIRO - Vários artistas (Originais)",
  "ROCK - Internacionais (Remix)",
  "SAMBA DO REVELAÇÃO - (Originais)",
  "SAMBA RAIZ (Originais)",
  "SAMBAS E PAGODES 2000 (Originais)",
  "SERTANEJAS (Antigas)",
  "SERTANEJAS 2000 (Originais)",
  "TOPS 2000 (Nacionais)",
  "ARROCHA - (Vários artistas)",
  "CARNAVAL BAHIA - Vários artistas (Originais)",
  "CARNAVAL RECIFE - Vários artistas (Originais)",
  "BRUNO E MARRONE - (Antigas)",
];
const DURATION = 100000;
const ROWS = 5;
const TAGS_PER_ROW = 5;

const random = (min, max) => Math.floor(Math.random() * (max - min)) + min;
const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

const tagList = document.getElementById("tag-list");

for (let i = 0; i < ROWS; i++) {
  const loopSlider = document.createElement("div");
  loopSlider.className = "loop-slider";
  loopSlider.style.setProperty(
    "--duration",
    `${random(DURATION - 100000, DURATION + 100000)}ms`
  );
  loopSlider.style.setProperty(
    "--direction",
    i % 2 === 0 ? "normal" : "reverse"
  );

  const inner = document.createElement("div");
  inner.className = "inner";

  const tags = shuffle(TAGS).slice(0, TAGS_PER_ROW);
  for (let j = 0; j < 2; j++) {
    tags.forEach((text) => {
      const tag = document.createElement("div");
      tag.className = "tag";
      tag.style.setProperty(
        "--color",
        COLORS[Math.floor(Math.random() * COLORS.length)]
      );
      tag.innerHTML = `<span>#</span> ${text}`;
      inner.appendChild(tag);
    });
  }

  loopSlider.appendChild(inner);
  tagList.appendChild(loopSlider);
}

// Fade overlay
const fade = document.createElement("div");
fade.className = "fade";
tagList.appendChild(fade);
