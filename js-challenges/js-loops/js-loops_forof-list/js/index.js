console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
  "JavaScript",
  "Python",
  "Java",
  "C#",
  "C++",
  "PHP",
  "Ruby",
];

// --v-- write or modify code below this line --v--
// einer Variable "programmingLanguage" jeweils ein Element aus dem Array "programmingLanguages" zuweisen
for (let programmingLanguage of programmingLanguages) {
  // li erzeugen
  const li = document.createElement("li");
  // Inhalt mit textContent zu li hinzufügen
  li.textContent = programmingLanguage;
  // li zu ol hinzufügen
  ol.append(li);
}
// --^-- write or modify code above this line --^--
