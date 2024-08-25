import { useState, useEffect } from "react";

function useFeatch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const url = "https://jsonplaceholder.typicode.com/todos/1"
  useEffect(() => {
    setLoading(true);
    async function featchData() {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw Error("Something went wrong");
        }
        const resData = await res.json();
        setData(resData);
        // setLoading(false);
        setError(null);
      } catch (error) {
        setError(error.message);
        // setLoading(false);
      } finally {
        // finaly always run so rather than useing affter setData and in catch block affter setError we use only once in finally block
        setLoading(false);
      }
    }
    featchData();
  }, [url]);
  return { data, loading, error };
}

export default useFeatch;
