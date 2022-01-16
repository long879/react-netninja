import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw new Error("could not fetch the data for that resource");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError();
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
