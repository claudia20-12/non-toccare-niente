const personaggio = document.querySelector("#personaggio-caos");
const pulsanteGuai = document.querySelector("#pulsante-guai");
const pennellate = document.querySelector("#pennellate");
const pulisciPennellate = document.querySelector("#pulisci-pennellate");
const fumetto = document.querySelector("#fumetto");
const rifaiGuai = document.querySelector("#rifai-guai");
const illustrazioneCaos = document.querySelector("#illustrazione-caos");
const dialogo = document.querySelector("#scheda-opera");
const chiudiScheda = document.querySelector("#chiudi-scheda");
const titoloScheda = document.querySelector("#titolo-scheda");
const categoriaScheda = document.querySelector("#categoria-scheda");
const descrizioneScheda = document.querySelector("#descrizione-scheda");
const contenutoDescrizione = document.querySelector("#contenuto-descrizione");
const contenutoGalleria = document.querySelector("#contenuto-galleria");
const immaginiGalleria = document.querySelector("#immagini-galleria");
const lightbox = document.querySelector("#lightbox-illustrazioni");
const immagineIngrandita = document.querySelector("#immagine-ingrandita");
const contatoreImmagini = document.querySelector("#contatore-immagini");
const chiudiLightbox = document.querySelector("#chiudi-lightbox");
const immaginePrecedente = document.querySelector("#immagine-precedente");
const immagineSuccessiva = document.querySelector("#immagine-successiva");

let immagineCorrente = 1;
let operaCorrente = null;
const mostraGalleria = document.querySelector("#mostra-galleria");
const tornaDescrizione = document.querySelector("#torna-descrizione");
const contest = [
  { cartella: "contest/contest1", immagini: 5 },
  { cartella: "contest/contest2", immagini: 5 },
  { cartella: "contest/contest3", immagini: 5 },
  { cartella: "contest/contest4", immagini: 5 }
];
document.querySelectorAll(".missione").forEach((scheda) => {
  const galleria = scheda.querySelector(".missione-galleria");
  const indice = Number(scheda.dataset.contest);
  const datiContest = contest[indice];

  if (!galleria || !datiContest) return;

  let caricata = false;

  scheda.addEventListener("toggle", () => {
    if (!scheda.open || caricata) return;

    for (let numero = 1; numero <= datiContest.immagini; numero++) {
      const nome = String(numero).padStart(2, "0");
      const immagine = document.createElement("img");

      immagine.alt = `Immagine ${numero} del contest ${indice + 1}`;
      immagine.loading = "lazy";

      immagine.dataset.formato = "jpeg";
      immagine.src = `${datiContest.cartella}/${nome}.jpeg`;

      immagine.onerror = () => {
        if (immagine.dataset.formato === "jpeg") {
          immagine.dataset.formato = "png";
          immagine.src = `${datiContest.cartella}/${nome}.png`;
        } else {
          immagine.remove();
        }
      };

      galleria.appendChild(immagine);
    }

    caricata = true;
  });
});

const battute = [
  "Ah, ciao! Non premere quel pulsante.",
  "Ti avevo detto di non farlo. Complimenti.",
  "È tutto sotto controllo. Più o meno.",
  "Claudia, abbiamo un piccolo problema.",
  "Non è un errore: è una scelta artistica.",
  "Se lo racconti in giro, nego tutto.",
  "Sono qui per aiutare. Credo.",
  "Un attimo, sto fingendo di sapere cosa faccio.",
  "Hai visto il mio pennello? Ah, ce l'ho in mano.",
  "Questa parte l'avevo immaginata diversamente.",
  "Non distrarmi, sto supervisionando.",
  "Secondo me ci vorrebbe un altro colore."
];

let indiceBattuta = 0;

