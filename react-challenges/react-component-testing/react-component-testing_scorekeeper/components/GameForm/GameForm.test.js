import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GameForm from "./index";

jest.mock("next/router", () => ({
  useRouter() {
    return { push: jest.fn() };
  },
}));

test("renders two input fields and a button", () => {
  render(<GameForm onCreateGame={() => {}} />);

  expect(screen.getAllByRole("textbox")).toHaveLength(2);
  expect(
    screen.getByRole("button", { name: "Create game" }),
  ).toBeInTheDocument();
});

test("renders a form with the accessible name 'Create a new game'", () => {
  render(<GameForm onCreateGame={() => {}} />);

  expect(
    screen.getByRole("form", { name: "Create a new game" }),
  ).toBeInTheDocument();
});

test("submits the correct form data when every field is filled out", async () => {
  const user = userEvent.setup();
  const handleCreateGame = jest.fn();

  render(<GameForm onCreateGame={handleCreateGame} />);

  await user.type(screen.getByLabelText("Name of game"), "Dodelido");

  await user.type(
    screen.getByLabelText("Player names, separated by comma"),
    "John Doe, Jane Doe",
  );

  await user.click(screen.getByRole("button", { name: "Create game" }));

  expect(handleCreateGame).toHaveBeenCalledWith({
    nameOfGame: "Dodelido",
    playerNames: ["John Doe", "Jane Doe"],
  });
});

test("does not submit form if one input field is left empty", async () => {
  const user = userEvent.setup();
  const handleCreateGame = jest.fn();

  render(<GameForm onCreateGame={handleCreateGame} />);

  await user.type(screen.getByLabelText("Name of game"), "Dodelido");

  await user.click(screen.getByRole("button", { name: "Create game" }));

  expect(handleCreateGame).not.toHaveBeenCalled();
});
