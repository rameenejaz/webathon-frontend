import React from 'react';
import { Link } from 'react-router-dom';

const Transport = () => {
  // Sample data
  const stats = [
    { 
      name: 'Open Issues', 
      value: '24', 
      change: '+3 from last week', 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    { 
      name: 'Resolved This Week', 
      value: '18', 
      change: '+5 from previous week', 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    { 
      name: 'Avg. Resolution Time', 
      value: '3.2 days', 
      change: '-0.5 days from last month', 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const projects = [
    {
      title: 'Smart Traffic Management System',
      description: 'AI-powered traffic light optimization to reduce congestion and improve traffic flow across major intersections.',
      startDate: 'Mar 15, 2023',
      endDate: 'Dec 10, 2023',
      progress: 65,
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Public Transit Tracking App',
      description: 'Real-time bus and metro tracking system with predictive arrival times and crowdedness indicators.',
      startDate: 'Jan 5, 2023',
      endDate: 'Sep 30, 2023',
      progress: 80,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Bicycle Lane Expansion',
      description: 'Adding 15km of protected bicycle lanes to promote sustainable transportation and reduce carbon emissions.',
      startDate: 'Apr 20, 2023',
      endDate: 'Nov 15, 2023',
      progress: 40,
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const issues = [
    {
      id: 'ISS-2347',
      title: 'Traffic light malfunction at 5th & Main',
      priority: 'high',
      reported: '3 hours ago',
      description: 'Traffic light showing green in all directions simultaneously.',
      location: 'Downtown, 5th Avenue & Main Street'
    },
    {
      id: 'ISS-2342',
      title: 'Bus shelter damaged by storm',
      priority: 'medium',
      reported: '2 days ago',
      description: 'Glass panels broken and roof partially collapsed after last night\'s storm.',
      location: 'Westside, Route 34 Stop #12'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="relative bg-gradient-to-r from-blue-600 to-teal-500 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1494522358652-f30e61a60313?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-900/30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl lg:text-6xl">
              Transport Department
            </h1>
            <p className="mt-6 text-xl text-blue-100 max-w-3xl">
              Managing urban mobility solutions for a smarter, more connected city. We oversee public transit, traffic management, and sustainable transportation initiatives.
            </p>
            <div className="mt-8 flex space-x-4">
              <Link to="/issues/report" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-800 bg-opacity-60 backdrop-blur-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
                Report an Issue
              </Link>
              <Link to="/departments" className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-blue-100 bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200">
                View All Departments
              </Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Key Stats Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Department Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 transform hover:shadow-lg hover:scale-105"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-12 w-12 rounded-md bg-gradient-to-r from-blue-500 to-teal-500 flex items-center justify-center text-white">
                    {stat.icon}
                  </div>
                  <div className="ml-5">
                    <p className="text-sm font-medium text-gray-500 truncate">{stat.name}</p>
                    <p className="mt-1 text-3xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="text-sm font-medium text-teal-600">{stat.change}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Projects Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-8">Ongoing Projects</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:scale-105"
              >
                <div className="h-40 bg-gray-200 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <h3 className="text-lg font-semibold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                  <div className="flex justify-between text-xs text-gray-500 mb-3">
                    <span>Started: {project.startDate}</span>
                    <span>Target: {project.endDate}</span>
                  </div>
                  <div className="relative pt-1">
                    <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
                      <div 
                        style={{ width: `${project.progress}%` }} 
                        className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r from-teal-500 to-blue-600"
                      ></div>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-600 font-semibold">Progress</span>
                      <span className="text-gray-600 font-semibold">{project.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Issues Preview */}
        <div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-gray-800">Recent Issues</h2>
            <Link to="/issues/reported" className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
              View all issues
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {issues.map((issue, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 transform hover:shadow-lg"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{issue.title}</h3>
                    <p className="text-sm text-gray-500 mt-1">{issue.location}</p>
                  </div>
                  <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    issue.priority === 'high' 
                      ? 'bg-red-100 text-red-800' 
                      : issue.priority === 'medium'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1)} Priority
                  </span>
                </div>
                <p className="mt-3 text-sm text-gray-600">{issue.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-xs text-gray-500">ID: {issue.id}</span>
                  <span className="text-xs text-gray-500">Reported {issue.reported}</span>
                </div>
                <div className="mt-4 flex space-x-3">
                  <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    View Details
                  </button>
                  <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
                    Assign
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-gradient-to-r from-blue-600 to-teal-500 md:w-48 flex items-center justify-center">
              <svg className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Need assistance?</div>
              <h3 className="mt-1 text-xl font-medium text-gray-900">Contact the Transport Department</h3>
              <p className="mt-2 text-gray-600">
                For urgent matters, please call our 24/7 hotline. For general inquiries, you can email us or use the contact form.
              </p>
              <div className="mt-4 space-y-2">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className="text-gray-700">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-gray-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">transport@smartcity.gov</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transport;
