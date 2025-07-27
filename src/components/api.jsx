import React, { useState } from "react";

// Replace with your OMDb API key
const OMDB_API_KEY = "YOUR_OMDB_API_KEY";

function ExampleFetch() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [detailsLoading, setDetailsLoading] = useState(false);
  const [detailsError, setDetailsError] = useState(null);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    setLoading(true);
    setError(null);
    setData(null);
    setSelectedMovie(null);
    fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${encodeURIComponent(query)}`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((json) => {
        if (json.Response === "False") {
          setError(json.Error || "No results found.");
          setData(null);
        } else {
          setData(json.Search);
        }
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  const handleViewDetails = (imdbID) => {
    setDetailsLoading(true);
    setDetailsError(null);
    setSelectedMovie(null);
    fetch(`https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${imdbID}`)
      .then((response) => {
        if (!response.ok) throw new Error("Network response was not ok");
        return response.json();
      })
      .then((json) => {
        if (json.Response === "False") {
          setDetailsError(json.Error || "No details found.");
          setSelectedMovie(null);
        } else {
          setSelectedMovie(json);
        }
        setDetailsLoading(false);
      })
      .catch((err) => {
        setDetailsError(err.message);
        setDetailsLoading(false);
      });
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", padding: 24, border: "1px solid #eee", borderRadius: 8 }}>
      <h2 style={{ marginBottom: 16 }}>Movie Search (OMDb API)</h2>
      <form onSubmit={handleSearch} style={{ marginBottom: 16 }}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Enter movie title..."
          style={{ padding: 8, width: "70%", marginRight: 8 }}
        />
        <button type="submit" style={{ padding: 8 }}>Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div style={{ color: "red" }}>Error: {error}</div>}
      {data && (
        <div style={{ marginTop: 16 }}>
          <h3>Results:</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {data.map((movie) => (
              <li key={movie.imdbID} style={{ marginBottom: 12, display: "flex", alignItems: "center" }}>
                {movie.Poster && movie.Poster !== "N/A" && (
                  <img src={movie.Poster} alt={movie.Title} style={{ width: 50, marginRight: 12, borderRadius: 4 }} />
                )}
                <span style={{ flex: 1 }}>{movie.Title} ({movie.Year})</span>
                <button onClick={() => handleViewDetails(movie.imdbID)} style={{ padding: "4px 10px", marginLeft: 8 }}>
                  View Details
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {detailsLoading && <div>Loading details...</div>}
      {detailsError && <div style={{ color: "red" }}>Error: {detailsError}</div>}
      {selectedMovie && (
        <div style={{ marginTop: 24, padding: 16, border: "1px solid #ccc", borderRadius: 8, background: "#fafafa" }}>
          <h3>{selectedMovie.Title} ({selectedMovie.Year})</h3>
          {selectedMovie.Poster && selectedMovie.Poster !== "N/A" && (
            <img src={selectedMovie.Poster} alt={selectedMovie.Title} style={{ width: 120, margin: "12px 0", borderRadius: 6 }} />
          )}
          <p><strong>Genre:</strong> {selectedMovie.Genre}</p>
          <p><strong>Director:</strong> {selectedMovie.Director}</p>
          <p><strong>Actors:</strong> {selectedMovie.Actors}</p>
          <p><strong>Plot:</strong> {selectedMovie.Plot}</p>
          <p><strong>IMDB Rating:</strong> {selectedMovie.imdbRating}</p>
          <button onClick={() => setSelectedMovie(null)} style={{ marginTop: 12, padding: "4px 10px" }}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ExampleFetch;
