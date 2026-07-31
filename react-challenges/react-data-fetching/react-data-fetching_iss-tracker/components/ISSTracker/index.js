import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

/* const URL = "https://api.wheretheiss.at/v1/satellites/25544"; */
const fetcher = (url) => fetch(url).then((response) => response.json());

export default function ISSTracker() {
  const { data, isLoading, error, mutate } = useSWR(
    "https://api.wheretheiss.at/v1/satellites/25544",
    fetcher,
    { refreshInterval: 5000 },  /* Refetch the data of the ISS on an interval of 5 seconds. */
  );
  if (!data)
    return null; /* - Make sure `data` is defined before working with it. */
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading ISS position.</p>;

  /*  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  }); */

  /* async function getISSCoords() {
    try {
      const response = await fetch(URL);
      if (response.ok) {
        const data = await response.json();
        setCoords({ longitude: data.longitude, latitude: data.latitude });
      }
    } catch (error) {
      console.error(error);
    }
  } */

  /* useEffect(() => {
    const timer = setInterval(() => {
      getISSCoords();
    }, 5000);

    return () => {
      clearInterval(timer);
    };
  }, []); */

  return (
    <main>
      <Map longitude={data.longitude} latitude={data.latitude} />
      <Controls
        longitude={data.longitude}
        latitude={data.latitude}
        onRefresh={mutate}
      />
    </main>
  );
}
