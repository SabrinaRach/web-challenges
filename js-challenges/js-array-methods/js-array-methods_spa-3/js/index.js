//forEach within forEach

// es werden alle Links und alle Seiten gesammelt

const allPages = document.querySelectorAll('[data-js*="page"]');
const allLinks = document.querySelectorAll('[data-js*="link"]');

// Dann wird mit einer Schleife für jeden Link automatisch ein Event Listener erstellt: allLinks.forEach ...link.addEventListener

allLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    allPages.forEach((page) => {
      page.classList.remove("current");
    });
    const hrefAttribute = event.target.getAttribute("href"); //beim Klick liefert hrefAttribute den String "#home" oder"#create" usw.
    const currentPage = document.querySelector(hrefAttribute); //Dieser String wird anschließend als CSS-Selektor verwendet. Das entspricht also praktisch: document.querySelector("#home")
    currentPage.classList.add("current");
  });
});
