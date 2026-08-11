import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function HomePage() {
  const { data } = useSWR("/api/random-character", fetcher);
  if (!data) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h1>Personal Details</h1>
      <p>{data.firstName}</p>
      <p>{data.lastName}</p>
      <p>{data.twitter}</p>
      <p>{data.geohash}</p>
    </div>
  );
}
