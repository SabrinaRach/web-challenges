/* Import the `useSWR` hook, create a fetcher and fetch `/api/products`.
- Map over the fetched `data` object to create a list of all products where you display their information. */

import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function HomePage() {
  const {data} = useSWR('/api/products', fetcher)
  if (!data) {
    return <p>Loading...</p>
  }

  return (
    <div>
      <h1>Products</h1>
      {data.map((product) => (
      <div  key={product.id}>
       <h2>{product.name}</h2> 
        <p>{product.description}</p>
        <p>{product.price} {product.currency}</p>
        <p>{product.category}</p> 
        </div>   
      ))}
    </div>
  );
}
