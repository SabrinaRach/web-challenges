import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  /*   - Add a second state called `isLoading` to our hook - a boolean which indicates whether the current fetch is ongoing or not. */
  const [isLoading, setIsLoading] = useState(false);
  /* - Add a third state to our `useFetch` hook called `cache`. Initialize it as an empty object. */
  const [cache, setCache] = useState({});

  useEffect(() => {
    async function fetchData() {
      /*    - Inside the `fetchData` function call set the `isLoading` state to `true` before calling `fetch` */
      setIsLoading(true);
      const response = await fetch(url);
      const receivedData = await response.json();

      setData(receivedData);
      /* - Inside the `fetchData` function after updating the value state, add a new entry to our cache. Use the current `url` as the key and the fetched data as the value. 
      setCache({
       ...alterCache,
       [variablerSchlüssel]: neuerWert
         })*/
      setCache({
        ...cache,
        [url]: receivedData,
      });

      /* and set it back to `false` after the value state got updated with the newly fetched data. */
      setIsLoading(false);
    }
    /* - Inside our useEffect, just before calling `fetchData`, check if our cache has an entry for the current url. 
If yes, set the value state to the cached value instead of calling `fetchData`. */
    if (cache[url]) {
      setData(cache[url]);
    } else {
      fetchData();
    }
  }, [url]);

  /*   Ablauf:

useEffect startet wegen einer neuen url.
Prüft: Gibt es diese URL schon im Cache?
Ja:
→ gespeicherte Daten mit setData(cache[url]) verwenden.
Nein:
→ fetchData() ausführen und später im Cache speichern. */

  /*   - Change the return value such that the hook returns an object instead of just the data state value. The object contains 2 entries: `data` - the data state value and our `isLoading` state. */
  /* return data; */
  return {
    data: data,
    isLoading: isLoading,
  }; /* oder return { data, isLoading }; */
}