function mostraBattuta(testo) {
  fumetto.textContent = testo;
}
function creaPennellata() {
  const pennellata = document.createElement("span");

  pennellata.classList.add("pennellata");

  const x = Math.random() * 85;
  const y = Math.random() * 85;
  const rotazione = Math.random() * 160 - 80;

  pennellata.style.left = `${x}%`;
  pennellata.style.top = `${y}%`;
  pennellata.style.transform = `rotate(${rotazione}deg)`;
const lunghezza = 50 + Math.random() * 100;
pennellata.style.width = `${lunghezza}px`;
const spessore = 6 + Math.random() * 14;
pennellata.style.height = `${spessore}px`;
  pennellate.appendChild(pennellata);
}
function combinaGuai() {
 
  personaggio.classList.remove("scappa");

// Riavvia l'animazione a ogni clic
void personaggio.offsetWidth;

personaggio.classList.add("scappa");
  document.body.classList.remove("guai");
  // Riavvia l'animazione quando il pulsante viene premuto più volte.
  void document.body.offsetWidth;
  document.body.classList.add("guai");
  for (let i = 0; i < 5; i++) {
  creaPennellata();
}
  illustrazioneCaos.classList.toggle("caos-attivo");
  indiceBattuta = (indiceBattuta + 1) % battute.length;
  mostraBattuta(battute[indiceBattuta]);
  window.setTimeout(() => document.body.classList.remove("guai"), 850);
}

pulsanteGuai.addEventListener("click", combinaGuai);

pulisciPennellate.addEventListener("click", () => {
  const segni = pennellate.querySelectorAll(".pennellata");

  segni.forEach((segno) => {
    segno.classList.add("pennellata-in-uscita");
  });

  window.setTimeout(() => {
    pennellate.innerHTML = "";
  }, 300);
});

rifaiGuai.addEventListener("click", () => {
  combinaGuai();

  document.body.classList.toggle("testo-caos");

  document.querySelector("#caos").scrollIntoView({
    behavior: "smooth",
    block: "center"
  });
});

personaggio.addEventListener("click", () => {
  indiceBattuta = (indiceBattuta + 1) % battute.length;
  mostraBattuta(battute[indiceBattuta]);

  personaggio.classList.remove("personaggio-curioso");
  void personaggio.offsetWidth;
  personaggio.classList.add("personaggio-curioso");
});

// Schede dimostrative: sostituire titoli e descrizioni con i dati delle opere reali.

const opere = [
 {
  titolo: "Fuori dal foglio",
  categoria: "ILLUSTRAZIONE · CONTEST",
  descrizione: "Una raccolta di illustrazioni realizzate per diversi contest, in cui il personaggio diventa protagonista di nuove sfide creative. Ogni partecipazione è un'occasione per sperimentare situazioni, temi e linguaggi visivi differenti, dando vita a interpretazioni sempre nuove.",
  immagini: [],
  cartella: "libro",
  numeroImmagini: 12,
  estensione: "JPEG"
},
{
  titolo: "Manuale per perdersi",
  categoria: "PERSONAGGI · EDITORIALE",
  descrizione: "Un viaggio illustrato attraverso l'Italia, raccontato attraverso gli occhi di un turista.",
  città: [
    {
      nome: "Roma",
      sottotitolo: "Tra storia e quotidianità",
      testo: "Una città fatta di contrasti, incontri e dettagli che spesso sfuggono a uno sguardo distratto. Le illustrazioni raccontano Roma attraverso frammenti di vita urbana.",
      immagini: [1, 2, 3]
    },
    {
      nome: "Venezia",
      sottotitolo: "Perdersi tra le forme",
      testo: "Una città in cui acqua, architettura e percorsi si intrecciano continuamente. Le illustrazioni esplorano il fascino di Venezia attraverso nuove prospettive.",
      immagini: [4, 5, 6]
    },
    {
      nome: "Firenze",
      sottotitolo: "La bellezza nei dettagli",
      testo: "Un percorso tra forme, atmosfere e particolari che definiscono l'identità della città. Le illustrazioni invitano a soffermarsi sui dettagli di Firenze.",
      immagini: [7, 8, 9]
    },
    {
      nome: "Napoli",
      sottotitolo: "Una città da scoprire",
      testo: "Un racconto visivo dedicato all'identità e alle molteplici sfumature di Napoli, attraverso uno sguardo curioso e attento.",
      immagini: [10, 11, 12]
    }
  ]
},
 {
  titolo: "Un posto tutto mio",
  categoria: "ILLUSTRAZIONE · SKETCH",
  descrizione: "Una raccolta di sketch in bianco e nero che esplora frammenti di quotidianità attraverso temi come la famiglia, i ricordi, la natura e l’ironia. Piccoli appunti visivi che prendono forma da osservazioni, pensieri ed esperienze personali, dando spazio alla spontaneità del disegno.",
  immagini: [],
  cartella: "unpostotuttomio",
  numeroImmagini: 123,
  estensione: "JPEG",
  filePresenti: [
    1, 2, 4, 5, 6, 7, 8, 10,
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 27, 28, 29, 30,
    35, 36, 37, 43, 44, 45, 47, 48, 49, 50,
    51, 52, 53, 54, 55, 56, 57, 58, 59,
    61, 62, 64, 65, 66, 67, 68, 70,
    73, 74, 75, 76, 78, 79, 80,
    82, 83, 84, 85, 86, 87, 88, 89, 90,
    91, 92, 93, 94, 95, 96, 97, 98, 99,
    100, 101, 102, 103, 104, 105, 106, 107,
    108, 109, 110, 111, 112, 113, 114, 115,
    116, 117, 118, 119, 120
  ]
}
];



