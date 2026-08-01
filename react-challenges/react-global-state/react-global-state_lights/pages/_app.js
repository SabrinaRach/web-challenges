import GlobalStyle from "../styles";
import Layout from "../components/Layout";
import { useState } from "react";

/* In doing so, you will need to find a new way to represent the state of the lights. 
You can use an array of objects with a name, isOn and id property. */
const lightStatus = [
  { id: 1, name: "Kitchen", isOn: false },
  { id: 2, name: "Living Room", isOn: false },
  { id: 3, name: "Bedroom", isOn: false },
  { id: 4, name: "Bathroom", isOn: false },
  { id: 5, name: "Garage", isOn: false },
  { id: 6, name: "Porch", isOn: false },
  { id: 7, name: "Garden", isOn: false },
  { id: 8, name: "Office", isOn: false },
];

export default function App({ Component, pageProps }) {
  const [lights, setLights] = useState(lightStatus);

  /* Create a function to toggle the isOn property of a light based on its id and pass the handler function down to the Light components. */
  function toggleLight(lightId) {
    setLights((currentLights) =>
      currentLights.map((light) =>
        light.id === lightId ? { ...light, isOn: !light.isOn } : light,
      ),
    );
  }

  /* The buttons on the /actions page are also not yet functional.
Create two handler functions to toggle all lights on and off. */
  function turnAllLightsOn() {
    setLights((currentLights) =>
      currentLights.map((light) => ({
        ...light,
        isOn: true,
      })),
    );
  }

  function turnAllLightsOff() {
    setLights((currentLights) =>
      currentLights.map((light) => ({
        ...light,
        isOn: false,
      })),
    );
  }

/*   Create a value derived from the state and use it to display the count of turned on lights on the home page (/). */
  const lightsOnCount = lights.filter((light) => light.isOn).length;

/*   The Layout component accepts a isDimmed prop that can be used to dim the background.
Set the isDimmed prop to true if all lights are turned off.  */
const isDimmed = lights.every((light) => !light.isOn);
  return (
    <Layout isDimmed={isDimmed}>
      <GlobalStyle />
      <Component
        {...pageProps}
        lights={lights}
        setLights={setLights}
        onToggle={toggleLight}
        turnAllLightsOn={turnAllLightsOn}
        turnAllLightsOff={turnAllLightsOff}
        lightsOnCount={lightsOnCount}
      />
    </Layout>
  );
}
