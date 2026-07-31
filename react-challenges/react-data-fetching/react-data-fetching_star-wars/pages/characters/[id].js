import Card from "../../components/Card";
import Layout from "../../components/Layout";
import useSWR from "swr";
import { useRouter } from "next/router";

/* to implement a proper error state based on an error object, you need to adapt the fetcher function [as explained in the SWR docs](https://swr.vercel.app/docs/error-handling#status-code-and-error-object). */
const fetcher = async (url) => {
  const res = await fetch(url);
  // If the status code is not in the range 200-299,
  // we still try to parse and throw it.
  if (!res.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }
  return res.json();
};

export default function Character() {
  /* const id = 1; */
  /*  - Replace the variable `const id = 1`: use the `useRouter` hook to access the `id` from `router.query`. */
  /* instead of the hard coded `/1`, interpolate the `id` variable. */
  const router = useRouter();
  const { id } = router.query;
  const { data, error, isLoading } = useSWR(
    `https://swapi.py4e.com/api/people/${id}`,
    fetcher,
  );
  console.log(data);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Failed to load</p>;
  if (!data)
    return null; /* - Make sure `data` is defined before working with it. */
  return (
    <Layout>
      {/* Adapt the return statement so that you pass the correct fetched data to the `Card` component. */}
      <Card
        id={data.id}
        name={data.name}
        height={data.height}
        eyeColor={data.eye_color}
        birthYear={data.birth_year}
      />
    </Layout>
  );
}