document.querySelectorAll("[data-opera]").forEach((card) => {
  card.addEventListener("click", () => {
    const opera = opere[Number(card.dataset.opera)];

    titoloScheda.textContent = opera.titolo;
    categoriaScheda.textContent = opera.categoria;
    descrizioneScheda.textContent = opera.descrizione;

    // Torna sempre alla descrizione quando apri una scheda
    contenutoDescrizione.hidden = false;
    contenutoGalleria.hidden = true;
    immaginiGalleria.replaceChildren();

    // Mostra il pulsante solo se il progetto ha immagini
   mostraGalleria.hidden = !(
  (opera.città && opera.città.length > 0) ||
  (opera.cartella && opera.numeroImmagini)
);

    if (typeof dialogo.showModal === "function") {
      dialogo.showModal();
    } else {
      alert(`${opera.titolo}\n\n${opera.descrizione}`);
    }
  });
});

mostraGalleria.addEventListener("click", () => {
  const indice = opere.findIndex(
    (opera) => opera.titolo === titoloScheda.textContent
  );

  const opera = opere[indice];

 if (!opera) return;

if (opera.cartella && opera.numeroImmagini) {
  apriLightbox(1, opera);
  return;
}

if (!opera.città || opera.città.length === 0) return;

  immaginiGalleria.replaceChildren();

  opera.città.forEach((citta) => {
    const gruppo = document.createElement("section");
    gruppo.classList.add("gruppo-citta");

    const titolo = document.createElement("h3");
    titolo.textContent = citta.nome;

    const sottotitolo = document.createElement("h4");
    sottotitolo.textContent = citta.sottotitolo;

    const testo = document.createElement("p");
    testo.textContent = citta.testo;

    gruppo.append(titolo, sottotitolo, testo);

   citta.immagini.forEach((numero) => {
  const img = document.createElement("img");

  const estensioni = {
    1: "JPEG",
    2: "JPG",
    3: "JPEG",
    4: "JPEG",
    5: "JPG",
    6: "JPEG",
    7: "JPEG",
    8: "PNG",
    9: "JPEG",
    10: "JPEG",
    11: "JPG",
    12: "JPEG"
  };

  img.src = `assets/illustrazione${numero}.${estensioni[numero]}`;
  img.alt = `Illustrazione ${numero} — ${citta.nome}`;
  img.loading = "lazy";

  gruppo.appendChild(img);
});

    immaginiGalleria.appendChild(gruppo);
  });

  contenutoDescrizione.hidden = true;
  contenutoGalleria.hidden = false;
});


chiudiScheda.addEventListener("click", () => dialogo.close());
dialogo.addEventListener("click", (event) => {
  if (event.target === dialogo) dialogo.close();
});

// Micro-interazione progressiva: il personaggio cambia battuta quando la sezione
// "Chi siamo" entra per la prima volta nella zona visibile.
const sezioneChiSono = document.querySelector("#chi-sono");
if ("IntersectionObserver" in window) {
  const osservatore = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        document.querySelector("#fumetto-finale").textContent = "Finalmente qualcuno che lavora qui.";
        osservatore.disconnect();
      }
    });
  }, { threshold: 0.35 });
  osservatore.observe(sezioneChiSono);
}

