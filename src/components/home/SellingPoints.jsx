import React from 'react';
import { Database, Bookmark } from 'lucide-react';

const SellingPoints = () => {
  const points = [
    {
      icon: Database,
      title: "Powered by TMDB",
      description: "Access to comprehensive movie database with detailed information, cast, crew, and ratings from The Movie Database (TMDB).",
      image: "https://images.pexels.com/photos/7991456/pexels-photo-7991456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      reverse: false
    },
    {
      icon: Bookmark,
      title: "Save Movies to Watch Later",
      description: "Create your personal watchlist and never forget about movies you want to see. Access your saved movies anytime, anywhere.",
      image: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      reverse: true
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MovieFinder?</h2>
          <p className="text-xl text-gray-600">Everything you need to discover and track your favorite movies</p>
        </div>

        <div className="space-y-20">
          {points.map((point, index) => (
            <div key={index} className={`flex flex-col lg:flex-row items-center gap-12 ${point.reverse ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-80 object-cover rounded-xl shadow-lg"
                />
              </div>
              <div className="flex-1 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                      <point.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{point.title}</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{point.description}</p>
                <div className="flex space-x-4">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                    Learn More
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SellingPoints;