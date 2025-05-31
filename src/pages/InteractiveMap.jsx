import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const InteractiveMap = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  
  // In a real app, these would be fetched from an API and would include geolocation data
  const issues = [
    {
      id: 'ISS-2347',
      title: 'Traffic light malfunction',
      department: 'transport',
      priority: 'high',
      status: 'open',
      location: 'Downtown, 5th Avenue & Main Street',
      lat: 40.7128,
      lng: -74.006,
    },
    {
      id: 'ISS-2342',
      title: 'Garbage overflow',
      department: 'sanitation',
      priority: 'medium',
      status: 'in-progress',
      location: 'Westside Park entrance',
      lat: 40.7138,
      lng: -74.016,
    },
    {
      id: 'ISS-2339',
      title: 'Pothole on residential street',
      department: 'transport',
      priority: 'medium',
      status: 'open',
      location: 'Oak Street between 3rd and 4th',
      lat: 40.7148,
      lng: -74.026,
    },
    {
      id: 'ISS-2336',
      title: 'Broken park bench',
      department: 'parks',
      priority: 'low',
      status: 'resolved',
      location: 'Central Park, near the lake',
      lat: 40.7158,
      lng: -74.036,
    },
  ];
  
  const filteredIssues = issues.filter(issue => {
    if (activeFilter !== 'all' && issue.status !== activeFilter) return false;
    if (selectedDepartment !== 'all' && issue.department !== selectedDepartment) return false;
    return true;
  });
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-red-100 text-red-800';
      case 'in-progress': return 'bg-blue-100 text-blue-800';
      case 'resolved': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };
  
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Interactive City Map</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Explore issues and initiatives across the city. Filter by department, status, or priority to find what matters to you.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Filters</h2>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Status</h3>
                <div className="space-y-2">
                  <button 
                    onClick={() => setActiveFilter('all')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      activeFilter === 'all' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    All Issues
                  </button>
                  <button 
                    onClick={() => setActiveFilter('open')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      activeFilter === 'open' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Open
                  </button>
                  <button 
                    onClick={() => setActiveFilter('in-progress')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      activeFilter === 'in-progress' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    In Progress
                  </button>
                  <button 
                    onClick={() => setActiveFilter('resolved')}
                    className={`w-full text-left px-3 py-2 rounded-md text-sm ${
                      activeFilter === 'resolved' ? 'bg-blue-100 text-blue-800' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Resolved
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-700 mb-2">Department</h3>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="all">All Departments</option>
                  <option value="transport">Transport</option>
                  <option value="sanitation">Sanitation</option>
                  <option value="health">Health</option>
                  <option value="parks">Parks & Recreation</option>
                </select>
              </div>
              
              <div>
                <Link 
                  to="/issues/report" 
                  className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
                >
                  <svg className="mr-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Report New Issue
                </Link>
              </div>
            </div>
          </div>
          
          {/* Map and List View */}
          <div className="lg:w-3/4">
            {/* Map Placeholder - In a real app, this would be an actual map component */}
            <div className="bg-blue-50 border-2 border-blue-100 rounded-xl h-96 mb-8 flex items-center justify-center">
              <div className="text-center">
                <svg className="mx-auto h-16 w-16 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
                <h3 className="mt-2 text-lg font-medium text-gray-900">Interactive Map</h3>
                <p className="mt-1 text-sm text-gray-500">
                  In a production app, this would display an interactive map with issue markers.
                </p>
              </div>
            </div>
            
            {/* Issues List */}
            <div>
              <h2 className="text-xl font-bold text-gray-800 mb-6">
                {filteredIssues.length} {filteredIssues.length === 1 ? 'Issue' : 'Issues'} Found
              </h2>
              
              <div className="space-y-4">
                {filteredIssues.map((issue) => (
                  <div key={issue.id} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800">{issue.title}</h3>
                        <p className="text-sm text-gray-500 mt-1">{issue.location}</p>
                      </div>
                      <div className="flex space-x-2">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(issue.status)}`}>
                          {issue.status.charAt(0).toUpperCase() + issue.status.slice(1).replace('-', ' ')}
                        </span>
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(issue.priority)}`}>
                          {issue.priority.charAt(0).toUpperCase() + issue.priority.slice(1)}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-xs text-gray-500">ID: {issue.id}</span>
                      <Link to={`/issues/${issue.id}`} className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
                        View Details
                        <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                ))}
                
                {filteredIssues.length === 0 && (
                  <div className="bg-white rounded-xl shadow-md p-8 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h3 className="mt-2 text-lg font-medium text-gray-900">No issues found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Try changing your filters or report a new issue.
                    </p>
                    <div className="mt-6">
                      <Link 
                        to="/issues/report" 
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
                      >
                        Report New Issue
                      </Link>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;