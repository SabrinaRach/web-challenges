/* Use the `useRouter` hook to access the `id` query parameter from `router.query`.
- Fetch from `/api/products/[id]` (you need to interpolate the query `id` accordingly).
- The return statement does not return a list, but a single product. */

import { useRouter } from "next/router";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function DetailsPage() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useSWR(`/api/products/${id}`, fetcher);
  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <p>
        {data.price} {data.currency}
      </p>
      <p>{data.category}</p>
    </div>
  );
}
