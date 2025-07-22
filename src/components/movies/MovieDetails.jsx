import React, { useState } from 'react';
import { Star, Calendar, User, Clock, Plus, Check, Play } from 'lucide-react';
import Modal from '../common/Modal';
import Button from '../common/Button';

const MovieDetail = ({ movie, isOpen, onClose }) => {
  const [watchLater, setWatchLater] = useState(() => {
    const saved = localStorage.getItem('watchLater');
    return saved ? JSON.parse(saved) : [];
  });

  if (!movie) return null;

  const handleWatchLater = () => {
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

  const isInWatchLater = watchLater.some(item => item.id === movie.id);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="lg" title="Movie Details">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Poster */}
        <div>
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-96 md:h-full object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Details */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">{movie.title}</h2>
          
          {/* Rating and Year */}
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="ml-1 text-lg font-medium text-gray-700">{movie.rating}/10</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{movie.year}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-4 w-4 mr-1" />
              <span>2h 32m</span> {/* Mock duration */}
            </div>
          </div>

          {/* Genres */}
          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              {(Array.isArray(movie.genre) ? movie.genre : []).map((genre, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {genre}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Plot</h3>
            <p className="text-gray-600 leading-relaxed">{movie.description}</p>
          </div>

          {/* Director */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Director</h3>
            <div className="flex items-center text-gray-600">
              <User className="h-4 w-4 mr-2" />
              <span>{movie.director}</span>
            </div>
          </div>

          {/* Cast */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Cast</h3>
            <div className="space-y-1">
              {movie.cast.map((actor, index) => (
                <div key={index} className="text-gray-600">
                  {actor}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button 
              onClick={handleWatchLater}
              variant={isInWatchLater ? 'secondary' : 'primary'}
              className={`flex items-center justify-center ${
                isInWatchLater ? 'bg-green-100 text-green-800 hover:bg-green-200' : ''
              }`}
            >
              {isInWatchLater ? <Check className="h-4 w-4 mr-2" /> : <Plus className="h-4 w-4 mr-2" />}
              {isInWatchLater ? 'In Watch Later' : 'Add to Watch Later'}
            </Button>
            <Button variant="outline" className="flex items-center justify-center">
              <Play className="h-4 w-4 mr-2" />
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MovieDetail;