// Animazione delle lettere della parola "niente."
const parolaNiente = document.querySelector("#parola-niente");

if (parolaNiente) {
  const testoOriginale = parolaNiente.textContent;

  parolaNiente.setAttribute("role", "button");
  parolaNiente.setAttribute("tabindex", "0");
  parolaNiente.setAttribute("aria-label", testoOriginale);

  parolaNiente.replaceChildren();

  [...testoOriginale].forEach((carattere) => {
    const lettera = document.createElement("span");

    lettera.className = "lettera-niente";
    lettera.textContent = carattere;

    parolaNiente.appendChild(lettera);
  });

  function scomponiParola() {
    const lettere = parolaNiente.querySelectorAll(".lettera-niente");

    lettere.forEach((lettera, indice) => {
      const x = (Math.random() - 0.5) * 55;
      const y = (Math.random() - 0.5) * 45;
      const rotazione = (Math.random() - 0.5) * 90;

      lettera.style.setProperty("--spostamento-x", `${x}px`);
      lettera.style.setProperty("--spostamento-y", `${y}px`);
      lettera.style.setProperty("--rotazione", `${rotazione}deg`);
      lettera.style.setProperty("--ritardo", `${indice * 25}ms`);
    });

    parolaNiente.classList.remove("scomponi");
    void parolaNiente.offsetWidth;
    parolaNiente.classList.add("scomponi");
  }

  parolaNiente.addEventListener("mouseenter", scomponiParola);
  parolaNiente.addEventListener("click", scomponiParola);

  parolaNiente.addEventListener("keydown", (evento) => {
    if (evento.key === "Enter" || evento.key === " ") {
      evento.preventDefault();
      scomponiParola();
    }
  });

  parolaNiente.addEventListener("animationend", (evento) => {
    if (evento.target === parolaNiente.querySelector(".lettera-niente:last-child")) {
      parolaNiente.classList.remove("scomponi");
    }
  });
}




/* MINI-GIOCO INIZIALE */

const schermataCaricamento = document.querySelector("#schermata-caricamento");
const forme = document.querySelectorAll(".forma-trascinabile");
const sagome = document.querySelectorAll(".sagoma");
const progressoGioco = document.querySelector("#gioco-progresso");
const messaggioGioco = document.querySelector("#gioco-messaggio");
const pulsanteEntra = document.querySelector("#entra-home");
const pulsanteSalta = document.querySelector("#salta-gioco");

const chiaveGioco = "portfolioGiocoCompletato";

