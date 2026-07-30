import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Player from ".";

test("renders player information and two buttons", () => {
     render(
    <Player
      name="Max"
      score={5}
      onDecreasePlayerScore={() => {}}
      onIncreasePlayerScore={() => {}}
    />
  );

  expect(screen.getByText("Max")).toBeInTheDocument();
  expect(screen.getByText("5")).toBeInTheDocument();

  const buttons = screen.getAllByRole("button");

  expect(buttons).toHaveLength(2);
});

test("calls callbacks when increasing or decreasing score", async () => {
    const user = userEvent.setup();

  const handleDecrease = jest.fn();
  const handleIncrease = jest.fn();

  render(
    <Player
      name="Max"
      score={5}
      onDecreasePlayerScore={handleDecrease}
      onIncreasePlayerScore={handleIncrease}
    />
  );

  const decreaseButton = screen.getByRole("button", {
    name: "Decrease Score",
  });

  const increaseButton = screen.getByRole("button", {
    name: "Increase Score",
  });

  await user.click(decreaseButton);
  await user.click(increaseButton);

  expect(handleDecrease).toHaveBeenCalledTimes(1);
  expect(handleIncrease).toHaveBeenCalledTimes(1);
});
