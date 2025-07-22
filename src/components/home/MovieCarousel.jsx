import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star, Plus } from 'lucide-react';
import Card from '../common/Card';
import Button from '../common/Button';

const MovieCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [watchLater, setWatchLater] = useState(() => {
    const saved = localStorage.getItem('watchLater');
    return saved ? JSON.parse(saved) : [];
  });

  // Mock movie data - in real app, this would come from TMDB API
  const movies = [
    {
      id: 1,
      title: "The Dark Knight",
      poster: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      genre: ["Action", "Crime"],
      rating: 9.0,
      year: 2008
    },
    {
      id: 2,
      title: "Inception",
      poster: "https://images.pexels.com/photos/7991622/pexels-photo-7991622.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      genre: ["Sci-Fi", "Thriller"],
      rating: 8.8,
      year: 2010
    },
    {
      id: 3,
      title: "Interstellar",
      poster: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      genre: ["Drama", "Sci-Fi"],
      rating: 8.6,
      year: 2014
    },
    {
      id: 4,
      title: "The Matrix",
      poster: "https://images.pexels.com/photos/7991481/pexels-photo-7991481.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      genre: ["Action", "Sci-Fi"],
      rating: 8.7,
      year: 1999
    },
    {
      id: 5,
      title: "Avatar",
      poster: "https://images.pexels.com/photos/7991456/pexels-photo-7991456.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      genre: ["Adventure", "Fantasy"],
      rating: 7.9,
      year: 2009
    }
  ];

  const handleWatchLater = (movie) => {
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % movies.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + movies.length) % movies.length);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Trending Movies</h2>
          <p className="text-xl text-gray-600">Discover the most popular movies right now</p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-gray-600" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-gray-600" />
          </button>

          {/* Movie Cards */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / Math.min(movies.length, 4))}%)` }}
            >
              {movies.map((movie) => (
                <div key={movie.id} className="flex-none w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 px-2">
                  <Card hover className="h-full">
                    <div className="relative">
                      <img
                        src={movie.poster}
                        alt={movie.title}
                        className="w-full h-80 object-cover rounded-t-lg"
                      />
                      <div className="absolute top-2 right-2">
                        <Button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleWatchLater(movie);
                          }}
                          variant={watchLater.some(item => item.id === movie.id) ? 'primary' : 'outline'}
                          size="sm"
                          className={watchLater.some(item => item.id === movie.id) ? 'bg-green-600 hover:bg-green-700' : ''}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                          {movie.genre[0]}
                        </span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 fill-current" />
                          <span className="ml-1 text-sm font-medium text-gray-600">{movie.rating}</span>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-1">{movie.title}</h3>
                      <p className="text-sm text-gray-500 mb-4">{movie.year}</p>
                      <Button variant="outline" size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MovieCarousel;