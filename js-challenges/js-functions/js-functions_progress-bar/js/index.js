console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

// Wie viel wurde schon gescrollt? → window.scrollY
// Wie hoch ist der sichtbare Bereich? → window.innerHeight
//Wie hoch ist die gesamte Seite? → document.body.clientHeight

// Der maximale Scrollbereich ist nicht einfach die Seitenhöhe, sondern: „Gesamthöhe minus sichtbarer Bereich“

// Wenn ich ganz nach unten gescrollt bin, muss das Ergebnis 100% ergeben

function calculateScrollPercentage() {
  const scrolledArea = document.body.clientHeight - window.innerHeight; //maximal möglicher Scrollbereich
  const scrollPosition = window.scrollY; //scrollPosition = wie weit der User gescrollt hat, also Ist-Zustand

  return (scrollPosition / scrolledArea) * 100; //Division macht daraus einen Anteil (0 bis 1), *100 macht daraus Prozent (0 bis 100)
}

document.addEventListener("scroll", (event) => {
  //Wenn der User scrollt:
  // 1. Funktion aufrufen mit nameoffunction(); und Ergebnis in Variable speicher
  const scrolledProgress = calculateScrollPercentage();

  // 2. Progress-Bar updaten
  progressBar.style.width = `${scrolledProgress}%`; //% um den CSS einen Prozentwert mitzugeben
});
