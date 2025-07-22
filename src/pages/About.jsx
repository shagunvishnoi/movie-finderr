import React from 'react';
import { Users, Target, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);

  const teamMembers = [
    {
      id: 1,
      name: "Alex Rivera",
      role: "Founder & CEO",
      bio: "Film enthusiast with 10+ years in tech. Started MovieFinder to help people discover great movies.",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 2,
      name: "Jessica Park",
      role: "Head of Product",
      bio: "Former Netflix product manager passionate about creating intuitive movie discovery experiences.",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 3,
      name: "David Kim",
      role: "Lead Developer",
      bio: "Full-stack engineer who loves building scalable platforms for movie and entertainment data.",
      avatar: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    },
    {
      id: 4,
      name: "Maria Gonzalez",
      role: "UX Designer",
      bio: "Award-winning designer focused on creating beautiful, user-friendly interfaces for entertainment apps.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
    }
  ];

  const nextTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev + 1) % teamMembers.length);
  };

  const prevTeamMember = () => {
    setCurrentTeamIndex((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative py-24 bg-cover bg-center bg-gray-900"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(https://images.pexels.com/photos/7991456/pexels-photo-7991456.jpeg?auto=compress&cs=tinysrgb&w=1920&h=800&fit=crop)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About MovieFinder
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            We're passionate about connecting people with great movies through innovative technology and comprehensive data.
          </p>
        </div>
      </section>

      {/* Company History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Story</h2>
            <div className="prose prose-lg mx-auto text-gray-600">
              <p className="mb-6">
                MovieFinder was born from a simple frustration: spending more time searching for something to watch than actually watching it. Founded in 2023 by a team of film lovers and tech enthusiasts, we set out to create the ultimate movie discovery platform.
              </p>
              <p className="mb-6">
                What started as a weekend project quickly evolved into a comprehensive platform that helps millions of users discover their next favorite film. We believe that everyone deserves access to great cinema, regardless of their taste or budget.
              </p>
              <p>
                Today, MovieFinder combines cutting-edge technology with the world's most comprehensive movie database to deliver personalized recommendations and seamless discovery experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-lg mb-6">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To democratize movie discovery by providing everyone with access to comprehensive film data, personalized recommendations, and tools to build their perfect watchlist. We make it easy to find movies you'll love.
              </p>
            </div>

            {/* Vision */}
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-lg mb-6">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                To become the world's most trusted movie discovery platform, where every film lover can find their next great cinematic experience. We envision a world where no great movie goes unwatched.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-lg mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600">The passionate people behind MovieFinder</p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Navigation Buttons */}
            <button
              onClick={prevTeamMember}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="h-6 w-6 text-gray-600" />
            </button>
            
            <button
              onClick={nextTeamMember}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>

            {/* Team Member Card */}
            <div className="bg-gray-50 rounded-xl p-8 mx-12 text-center">
              <img
                src={teamMembers[currentTeamIndex].avatar}
                alt={teamMembers[currentTeamIndex].name}
                className="w-32 h-32 rounded-full mx-auto mb-6 object-cover shadow-lg"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {teamMembers[currentTeamIndex].name}
              </h3>
              <p className="text-lg text-blue-600 font-medium mb-4">
                {teamMembers[currentTeamIndex].role}
              </p>
              <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
                {teamMembers[currentTeamIndex].bio}
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentTeamIndex === index ? 'bg-blue-500' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;