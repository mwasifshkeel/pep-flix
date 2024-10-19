import Header from "./components/Header";
import { useState, useEffect } from "react";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [movieData, setMovieData] = useState(null);
  const [queueItems, setQueueItems] = useState(() => {
    const savedQueueItems = localStorage.getItem("queueItems");
    return savedQueueItems ? JSON.parse(savedQueueItems) : [];
  });
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    async function fetchAPIData() {
      const url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      const today = new Date().toDateString();
      const localKey = `MOVIE-${today}`;

      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey));
        setMovieData(apiData.results);
        return;
      }

      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey, JSON.stringify(apiData));
        setMovieData(apiData);
      } catch (err) {
        console.log(err.message);
        setMovieData(null);
      }
    }

    fetchAPIData();
  }, []);

  useEffect(() => {
    localStorage.setItem("queueItems", JSON.stringify(queueItems));
  }, [queueItems]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header setQueueItems={setQueueItems} queueItems={queueItems} />
      {movieData ? (
        <Main
          queueItems={queueItems}
          setQueueItems={setQueueItems}
          movieData={movieData}
        />
      ) : (
        <div className="bg-zinc-700 loadingState">
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      <Footer />
    </div>
  );
}

export default App;
