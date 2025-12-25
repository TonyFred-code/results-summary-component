import { useEffect, useState } from "react";
import fetchResults from "../helpers/fetchResults.js";

export default function useResults() {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchResults()
      .then((data) => setResults(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return { loading, error, results };
}
