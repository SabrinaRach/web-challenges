import { useState } from "react";
import { LightButton, Icon, Text, Name, State } from "./Light.styled";

/* Change Light component to receive at least isOn, name, onToggle as props and remove the internal state from the component. */
export default function Light({ id, name, isOn, onToggle }) {
 /*  const [isOn, setIsOn] = useState(false); 

  function handleToggle() {
    setIsOn((isOn) => !isOn);
  } */

  return (
    <LightButton
      type="button"
      onClick={() => {
        onToggle(id);
      }}
      $isOn={isOn}
    >
      <Icon $isOn={isOn}>💡</Icon>
      <Text>
        <Name>{name}</Name>
        <State>{isOn ? "On" : "Off"}</State>
      </Text>
    </LightButton>
  );
}
