import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const faqs = [
    {
      id: 1,
      question: "Where do these movies come from?",
      answer: "Our movie database is powered by The Movie Database (TMDB), which provides comprehensive information about thousands of movies, including plot summaries, cast, crew, ratings, and more. This ensures you get accurate and up-to-date movie information."
    },
    {
      id: 2,
      question: "How is the rating calculated?",
      answer: "The ratings displayed are aggregated from multiple sources including TMDB user ratings, IMDb scores, and critic reviews. We use a weighted average system to provide the most accurate representation of a movie's quality and popularity."
    },
    {
      id: 3,
      question: "Can I watch movies directly on this platform?",
      answer: "MovieFinder is a movie discovery and information platform. We don't host or stream movies directly. However, we provide information about where you can watch each movie legally, including streaming services, rental platforms, and theaters."
    },
    {
      id: 4,
      question: "How do I save movies to my Watch Later list?",
      answer: "Simply click the '+' button on any movie card or the 'Add to Watch Later' button in the movie details. Your list is saved locally in your browser and will persist between sessions. You can view and manage your list anytime."
    },
    {
      id: 5,
      question: "Is there a mobile app available?",
      answer: "Currently, MovieFinder is a web-based platform that's fully responsive and works great on all devices. We're working on dedicated mobile apps for iOS and Android, which will be available in the near future."
    },
    {
      id: 6,
      question: "How often is the movie database updated?",
      answer: "Our database is updated daily with new releases, updated information, and fresh ratings. We sync with TMDB regularly to ensure you have access to the latest movies and the most current information."
    }
  ];

  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know about MovieFinder</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleItem(faq.id)}
                className="w-full px-6 py-4 text-left bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset transition-colors"
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                  {openItems[faq.id] ? (
                    <ChevronUp className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500 flex-shrink-0" />
                  )}
                </div>
              </button>
              
              {openItems[faq.id] && (
                <div className="px-6 pb-4 bg-gray-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors">
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;