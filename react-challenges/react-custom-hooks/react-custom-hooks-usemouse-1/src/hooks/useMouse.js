import { useEffect, useState } from "react";

export default function useMouse() {
  const [cursorPosition, setCursorPosition] = useState([0, 0]); // Anfangs ist die Maus bei x=0, y=0.

/*   mit useEffect den Code ausführen, wenn sich etwas ändert, also Mausbewegungen */
  useEffect(() => {
    document.body.addEventListener("mousemove", (event) =>
      setCursorPosition([event.clientX, event.clientY]),
    );
  }, []);
  return cursorPosition;
}
