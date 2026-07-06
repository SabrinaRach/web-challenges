console.clear();

const actionsElement = document.querySelector("[data-js='actions']");
const userElement = document.querySelector("[data-js='user']");
const errorElement = document.querySelector("[data-js='error']");

async function fetchUserData(url) {
  try {
    const response = await fetch(url, {
      headers: { "x-api-key": "reqres_c0aaf46c1fa2400e8fb8669bacd63171" },
    });
    // Bonus Task: Eine verständlichere Fehlermeldung ausgeben
    /* Bisher wird bei Klick auf "Invalid API Link" diese URL aufgerufen: https://reqres.in, der Code erwartet aber, dass die Antwort Json ist: return await response.json();
    Die URL liefert aber kein JSON, sondern eine HTML-Seite (<!DOCTYPE html>...).
    Deshalb wirft response.json() diesen Fehler (siehe Console): Unexpected token '<', "<!DOCTYPE "... is not valid JSON 
    vorher prüfen, welchen content-type die Antwort hat (content-type= HTTP-Header, der dem Browser oder deinem JavaScript sagt, welche Art von Daten der Server zurückgeschickt hat)
    mit: const contentType = response.headers.get("content-type");
    
    */
    const contentType = response.headers.get("content-type");

  if (!response.ok) {
    throw new Error (`error ${response.status}`); // wird als error.message (line 20) ausgespielt
  }
    return await response.json();
  } catch (error) {
    return { error: error.message };
  }
}

const endpoints = [
  { name: "User 1", url: "https://reqres.in/api/users/1" },
  { name: "User 2", url: "https://reqres.in/api/users/2" },
  { name: "User 99", url: "https://reqres.in/api/users/99" },
  { name: "Invalid API link", url: "https://reqres.in" },
];

endpoints.forEach((endpoint) => {
  const button = document.createElement("button");
  button.textContent = endpoint.name;
  actionsElement.append(button);

  button.addEventListener("click", async () => {
    const result = await fetchUserData(endpoint.url);

    if (result.error) {
      errorElement.textContent = result.error;
      userElement.innerHTML = "No user data available.";
    } else {
      const user = result.data;
      userElement.innerHTML = `
      <img alt="${user.first_name} ${user.last_name}" src="${user.avatar}" class="user__image"/>
      <h2>${user.first_name} ${user.last_name}</h2>
      `;
      errorElement.textContent = "";
    }
  });
});
