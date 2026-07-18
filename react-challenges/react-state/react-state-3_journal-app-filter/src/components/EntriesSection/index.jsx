import "./EntriesSection.css";
import Divider from "../Divider";
import Entry from "../Entry";
import Tabs from "../Tabs";
import Tab from "../Tab";
import Badge from "../Badge";
import { Fragment } from "react";

/* - Add two new props to the function declaration of this component: `onShowAllEntries` and `onShowFavoriteEntries`
 */
/* - Inside of the `EntriesSection` component, add the `filter` prop to the function declaration. */
export default function EntriesSection({ entries, onToggleFavorite, onShowAllEntries, onShowFavoriteEntries, filter, allEntriesCount, favoriteEntriesCount }) {
  return (
    <section className="entries-section">
      <Tabs>
        {/* - Pass the respective prop to the `onClick` prop on the filter buttons */}
        <Tab isActive={filter==="all"} onClick={onShowAllEntries}>
          All Entries <Badge isActive>{allEntriesCount}</Badge>
        </Tab>
        <Tab isActive={filter==="favorites"} onClick={onShowFavoriteEntries}>
          Favorites <Badge>{favoriteEntriesCount}</Badge>
        </Tab>
      </Tabs>
      <div className="entries-section__entries">
        {entries.map((entry, index) => (
          <Fragment key={entry.id}>
            {index > 0 ? <Divider /> : null}
            <Entry
              date={entry.date}
              motto={entry.motto}
              notes={entry.notes}
              onToggleFavorite={onToggleFavorite}
              id={entry.id}
              isFavorite={entry.isFavorite}
            />
          </Fragment>
        ))}
      </div>
    </section>
  );
}
