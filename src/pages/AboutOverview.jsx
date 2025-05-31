// src/pages/AboutOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';

function AboutOverview() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">About Our Platform</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Learn about our mission and how we're building smarter, more responsive cities through collaboration
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Mission Statement */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Mission</h2>
          <p className="text-lg text-gray-600 mb-6">
            The Smart City Collaborative Dashboard is a platform designed to bridge the gap between citizens, city officials, and administrators, creating a more transparent, efficient, and responsive urban environment.
          </p>
          <p className="text-lg text-gray-600">
            Our mission is to empower communities through technology, enabling real-time collaboration that addresses urban challenges, improves quality of life, and creates more sustainable cities for future generations.
          </p>
        </div>

        {/* Key Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            // src/pages/AboutOverview.jsx (continued)
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Issue Reporting & Tracking</h3>
              <p className="text-gray-600">
                Citizens can easily report urban issues with location data and photos. Officials can track, assign, and update issue status in real-time.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Proposals & Voting</h3>
              <p className="text-gray-600">
                Transparent community decision-making through digital proposal submissions and secure voting on urban initiatives.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Direct Communication</h3>
              <p className="text-gray-600">
                Dedicated channels for citizens to communicate with department officials, ensuring faster response times and better service.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Department Performance</h3>
              <p className="text-gray-600">
                Transparent metrics showing department efficiency, response times, and citizen satisfaction ratings.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Real-time Monitoring</h3>
              <p className="text-gray-600">
                Live updates on city services, infrastructure status, and ongoing projects for complete transparency.
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
              <div className="h-12 w-12 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white mb-4">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">AR Technology</h3>
              <p className="text-gray-600">
                Innovative augmented reality features for visualizing urban projects and reporting issues with enhanced spatial context.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How It Works</h2>
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <ol className="relative border-l border-gray-200">
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full -left-4 ring-4 ring-white">
                    <span className="text-white font-bold">1</span>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Citizen Reporting</h3>
                  <p className="mb-4 text-base font-normal text-gray-600">
                    Citizens identify issues in their community and report them through our platform using detailed forms or AR-assisted reporting.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full -left-4 ring-4 ring-white">
                    <span className="text-white font-bold">2</span>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Department Assignment</h3>
                  <p className="mb-4 text-base font-normal text-gray-600">
                    Reports are automatically categorized and assigned to the appropriate city department for review and action.
                  </p>
                </li>
                <li className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full -left-4 ring-4 ring-white">
                    <span className="text-white font-bold">3</span>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Official Response</h3>
                  <p className="mb-4 text-base font-normal text-gray-600">
                    Department officials review, prioritize, and respond to issues, updating citizens on progress and estimated resolution times.
                  </p>
                </li>
                <li className="ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 bg-gradient-to-r from-teal-500 to-blue-600 rounded-full -left-4 ring-4 ring-white">
                    <span className="text-white font-bold">4</span>
                  </span>
                  <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900">Resolution & Feedback</h3>
                  <p className="mb-4 text-base font-normal text-gray-600">
                    Once resolved, citizens can verify the solution and provide feedback, creating a continuous improvement loop.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* Learn More */}
        <div className="bg-gray-50 rounded-xl border border-gray-200 p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Learn More About Our Platform</h2>
          <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
            Discover how our innovative features can help transform your city into a more responsive, efficient, and collaborative community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/about/ar-guide" className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300">
              AR Feature Guide
            </Link>
            <Link to="/features" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300">
              Platform Features
            </Link>
            <Link to="/contact" className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutOverview;