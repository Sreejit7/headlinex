import React from "react";
import Headline from "../../components/Headline";
import { useSearchContext } from "../../contexts/useSearchContext";
import { useDebounce } from "../../hooks/useDebounce";
import { useFetch } from "../../hooks/useFetch";

const newBaseUrl = "https://newsapi.org/v2/top-headlines?language=en";

const NewsList = () => {
  const [url, setUrl] = React.useState("");

  const { data: newsList, error, loading } = useFetch(url);

  const {
    state: { search },
  } = useSearchContext();

  const debouncedSearchValue = useDebounce(search, 500);

  React.useEffect(() => {
    if (debouncedSearchValue) {
      setUrl(`${newBaseUrl}&q=${debouncedSearchValue}`);
    } else {
      setUrl(newBaseUrl);
    }
  }, [debouncedSearchValue]);

  if (loading || error) {
    return (
      <section className="h-full md:h-72 w-full py-6 px-8 md:px-20 text-center flex flex-col items-center justify-center gap-4">
        <h1
          className={`text-2xl font-bold ${
            loading ? "text-blue-500" : "text-red-500"
          }`}
        >
          {loading
            ? `Loading
        ${search ? `top news related to ${search}` : `breaking news`}
        , please wait...`
            : `Whoops, an error occurred!`}
        </h1>
        {!loading && error && <span className="text-red-400">{error}</span>}
        {!loading && error && (
          <span className="text-sm text-red-300 flex flex-col gap-1">
            <p>P.S: This error is intended for the owner of this website.</p>
            <p>
              {" "}
              If this error says daily request limit reached, it's because the
              owner isn't yet rich enough to afford the premium plan 😔
            </p>
          </span>
        )}
      </section>
    );
  }

  return (
    <ul className="flex flex-col gap-4 md:gap-2 mx-2 my-4">
      {newsList?.map((news) => (
        <Headline key={news.url} news={news} />
      ))}
    </ul>
  );
};

export default NewsList;
