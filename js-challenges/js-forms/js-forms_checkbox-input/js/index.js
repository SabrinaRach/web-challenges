//console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}

// --v-- write your code here --v--

// Terms of Service Checkbox
hideTosError(); //Fehlermeldung weg beim Laden

tosCheckbox.addEventListener("change", () => {
  //chage: Checked: Fehler weg, unchecke: Fehler da
  if (tosCheckbox.checked) {
    hideTosError();
  } else {
    showTosError();
  }
});

// --^-- write your code here --^--

// für Bonus: Success Message

const success = document.querySelector('[data-js="success"]');

hideTosError();
success.hidden = true;

//function showSuccess() {
//  success.removeAttribute("hidden");
//}
// ist das gleiche wie success.hidden = false; //anzeigen

//function hideSuccess() {
//  success.setAttribute("hidden", "");
//}
// ist das gleiche wie success.hidden = true; //verstecken

// "submit" nachdem Formular gesendet wurde
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!tosCheckbox.checked) {
    //ist das gleiche wie tosCheckbox.checked === false durch das Ausrufezeichen ("nicht" angehakt)
    showTosError();
    success.hidden = true;
    return;
  }

  hideTosError();
  success.hidden = false;

  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
