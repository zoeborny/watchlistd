import { useState } from "react";

interface Movie {
  title: string;
  year: string | null;
  link: string;
}

function App() {
  const [username, setUsername] = useState("");
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  async function fetchWatchlist() {
    setLoading(true);

    console.log("[FRONTEND] Fetching watchlist for:", username);

    const res = await fetch(
      `http://localhost:3000/watchlist?username=${username}`,
    );
    const data = await res.json();

    setMovies(data.movies || []);
    setLoading(false);
  }

  return (
    <div style={{ padding: 24 }}>
      <h1>🎬 Watchlistd</h1>

      <input
        placeholder="Letterboxd username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <button onClick={fetchWatchlist}>Import Watchlist</button>

      {loading && <p>Loading…</p>}

      <ul>
        {movies.map((movie) => (
          <li key={movie.link}>
            <a href={movie.link} target="_blank">
              {movie.title} ({movie.year})
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
