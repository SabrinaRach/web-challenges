import Link from "next/link";
/* import volumes array from data.js */
import { introduction, volumes } from "../../lib/data";
import { useRouter } from "next/router";

export default function Volumes() {
  const router = useRouter();

  /* getRandomElement() kümmert sich um die Zufallsauswahl, 
und handleRandomVolume() nutzt das Ergebnis, um den Benutzer auf die passende Detailseite zu navigieren. */

  /* This function will help you to get a random element from an array: */
  function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  /* when user clicks the button: */
  function handleRandomVolume() {
    const randomVolume =
      getRandomElement(volumes); /* gives back a random object from the array */
    console.log(randomVolume);

    /* router.push() changes the current URL and navigates the user to another page without reloading the entire website. */
    router.push(
      `/volumes/${randomVolume.slug}`
    ); /* router.push navigates user to the random page */
  }

  /*  ----- ODER:
 export default function Volumes() {
  const router = useRouter();

  function getRandomElement() {
    const randomElement = volumes[Math.floor(Math.random() * volumes.length)];
    router.push(
      `/volumes/${randomElement.slug}`;} 
      
      und in <button onClick={getRandomElement}>*/

  return (
    <>
      <h1>The Lord of the Rings</h1>
      <p>{introduction}</p>
      <ul>
        {" "}
        {volumes.map((volume) => (
          <li key={volume.slug}>
            <Link href={`/volumes/${volume.slug}`}>{volume.title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={handleRandomVolume}>Random Volume</button>
    </>
  );
}
