//console.clear();

const form = document.querySelector('[data-js="form"]');
//const firstNameInput = document.querySelector('[name="firstName"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

 const FormElement = event.target;

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  console.log(data);

  event.target.reset();
  event.target.firstName.focus();

  const ageBadnessSum = Number(data.age) + Number(data.badness); // mit Number werden die Strings aus data in Zahlen umgewandelt (da die Werte aus object strings sind)
  console.log(
    `The age-badness-sum of "${data.firstName}" is "${ageBadnessSum}"`,
  );
});
