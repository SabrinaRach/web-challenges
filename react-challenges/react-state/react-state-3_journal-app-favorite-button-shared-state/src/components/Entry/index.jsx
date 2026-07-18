import FavoriteButton from "../FavoriteButton";
import "./Entry.css";

/* In this component accept the three props too: `onToggleFavorite`, `isFavorite`, `id`. */
export default function Entry({
  motto,
  notes,
  date,
  onToggleFavorite,
  isFavorite,
  id,
}) {
  return (
    <article className="entry">
      <time className="entry__date">{date}</time>
      <div className="entry__content">
        <div className="entry__motto-container">
          <h2 className="entry__motto">
            <q>{motto}</q>
          </h2>
          {/* - Pass all three props to the `FavoriteButton` component. */}
          <FavoriteButton
            onToggleFavorite={onToggleFavorite}
            isFavorite={isFavorite}
            id={id}
          />
        </div>
        <p className="entry__notes">{notes}</p>
      </div>
    </article>
  );
}
