import React, { useState, useEffect, useMemo } from 'react';
import { Star, Plus, Check } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

const MovieGrid = ({ searchTerm, onMovieClick }) => {
  const [watchLater, setWatchLater] = useState(() => {
    const saved = localStorage.getItem('watchLater');
    return saved ? JSON.parse(saved) : [];
  });

  // Mock movie data - in real app, this would come from TMDB API
  const allMovies = [
    {
      id: 1,
      title: "The Dark Knight",
      poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      genre: ["Action", "Crime", "Drama"],
      rating: 9.0,
      year: 2008,
      director: "Christopher Nolan",
      cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      description: "Batman raises the stakes in his war on crime with the help of Lt. Jim Gordon and prosecutor Harvey Dent."
    },
    {
      id: 2,
      title: "Inception",
      poster: "https://images.pexels.com/photos/7991622/pexels-photo-7991622.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      genre: ["Action", "Sci-Fi", "Thriller"],
      rating: 8.8,
      year: 2010,
      director: "Christopher Nolan",
      cast: ["Leonardo DiCaprio", "Marion Cotillard", "Tom Hardy"],
      description: "A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea."
    },
    {
      id: 3,
      title: "Interstellar",
      poster: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      genre: ["Adventure", "Drama", "Sci-Fi"],
      rating: 8.6,
      year: 2014,
      director: "Christopher Nolan",
      cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival."
    },
    {
      id: 4,
      title: "The Matrix",
      poster: "https://images.pexels.com/photos/7991481/pexels-photo-7991481.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      genre: ["Action", "Sci-Fi"],
      rating: 8.7,
      year: 1999,
      director: "The Wachowskis",
      cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
      description: "A computer hacker learns from mysterious rebels about the true nature of his reality."
    },
    {
      id: 5,
      title: "Avatar",
      poster: "https://images.pexels.com/photos/7991456/pexels-photo-7991456.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      genre: ["Action", "Adventure", "Fantasy"],
      rating: 7.9,
      year: 2009,
      director: "James Cameron",
      cast: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
      description: "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between duty and honor."
    },
    {
      id: 6,
      title: "Pulp Fiction",
      poster: "https://images.pexels.com/photos/7991220/pexels-photo-7991220.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      genre: ["Crime", "Drama"],
      rating: 8.9,
      year: 1994,
      director: "Quentin Tarantino",
      cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      description: "The lives of two mob hitmen, a boxer, a gangster and his wife intertwine in four tales of violence and redemption."
    }
  ];

  // Filter movies based on search term
  const filteredMovies = useMemo(() => {
    if (!searchTerm) return allMovies;
    
    const lowercaseSearch = searchTerm.toLowerCase();
    return allMovies.filter(movie => 
      movie.title.toLowerCase().includes(lowercaseSearch) ||
      movie.genre.some(g => g.toLowerCase().includes(lowercaseSearch)) ||
      movie.cast.some(actor => actor.toLowerCase().includes(lowercaseSearch)) ||
      movie.director.toLowerCase().includes(lowercaseSearch)
    );
  }, [searchTerm]);

  const handleWatchLater = (movie, e) => {
    e.stopPropagation();
    const isInWatchLater = watchLater.some(item => item.id === movie.id);
    let newWatchLater;
    
    if (isInWatchLater) {
      newWatchLater = watchLater.filter(item => item.id !== movie.id);
    } else {
      newWatchLater = [...watchLater, movie];
    }
    
    setWatchLater(newWatchLater);
    localStorage.setItem('watchLater', JSON.stringify(newWatchLater));
  };

  const isInWatchLater = (movieId) => {
    return watchLater.some(item => item.id === movieId);
  };

  return (
    <div>
      {/* Results Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {searchTerm ? `Search Results for "${searchTerm}"` : 'All Movies'}
        </h2>
        <p className="text-gray-600">
          {filteredMovies.length} movie{filteredMovies.length !== 1 ? 's' : ''} found
        </p>
      </div>

      {/* Movie Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <Card 
            key={movie.id} 
            hover
            onClick={() => onMovieClick(movie)}
            className="cursor-pointer"
          >
            <div className="relative">
              <img
                src={movie.poster}
                alt={movie.title}
                className="w-full h-80 object-cover rounded-t-lg"
              />
              <div className="absolute top-2 right-2">
                <Button
                  onClick={(e) => handleWatchLater(movie, e)}
                  variant={isInWatchLater(movie.id) ? 'primary' : 'outline'}
                  size="sm"
                  className={`${
                    isInWatchLater(movie.id) 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-white hover:bg-gray-50'
                  } shadow-lg`}
                >
                  {isInWatchLater(movie.id) ? <Check className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                </Button>
              </div>
            </div>
            <div className="p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex flex-wrap gap-1">
                  {(Array.isArray(movie.genre) ? movie.genre : []).slice(0, 2).map((genre, index) => (
                    <span key={index} className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                      {genre}
                    </span>
                  ))}
                </div>
                <div className="flex items-center">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="ml-1 text-sm font-medium text-gray-600">{movie.rating}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">{movie.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{movie.year} • {movie.director}</p>
              <p className="text-sm text-gray-600 line-clamp-2 mb-4">{movie.description}</p>
              <Button variant="outline" size="sm" className="w-full">
                View Details
              </Button>
            </div>
          </Card>
        ))}
      </div>

      {/* No Results */}
      {filteredMovies.length === 0 && (
        <div className="text-center py-16">
          <div className="text-gray-400 mb-4">
            <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7ZM9 8V17H11V8H9ZM13 8V17H15V8H13Z"/>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No movies found</h3>
          <p className="text-gray-600">Try adjusting your search criteria or browse all movies.</p>
        </div>
      )}
    </div>
  );
};

export default MovieGrid;