if (schermataCaricamento) {
  // Se il gioco è già stato completato o saltato, mostra subito il sito.
  if (localStorage.getItem(chiaveGioco) === "si") {
    schermataCaricamento.remove();
  } else {
    let formaSelezionata = null;
    let formeSistemate = 0;

    function aggiornaProgresso() {
      progressoGioco.textContent =
        `Forme sistemate: ${formeSistemate} su ${sagome.length}`;

      if (formeSistemate === sagome.length) {
       messaggioGioco.textContent =
  "Ordine ristabilito. Più o meno. ✳";
  messaggioGioco.classList.add("messaggio-completato");
        pulsanteEntra.disabled = false;
      }
    }

    function sistemaForma(forma, sagoma) {
      if (!forma || !sagoma || sagoma.classList.contains("in-ordine")) {
        return;
      }

      if (forma.dataset.forma !== sagoma.dataset.destinazione) {
        messaggioGioco.textContent =
          "Ops, non è la forma giusta! Prova con un'altra.";
        return;
      }

      // Inserisce la forma nella sua destinazione corretta.
      sagoma.textContent = "";
      sagoma.appendChild(forma);
      sagoma.classList.add("in-ordine");
      forma.draggable = false;
      forma.setAttribute("aria-label", "Forma sistemata");
      forma.style.cursor = "default";

      formeSistemate++;
      formaSelezionata = null;

      messaggioGioco.textContent = "Perfetto! Una forma al suo posto.";
      aggiornaProgresso();
    }

    forme.forEach((forma) => {
      forma.addEventListener("dragstart", (evento) => {
        formaSelezionata = forma;
        evento.dataTransfer.setData("text/plain", forma.dataset.forma);
      });

      forma.addEventListener("click", () => {
        formaSelezionata = forma;
        messaggioGioco.textContent =
          "Ora scegli la sagoma in cui vuoi mettere questa forma.";
      });

      forma.addEventListener("keydown", (evento) => {
        if (evento.key === "Enter" || evento.key === " ") {
          evento.preventDefault();
          formaSelezionata = forma;
          messaggioGioco.textContent =
            "Ora scegli la sagoma in cui vuoi mettere questa forma.";
        }
      });
    });

    sagome.forEach((sagoma) => {
      sagoma.addEventListener("dragover", (evento) => {
        evento.preventDefault();
      });

      sagoma.addEventListener("drop", (evento) => {
        evento.preventDefault();

        const forma = formaSelezionata ||
          Array.from(forme).find(
            (elemento) =>
              elemento.dataset.forma ===
              evento.dataTransfer.getData("text/plain")
          );

        sistemaForma(forma, sagoma);
      });

      sagoma.addEventListener("click", () => {
        if (formaSelezionata) {
          sistemaForma(formaSelezionata, sagoma);
        }
      });

      sagoma.addEventListener("keydown", (evento) => {
        if (
          (evento.key === "Enter" || evento.key === " ") &&
          formaSelezionata
        ) {
          evento.preventDefault();
          sistemaForma(formaSelezionata, sagoma);
        }
      });
    });

    function chiudiGioco() {
      localStorage.setItem(chiaveGioco, "si");
      schermataCaricamento.classList.add("caricamento-finito");

      window.setTimeout(() => {
        schermataCaricamento.remove();
      }, 600);
    }

    pulsanteEntra.addEventListener("click", () => {
      if (formeSistemate === sagome.length) {
        chiudiGioco();
      }
    });

    pulsanteSalta.addEventListener("click", chiudiGioco);
  }
}


/* RIAPRIRE IL MINI-GIOCO DAL FOOTER */

const pulsanteRiviviGioco = document.querySelector("#rivivi-gioco");

if (pulsanteRiviviGioco) {
  pulsanteRiviviGioco.addEventListener("click", () => {
    localStorage.removeItem("portfolioGiocoCompletato");
    window.location.reload();
  });
}

const interruttorePersonaggio = document.getElementById("interruttore-personaggio");
const immaginePersonaggio = document.querySelector(".ritratto-personaggio");

if (interruttorePersonaggio && immaginePersonaggio) {
  interruttorePersonaggio.addEventListener("click", () => {
    const stressato = interruttorePersonaggio.getAttribute("aria-pressed") === "true";

    immaginePersonaggio.src = stressato
      ? "assets/personaggio-nonmatto.PNG"
      : "assets/personaggio-matto.PNG";

    interruttorePersonaggio.setAttribute("aria-pressed", String(!stressato));

    interruttorePersonaggio.setAttribute(
      "aria-label",
      stressato
        ? "Fai stressare il collega non retribuito"
        : "Fai rilassare il collega non retribuito"
    );
  });
}
const pulsanteRipristina = document.querySelector("#ripristina-sito");

rifaiGuai.addEventListener("click", () => {
  pulsanteRipristina.hidden = !document.body.classList.contains("testo-caos");
});

pulsanteRipristina.addEventListener("click", () => {
  document.body.classList.remove("testo-caos");
  pulsanteRipristina.hidden = true;
});
function mostraImmagine(numero) {
  if (!operaCorrente) return;

  // Recupera l'elenco delle immagini disponibili
  const immagini = operaCorrente.filePresenti;

  // Se non esiste un elenco, usa la numerazione normale
  const elenco = immagini ||
    Array.from(
      { length: operaCorrente.numeroImmagini },
      (_, i) => i + 1
    );

  // Impedisce di superare i limiti della galleria
  immagineCorrente = Math.max(
    1,
    Math.min(numero, elenco.length)
  );

  // Recupera il numero reale del file
  const numeroFile = elenco[immagineCorrente - 1];

  const formato = String(numeroFile).padStart(2, "0");

immagineIngrandita.onerror = () => {
  if (immagineIngrandita.src.endsWith(".JPEG")) {
    immagineIngrandita.src =
      `${operaCorrente.cartella}/${formato}.PNG`;
  }
};

immagineIngrandita.src =
  `${operaCorrente.cartella}/${formato}.${operaCorrente.estensione}`;

  immagineIngrandita.alt =
    `Illustrazione ${numeroFile} — ${operaCorrente.titolo}`;

  // Il contatore mostra la posizione nella galleria
  contatoreImmagini.textContent =
    `${immagineCorrente} / ${elenco.length}`;

  // Gestisce le frecce
  immaginePrecedente.disabled = immagineCorrente === 1;

  immagineSuccessiva.disabled =
    immagineCorrente === elenco.length;
}

