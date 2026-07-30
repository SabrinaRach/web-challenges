import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from ".";

/* To check for attributes like `placeholder` or `name`, you can use the matcher `toHaveAttribute(attributeName, value)`.
- The `Input` component receives an `onChange` callback; in order to test it, remember that you have to mock if first.
- You can check how often a function has been called with `toHaveBeenCalledTimes(numberOfExpectedCalls)`. */

test("renders a label and an input with the correct attributes", () => {
  render(
    <Input
      labelText="Name"
      placeholder="Enter your name"
      name="username"
      value=""
      onChange={() => {}}
      required
    />,
  );
  const input = screen.getByRole("textbox");

  expect(input).toHaveAttribute("placeholder", "Enter your name");
  expect(input).toHaveAttribute("name", "username");
  expect(input).toBeRequired();
});

test("calls callback on every user input", async () => {
  /* 1. creating a mock function with jest.fn() */
  const handleChange = jest.fn();

  render(
    <Input
      labelText="Name"
      placeholder="Enter your name"
      name="username"
      value=""
      onChange={handleChange}
    />,
  );

/*   <input type="text"></input> = Role textbox */
  const input = screen.getByRole("textbox");

  await userEvent.type(input, "Max");

  /*   toHaveBeenCalledTimes(1) prüft, ob die function genau einmal aufgerufen wurde. 
  3 weil drei Buchstaben in Max*/
  expect(handleChange).toHaveBeenCalledTimes(3);
});
