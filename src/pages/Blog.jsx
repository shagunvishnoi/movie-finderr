import React, { useState } from 'react';
import { Mail, Calendar, User, ArrowRight } from 'lucide-react';
import Card from '../components/common/Card';
import Button from '../components/common/Button';

const Blog = () => {
  const [email, setEmail] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Evolution of Superhero Movies",
      excerpt: "From comic books to blockbuster films, explore how superhero movies have transformed cinema over the decades.",
      author: "Alex Rivera",
      date: "March 15, 2025",
      image: "https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Analysis"
    },
    {
      id: 2,
      title: "Hidden Gems: International Cinema",
      excerpt: "Discover amazing films from around the world that deserve more recognition in international markets.",
      author: "Jessica Park",
      date: "March 12, 2025",
      image: "https://images.pexels.com/photos/7991225/pexels-photo-7991225.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Recommendations"
    },
    {
      id: 3,
      title: "The Art of Movie Soundtracks",
      excerpt: "How music elevates storytelling and creates emotional connections in cinema's greatest films.",
      author: "David Kim",
      date: "March 10, 2025",
      image: "https://images.pexels.com/photos/7991622/pexels-photo-7991622.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Culture"
    },
    {
      id: 4,
      title: "Future of Streaming Platforms",
      excerpt: "What's next for streaming services and how they're changing the way we consume entertainment.",
      author: "Maria Gonzalez",
      date: "March 8, 2025",
      image: "https://images.pexels.com/photos/7991481/pexels-photo-7991481.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Industry"
    },
    {
      id: 5,
      title: "Behind the Scenes: Movie Magic",
      excerpt: "Explore the incredible technology and artistry that brings our favorite films to life.",
      author: "Alex Rivera",
      date: "March 5, 2025",
      image: "https://images.pexels.com/photos/7991456/pexels-photo-7991456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Technical"
    },
    {
      id: 6,
      title: "Classic Movies for Modern Audiences",
      excerpt: "Timeless films that remain relevant and entertaining for today's movie lovers.",
      author: "Jessica Park",
      date: "March 3, 2025",
      image: "https://images.pexels.com/photos/7991220/pexels-photo-7991220.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      category: "Classics"
    }
  ];

  const categories = ['All', 'Analysis', 'Recommendations', 'Culture', 'Industry', 'Technical', 'Classics'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = selectedCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Our Blog</h1>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Insights, reviews, and stories from the world of cinema. Stay updated with the latest movie news and analysis.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} hover className="h-full flex flex-col">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-purple-600 bg-purple-100 px-2 py-1 rounded">
                      {post.category}
                    </span>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 flex-1 line-clamp-3">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-500 text-sm">
                      <User className="h-4 w-4 mr-1" />
                      {post.author}
                    </div>
                    <Button variant="outline" size="sm" className="flex items-center">
                      Read More
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-lg mb-6">
            <Mail className="h-8 w-8 text-blue-600" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with Movie News
          </h2>
          
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and get the latest movie reviews, industry news, and exclusive content delivered to your inbox.
          </p>
          
          <form onSubmit={handleNewsletterSubmit} className="max-w-md mx-auto">
            <div className="flex">
              <input
                type="email"
                required
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded-l-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
              />
              <Button 
                type="submit"
                className="rounded-l-none bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6"
              >
                Subscribe
              </Button>
            </div>
            <p className="text-blue-100 text-sm mt-2">
              No spam, unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;