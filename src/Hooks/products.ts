// Custom hook (names with use)

import { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { IProduct } from "../models";

export function useProducts() {
  // Local State for items
  const [items, setItems] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

 function addItem(item: IProduct) {
  setItems(prev => [...prev, item])
 }

  // Fetch products on Page Load with asynchronous query
  async function fetchProducts() {
    try {
      setError("");
      setLoading(true);
      const response = await axios.get<IProduct[]>(
        "https://fakestoreapi.com/products?limit=5"
      );
      setItems(response.data);
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

  // TODO: Returning from this function
  return { items, error, loading, addItem };
}
