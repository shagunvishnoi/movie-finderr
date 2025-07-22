import React, { useState } from 'react';
import { Search, Filter, Star } from 'lucide-react';
import MovieGrid from '../components/movies/MovieGrid';
import MovieDetail from '../components/movies/MovieDetails';
import FAQ from '../components/movies/FAQ';
import WatchLaterSection from '../components/movies/WatchLaterSection';

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all'); // 'all' or 'watchlater'

  const handleMovieClick = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Explore Our Movie Collection
          </h1>
          <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
            Discover thousands of movies across all genres, from blockbuster hits to hidden gems waiting to be found.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search movies by title, genre, or actor..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 pl-12 pr-16 text-gray-900 bg-white rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <button className="absolute right-2 top-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Filter className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'all'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All Movies
            </button>
            <button
              onClick={() => setActiveTab('watchlater')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'watchlater'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Watch Later
            </button>
          </div>
        </div>
      </section>
      {/* Content based on active tab */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'all' ? (
            <MovieGrid 
              searchTerm={searchTerm}
              onMovieClick={handleMovieClick}
            />
          ) : (
            <WatchLaterSection 
              onMovieClick={handleMovieClick}
            />
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* Movie Detail Modal */}
      <MovieDetail 
        movie={selectedMovie}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </div>
  );
};

export default Movies;