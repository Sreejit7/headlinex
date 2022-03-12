import React from "react";

export const useFetch = (url) => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      await fetch(url)
        .then((res) => res.json())
        .then((data) => {
          if (data.errors) {
            setError(data.errors[0]);
          } else if (data.articles) {
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
