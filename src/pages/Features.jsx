import React from 'react'
import { Link } from 'react-router-dom'

function Features() {
  // Feature card component
  const FeatureCard = ({ icon, title, description, linkTo }) => (
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
      <div className="bg-gradient-to-r from-teal-500/20 to-blue-600/20 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      {linkTo && (
        <Link to={linkTo} className="text-teal-600 hover:text-teal-700 font-medium flex items-center">
          Learn more
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Powerful Features for a Smarter City
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl mx-auto">
              Explore the tools and capabilities that make our Smart City Collaborative Dashboard the ultimate platform for citizen-government cooperation.
            </p>
          </div>
        </div>
      </div>

      {/* Main Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Core Features</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform offers a comprehensive set of tools designed to improve urban living through collaboration and transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              title="Issue Reporting & Tracking"
              description="Easily report urban issues with photos and location data. Track the status of your reports from submission to resolution."
              linkTo="/issues/report"
            />
            
            <FeatureCard
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>}
              title="Interactive City Map"
              description="Navigate through a detailed map of your city with issue markers, department facilities, and ongoing projects."
              linkTo="/map"
            />
            
            <FeatureCard
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" /></svg>}
              title="Real-time Communication"
              description="Direct messaging between citizens and department officials for faster issue resolution and updates."
              linkTo="/communication/chat"
            />
            
            <FeatureCard
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
              title="Proposal & Voting System"
              description="Participate in community decisions through transparent voting on city proposals and initiatives."
              linkTo="/proposals/view"
            />
            
            <FeatureCard
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>}
              title="Department Performance Metrics"
              description="Track key performance indicators across city departments with transparent, data-driven insights."
              linkTo="/departments"
            />
            
            <FeatureCard
              icon={<svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>}
              title="AR Integration"
              description="Experience augmented reality views of city issues and proposed solutions in your actual environment."
              linkTo="/map/ar"
            />
          </div>
        </div>
      </section>

      {/* Role-Based Features */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Role-Based Features</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform provides tailored experiences for different user roles to ensure everyone has the tools they need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Citizen Features */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-teal-500 to-blue-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">For Citizens</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Report and track urban issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Vote on community proposals</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Communicate with department officials</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Receive notifications on issue updates</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Explore city map with AR capabilities</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/signup" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                    Sign up as a Citizen
                  </Link>
                </div>
              </div>
            </div>

            {/* Department Official Features */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-purple-500 to-indigo-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">For Department Officials</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Manage and assign reported issues</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Update issue status and resolution</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Communicate directly with citizens</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Track department performance metrics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-purple-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Coordinate with other departments</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/signup" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700">
                    Sign up as an Official
                  </Link>
                </div>
              </div>
            </div>

            {/* Admin Features */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="bg-gradient-to-r from-amber-500 to-red-600 px-6 py-4">
                <h3 className="text-xl font-bold text-white">For Administrators</h3>
              </div>
              <div className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Comprehensive dashboard with city-wide metrics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>User management and role assignments</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Create and manage proposals for voting</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Generate reports and analytics</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-6 w-6 text-amber-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>System configuration and automation rules</span>
                  </li>
                </ul>
                <div className="mt-6">
                  <Link to="/signup" className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-amber-500 to-red-600 hover:from-amber-600 hover:to-red-700">
                    Sign up as an Administrator
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AR Features Highlight */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Augmented Reality Integration</h2>
              <p className="text-lg text-gray-600 mb-6">
                Experience your city in a whole new way with our cutting-edge AR features that bring urban planning and issue reporting into the real world.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Point your camera at city infrastructure to see reported issues</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Visualize proposed changes to your neighborhood</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Report issues by simply pointing your camera at the problem</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-6 w-6 text-teal-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Navigate to nearby city services with AR directions</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/map/ar" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700">
                  Try AR Features
                </Link>
              </div>
            </div>
            <div className="mt-10 lg:mt-0 bg-gray-200 rounded-xl h-96 flex items-center justify-center">
              <div className="text-center p-6">
                <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="mt-4 text-gray-500">AR Preview Image</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to experience a smarter city?</h2>
          <p className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Join our growing community of citizens, officials, and administrators working together for a better urban environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="px-8 py-3 bg-white text-teal-600 rounded-lg font-medium text-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg">
              Get Started
            </Link>
            <Link to="/demo" className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-lg font-medium text-lg hover:bg-white hover:text-teal-600 transition-colors duration-300">
              Request a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Features