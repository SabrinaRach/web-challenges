import styled from "styled-components";
import Light from "../Light";

const StyledLights = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 0;
  margin: 0;
  justify-content: center;
`;

/* Change the Lights component to render the lights dynamically based on the array in state (.map). 
You'll need to pass the array down through props. */
export default function Lights({lights, onToggle}) {
  return (
    <StyledLights> {lights.map((light) => (
      <li key={light.id}>
        <Light id={light.id} name={light.name} isOn={light.isOn} onToggle={() => onToggle(light.id)}/>
      </li>
    ))}
       </StyledLights>
  );
}
      {/* <li>
        <Light name="Kitchen" />
      </li>
      <li>
        <Light name="Bedroom" />
      </li>
      <li>
        <Light name="Bathroom" />
      </li>
      <li>
        <Light name="Garage" />
      </li>
      <li>
        <Light name="Porch" />
      </li>
      <li>
        <Light name="Garden" />
      </li>
      <li>
        <Light name="Office" />
      </li> */}
   
