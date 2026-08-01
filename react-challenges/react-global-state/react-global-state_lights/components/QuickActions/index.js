import styled from "styled-components";
import Button from "../Button";

const StyledQuickActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function QuickActions({lights, turnAllLightsOn, turnAllLightsOff}) {
/*   Bonus: Make the Buttons disabled if their action would not do anything:
"Turn all lights off" should be disabled if all lights are off
"Turn all lights on" should be disabled if all lights are on */
  const allLightsOn = lights.every((light) => light.isOn);
  const allLightsOff = lights.every((light) => !light.isOn);
  return (
    <StyledQuickActions>
      <Button
        type="button"
        onClick={() => {
          /* console.log("Turn all lights off"); */
          turnAllLightsOff();
        }}
        disabled={allLightsOff}
      >
        Turn all lights off
      </Button>
      <Button
        type="button"
        onClick={() => {
          /* console.log("Turn all lights on"); */
          turnAllLightsOn();
        }}
        disabled={allLightsOn}
      >
        Turn all lights on
      </Button>
    </StyledQuickActions>
  );
}
