import { Fragment, useState } from "react";
import Winner from "../Winner";
import {
  CarButton,
  AllCarRoutes,
  DistanceHeadline,
  Distance,
  Track,
} from "./CarRace.styled";
import { initialCars, getRandomDistance } from "../../utils/utils";
import { useImmer } from "use-immer";

const finishLine = 200;

export default function CarRace() {
  const [cars, updateCars] = useImmer(initialCars);

  /*   ### Updating with Spread Syntax */
  /* function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();
    setCars((prevCars) =>
      prevCars.map((car) => {
        if (car.emoji === clickedCar.emoji) {
          return {
            ...car,
            position: {
              x: car.position.x + coveredDistance,
              lastDistance: coveredDistance,
            },
          };
        }
        return car;
      })
    ); */
  /*   console.log("clickedCar", clickedCar);
    console.log("coveredDistance", coveredDistance);
  }*/

  /* ### Updating with `immer` */
  /*   - `immer` and `useImmer` are already installed, so you just have to import what you need.
- Update the state declaration: change `setCars` to `updateCars` and `useState()` to `useImmer()`.
- Use the `draft` array to find the index of the car or the car you want to update. Which method comes to mind for finding an element or it index?
- Combine the `draft` array with the found `index` or element to assign the same values to `position.x` and `position.lastDistance` as before. */

  function moveCar(clickedCar) {
    const coveredDistance = getRandomDistance();
    updateCars((draft) => {
      const index = draft.findIndex((car) => car.emoji === clickedCar.emoji);

      draft[index].position.x += coveredDistance;
      draft[index].position.lastDistance = coveredDistance;
    });
  }

  const winner = cars.find((car) => car.position.x >= finishLine);

  return (
    <>
      {winner ? (
        <Winner winner={winner} onRestart={() => updateCars(initialCars)} />
      ) : (
        <AllCarRoutes $finishLine={finishLine}>
          <DistanceHeadline>Last Distance</DistanceHeadline>
          {cars.map((car) => (
            <Fragment key={car.emoji}>
              <Track>
                <CarButton
                  onClick={() => moveCar(car)}
                  $positionX={car.position.x}
                  $lastDistance={car.position.lastDistance}
                  aria-label={`Move clicked car forward`}
                >
                  {car.emoji}
                </CarButton>
              </Track>
              <Distance>{car.position.lastDistance}</Distance>
            </Fragment>
          ))}
        </AllCarRoutes>
      )}
    </>
  );
}
