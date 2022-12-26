import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Product } from "./Components/Product";
//import { toys } from "./data/products";
import { IProduct } from "./models";

function App() {
  // Local State for products
  const [toys, setToys] = useState<IProduct[]>([]);

  // Showing loading and error on load
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch products on Page Load with asynchronous query
  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setToys(response.data);
      setLoading(false);
    } catch (e: unknown) {
      const error = e as AxiosError;
      setLoading(false);
      setError(error.message);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  // Iteration of toys with map method
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-600">{error}</p>}
      {toys.map((toy) => (
        <Product toy={toy} key={toy.id} />
      ))}
    </div>
  );
}

export default App;