function apriLightbox(numero, opera) {
  operaCorrente = opera;
  mostraImmagine(numero);
  lightbox.showModal();
}

chiudiLightbox.addEventListener("click", () => {
  lightbox.close();
});

immaginePrecedente.addEventListener("click", () => {
  mostraImmagine(immagineCorrente - 1);
});

immagineSuccessiva.addEventListener("click", () => {
  mostraImmagine(immagineCorrente + 1);
});

lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) {
    lightbox.close();
  }
});

document.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;

  if (event.key === "ArrowLeft") {
    mostraImmagine(immagineCorrente - 1);
  }

  if (event.key === "ArrowRight") {
    mostraImmagine(immagineCorrente + 1);
  }
});





// CURSORE CREATIVO ROSSO

const usaCursoreCreativo =
  window.matchMedia("(hover: hover) and (pointer: fine)").matches &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (usaCursoreCreativo) {
  const cursore = document.createElement("div");

  cursore.classList.add("cursore-creativo");
  cursore.setAttribute("aria-hidden", "true");

  // Inserisce il cursore nel dialogo aperto
function aggiornaLivelloCursore() {
  const finestreAperte = document.querySelectorAll("dialog:modal");

  const finestraAperta = finestreAperte[finestreAperte.length - 1];

  if (finestraAperta) {
    finestraAperta.appendChild(cursore);
  } else {
    document.body.appendChild(cursore);
  }
}

  document.body.classList.add("cursore-attivo");

  // Aggiorna il livello quando si apre o chiude un dialogo
  document.querySelectorAll("dialog").forEach((finestra) => {
    finestra.addEventListener("close", aggiornaLivelloCursore);
  });

  aggiornaLivelloCursore();

  // Controlla se un colore è rosso
  function eSuperficieRossa(elemento) {
    while (elemento && elemento !== document.body) {
      const stile = window.getComputedStyle(elemento);
      const colore = stile.backgroundColor;

      const rgb = colore.match(
        /rgba?\((\d+),\s*(\d+),\s*(\d+)/
      );

      if (rgb) {
        const r = Number(rgb[1]);
        const g = Number(rgb[2]);
        const b = Number(rgb[3]);

        if (r > 150 && g < 100 && b < 100) {
          return true;
        }
      }

      elemento = elemento.parentElement;
    }

    return false;
  }

  // Movimento del mouse
  document.addEventListener("mousemove", function (evento) {
    aggiornaLivelloCursore();

    cursore.style.left = evento.clientX + "px";
    cursore.style.top = evento.clientY + "px";
    cursore.classList.add("visibile");

    const elemento = document.elementFromPoint(
      evento.clientX,
      evento.clientY
    );

    const rosso = elemento && eSuperficieRossa(elemento);

    cursore.classList.toggle("invertito", !!rosso);
  });

  // Nasconde il cursore fuori dalla finestra
  document.addEventListener("mouseout", function (evento) {
    if (!evento.relatedTarget) {
      cursore.classList.remove("visibile");
    }
  });

  // Ingrandimento sopra link e pulsanti
  document.addEventListener("mouseover", function (evento) {
    if (evento.target.closest("a, button")) {
      cursore.classList.add("attivo");
    }
  });

  document.addEventListener("mouseout", function (evento) {
    if (
      evento.target.closest("a, button") &&
      !evento.relatedTarget?.closest("a, button")
    ) {
      cursore.classList.remove("attivo");
    }
  });
}
