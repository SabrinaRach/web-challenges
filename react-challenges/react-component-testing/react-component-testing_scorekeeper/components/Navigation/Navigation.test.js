import { render, screen } from "@testing-library/react";
import Navigation from ".";

jest.mock("next/router", () => ({
  useRouter() {
    return { pathname: jest.fn() };
  },
}));

test("renders with two links 'Play' and 'History'", () => {
  /* check whether the navigation is rendered */
  render(<Navigation />);

  const playLink = screen.getByRole("link", {
    name: "Play",
  });

  const historyLink = screen.getByRole("link", {
    name: "History",
  });

  expect(playLink).toBeInTheDocument();
  expect(historyLink).toBeInTheDocument();
});

/* oder: sucht das element und prüft es sofort. Erste Variante speichert Ergebnis in Variable und prüft es danach. 
  expect(screen.getByRole("link", { name: "Play" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "History" })).toBeInTheDocument();
}); */
