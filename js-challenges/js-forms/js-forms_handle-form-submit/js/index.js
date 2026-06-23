//console.clear();

const form = document.querySelector('[data-js="form"]');
const firstNameInput = document.querySelector('[name="firstName"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const data = Object.fromEntries(formData);

  console.log(data);

  form.reset();
  firstNameInput.focus();

  const ageBadnessSum = Number(data.age) + Number(data.badness);
  console.log(
    `The age-badness-sum of "${data.firstName}" is "${ageBadnessSum}"`,
  );
});
