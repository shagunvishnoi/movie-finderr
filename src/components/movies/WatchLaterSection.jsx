import React, { useState, useEffect } from 'react';
import { Star, Trash2, Play } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

const WatchLaterSection = ({ onMovieClick }) => {
  const [watchLater, setWatchLater] = useState(() => {
    const saved = localStorage.getItem('watchLater');
    return saved ? JSON.parse(saved) : [];
  });

  // Listen for localStorage changes to update the list in real-time
  useEffect(() => {
    const handleStorageChange = () => {
      const saved = localStorage.getItem('watchLater');
      setWatchLater(saved ? JSON.parse(saved) : []);
    };

    // Listen for storage events (when localStorage is updated from other components)
    window.addEventListener('storage', handleStorageChange);
    
    // Also check for updates periodically since storage events don't fire for same-origin updates
    const interval = setInterval(handleStorageChange, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const removeFromWatchLater = (movieId, e) => {
    e.stopPropagation();
    const newWatchLater = watchLater.filter(movie => movie.id !== movieId);
    setWatchLater(newWatchLater);
    localStorage.setItem('watchLater', JSON.stringify(newWatchLater));
  };

  if (watchLater.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="text-gray-400 mb-4">
          <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"/>
          </svg>
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">No movies in your Watch Later list</h3>
        <p className="text-gray-600 mb-6">Start adding movies you want to watch by clicking the + button on any movie card.</p>
        <Button 
          onClick={() => window.location.hash = '#all'}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Browse Movies
        </Button>
      </div>
    );
  }

  return (
    <div>
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Your Watch Later List</h2>
        <p className="text-gray-600">
          {watchLater.length} movie{watchLater.length !== 1 ? 's' : ''} saved to watch later
        </p>
      </div>

      {/* Movies Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {watchLater.map((movie) => (
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
                  onClick={(e) => removeFromWatchLater(movie.id, e)}
                  variant="outline"
                  size="sm"
                  className="bg-red-600 hover:bg-red-700 text-white border-red-600 shadow-lg"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
              <div className="absolute bottom-2 left-2">
                <div className="bg-black bg-opacity-75 text-white px-2 py-1 rounded text-xs font-medium">
                  Watch Later
                </div>
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
              <div className="flex gap-2">
                <Button variant="primary" size="sm" className="flex-1 flex items-center justify-center">
                  <Play className="h-4 w-4 mr-1" />
                  Watch Now
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  Details
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="mt-12 text-center">
        <div className="bg-gray-100 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Manage Your List</h3>
          <p className="text-gray-600 mb-4">
            Keep track of movies you want to watch. Your list is automatically saved and synced across sessions.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="outline" className="flex items-center justify-center">
              Clear All Movies
            </Button>
            <Button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700">
              Export List
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchLaterSection;