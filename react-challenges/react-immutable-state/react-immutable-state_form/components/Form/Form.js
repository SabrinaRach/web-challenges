import { useState } from "react";
import { StyledForm, StyledInputContainer } from "./Form.styled";
import { useImmer } from "use-immer";

export default function Form() {
  const [mountain, setMountain] = useImmer({
    /* changing useState to useImmer */ name: "Mount Everest",
    values: {
      altitude: 8848,
      mountainRange: "Himalayas",
    },
  });

  /*   ### Updating with Spread Syntax */
  function handleNameChange(event) {
    const newName = event.target.value;
    setMountain((prevMountain) => ({
      ...prevMountain,
      name: newName,
    }));
  }

  function handleAltitudeChange(event) {
    const newAltitude = parseInt(event.target.value);
    setMountain((prevMountain) => ({
      ...prevMountain,
      values: {
        ...prevMountain.values,
        altitude: newAltitude,
      },
    }));
  }

  function handleMountainRangeChange(event) {
    const newMountainRange = event.target.value;
    setMountain((prevMountain) => ({
      ...prevMountain,
      values: {
        ...prevMountain.values,
        mountainRange: newMountainRange,
      },
    }));
  }

  /*  ### Bonus: Updating with the `useImmer` hook instead of Spread Syntax */
  function handleNameChange(event) {
    updateMountain((draft) => {
      draft.name = event.target.value;
    });
  }

  function handleAltitudeChange(event) {
    updateMountain((draft) => {
      draft.values.altitude = parseInt(event.target.value);
    });
  }

  function handleMountainRangeChange(event) {
    updateMountain((draft) => {
      draft.values.mountainRange = event.target.value;
    });
  }

  return (
    <StyledForm>
      <StyledInputContainer>
        <label htmlFor="name">Name:</label>
        <input id="name" value={mountain.name} onChange={handleNameChange} />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="altitude">Altitude:</label>
        <input
          id="altitude"
          value={mountain.values.altitude}
          onChange={handleAltitudeChange}
        />
      </StyledInputContainer>
      <StyledInputContainer>
        <label htmlFor="mountainRange">Mountain Range:</label>
        <input
          id="mountainRange"
          value={mountain.values.mountainRange}
          onChange={handleMountainRangeChange}
        />
      </StyledInputContainer>
      <output>
        <i>{mountain.name}</i>
        {" is "}
        {mountain.values.altitude}
        {" meters high"}
        <br />
        (and located in the {mountain.values.mountainRange})
      </output>
    </StyledForm>
  );
}
