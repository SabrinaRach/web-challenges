import { useState } from "react";
import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";

/* - Accept a new prop in this component called `onToggleFavorite`. This event should be triggered when users press the favorite button.
- Accept a new prop called `isFavorite`.
- Accept a new prop called `id`. */
export default function FavoriteButton({ onToggleFavorite, isFavorite, id }) {
  /* const [isFavorite, setIsFavorite] = useState(false); */

  return (
    <button
      className="favorite-button"
      /*       - Change the button's `onClick` prop to call `onToggleFavorite` and pass `id` with this call as first argument.*/ onClick={() => {
        onToggleFavorite({ id });
      }}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
