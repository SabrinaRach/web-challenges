import Link from "next/link";
import Image from "next/image";
import { volumes } from "../../../lib/data";


/* Import the volumes array from lib/data.js and find the data for each volume. 
You can identify each volume by the slug property, which acts like an ID. 
(Use volumes.find(({slug}) => slug === "the-fellowship-of-the-ring") to find the book with the slug the-fellowship-of-the-ring.) */
export default function TwoTowersPage() {
  const volume = volumes.find(
    ({ slug }) => slug === "the-two-towers"
  );

  const volumeIndex = volumes.findIndex(
    ({ slug }) => slug === "the-two-towers"
  );

  const previousVolume = volumes[volumeIndex - 1];
  const nextVolume = volumes[volumeIndex + 1];

  return (
    <div>
      <Link href="/volumes">
        ← All Volumes
      </Link>

      <h1>{volume.title}</h1>

      <p>{volume.description}</p>

      <ul>
        {volume.books.map((book, index) => (
          <li key={book.title}>
            {index + 1}. {book.title}
          </li>
        ))}
      </ul>

      <Image
        src={volume.cover}
        alt={`Cover of ${volume.title}`}
        width={140}
        height={230}
      />

{/* Add links to the previous and next volume to the bottom of the detail pages. If there is no previous or next volume, do not render the link. */}
      <div>
        {previousVolume && (
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← {previousVolume.title}
          </Link>
        )}

        {nextVolume && (
          <Link href={`/volumes/${nextVolume.slug}`}>
            {nextVolume.title} →
          </Link>
        )}
      </div>
    </div>
  );
}