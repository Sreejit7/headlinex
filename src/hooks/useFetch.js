import React from "react";

const apiKey = process.env.REACT_APP_NEWS_API_KEY;

export const useFetch = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  const headers = new Headers();
  headers.append("x-api-key", apiKey);
  headers.append("Access-Control-Allow-Origin", "*");

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await fetch(url, { headers })
        .then((res) => res.json())
        .then((data) => {
          if (data.status === "error") {
            setError(data.message);
          } else if (data.status === "ok") {
            setData(data.articles);
          }
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false));
    };
    if (url) {
      fetchData();
    }
  }, [url]);

  return {
    data,
    loading,
    error,
  };
};
