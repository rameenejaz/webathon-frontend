import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const InteractiveMap = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [issues, setIssues] = useState([]);
  const [filteredIssues, setFilteredIssues] = useState([]);
  const [selectedIssue, setSelectedIssue] = useState(null);
  const [isARMode, setIsARMode] = useState(false);
  
  // Mock data for demonstration
  useEffect(() => {
    const mockIssues = [
      {
        id: 1,
        title: 'Pothole on Main Street',
        location: 'Main St & 5th Ave',
        coordinates: { lat: 25.276987, lng: 55.296249 },
        status: 'Open',
        priority: 'High',
        department: 'Transport',
        reportedDate: '2023-07-01',
        description: 'Large pothole causing traffic issues and potential damage to vehicles.',
        image: 'https://images.unsplash.com/photo-1594818379496-da1e345b9abe?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 2,
        title: 'Street Light Outage',
        location: 'Oak St & 10th Ave',
        coordinates: { lat: 25.278123, lng: 55.292456 },
        status: 'In Progress',
        priority: 'Medium',
        department: 'Utilities',
        reportedDate: '2023-07-02',
        description: 'Multiple street lights not working in the downtown area.',
        image: 'https://images.unsplash.com/photo-1545481950-81c0ba95aea3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 3,
        title: 'Garbage Collection Delay',
        location: 'Pine St & 8th Ave',
        coordinates: { lat: 25.275432, lng: 55.298765 },
        status: 'Resolved',
        priority: 'Low',
        department: 'Sanitation',
        reportedDate: '2023-06-28',
        description: 'Regular garbage collection was delayed by 2 days.',
        image: 'https://images.unsplash.com/photo-1605600659453-719282b41e22?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 4,
        title: 'Playground Equipment Damage',
        location: 'Central Park',
        coordinates: { lat: 25.273456, lng: 55.293456 },
        status: 'Open',
        priority: 'Medium',
        department: 'Parks',
        reportedDate: '2023-07-03',
        description: 'Swing set and slide damaged in the central playground area.',
        image: 'https://images.unsplash.com/photo-1579704025276-bc7e7a5f8c16?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 5,
        title: 'Water Main Break',
        location: 'Elm St & 3rd Ave',
        coordinates: { lat: 25.279876, lng: 55.295678 },
        status: 'In Progress',
        priority: 'High',
        department: 'Utilities',
        reportedDate: '2023-07-04',
        description: 'Water main break causing flooding and service disruption.',
        image: 'https://images.unsplash.com/photo-1584677626646-7c8f83690304?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      },
      {
        id: 6,
        title: 'Graffiti on Public Building',
        location: 'City Hall',
        coordinates: { lat: 25.277123, lng: 55.297890 },
        status: 'Open',
        priority: 'Low',
        department: 'Maintenance',
        reportedDate: '2023-07-05',
        description: 'Graffiti on the east wall of City Hall building.',
        image: 'https://images.unsplash.com/photo-1572371707940-39b9a0639c1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
      }
    ];
    
    setIssues(mockIssues);
    setFilteredIssues(mockIssues);
  }, []);
  
  // Filter issues based on search query, department, and status
  useEffect(() => {
    let filtered = [...issues];
    
    // Filter by active tab
    if (activeTab !== 'all') {
      if (activeTab === 'open') {
        filtered = filtered.filter(issue => issue.status === 'Open');
      } else if (activeTab === 'in-progress') {
        filtered = filtered.filter(issue => issue.status === 'In Progress');
      } else if (activeTab === 'resolved') {
        filtered = filtered.filter(issue => issue.status === 'Resolved');
      }
    }
    
    // Filter by department
    if (selectedDepartment !== 'all') {
      filtered = filtered.filter(issue => issue.department === selectedDepartment);
    }
    
    // Filter by status
    if (selectedStatus !== 'all') {
      filtered = filtered.filter(issue => issue.status === selectedStatus);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        issue => 
          issue.title.toLowerCase().includes(query) || 
          issue.location.toLowerCase().includes(query) ||
          issue.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredIssues(filtered);
  }, [activeTab, searchQuery, selectedDepartment, selectedStatus, issues]);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Resolved':
        return 'bg-gray-100 text-gray-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-800';
      case 'Medium':
        return 'bg-orange-100 text-orange-800';
      case 'Low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Interactive City Map</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Explore reported issues across the city and track their status in real-time
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs and AR Toggle */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex border-b border-gray-200 mb-4 md:mb-0">
            <button
              onClick={() => setActiveTab('all')}
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'all'
                  ? 'border-b-2 border-teal-500 text-teal-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All Issues
            </button>
            <button
              onClick={() => setActiveTab('open')}
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'open'
                  ? 'border-b-2 border-teal-500 text-teal-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Open
            </button>
            <button
              onClick={() => setActiveTab('in-progress')}
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'in-progress'
                  ? 'border-b-2 border-teal-500 text-teal-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              In Progress
            </button>
            <button
              onClick={() => setActiveTab('resolved')}
              className={`py-4 px-6 font-medium text-sm focus:outline-none ${
                activeTab === 'resolved'
                  ? 'border-b-2 border-teal-500 text-teal-600'
                  : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Resolved
            </button>
          </div>
          
          <button
            onClick={() => setIsARMode(!isARMode)}
            className={`flex items-center px-4 py-2 rounded-lg font-medium ${
              isARMode
                ? 'bg-amber-500 text-white'
                : 'bg-white text-gray-700 border border-gray-300'
            }`}
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            {isARMode ? 'Exit AR Mode' : 'Enter AR Mode'}
          </button>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-1">
                Search
              </label>
              <input
                type="text"
                id="search"
                placeholder="Search issues..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 bottom-2.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            
            <div>
              <label htmlFor="department" className="block text-sm font-medium text-gray-700 mb-1">
                Department
              </label>
              <select
                id="department"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
              >
                <option value="all">All Departments</option>
                <option value="Transport">Transport</option>
                <option value="Utilities">Utilities</option>
                <option value="Sanitation">Sanitation</option>
                <option value="Parks">Parks & Recreation</option>
                <option value="Maintenance">Maintenance</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                id="status"
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
              >
                <option value="all">All Statuses</option>
                <option value="Open">Open</option>
                <option value="In Progress">In Progress</option>
                <option value="Resolved">Resolved</option>
                <option value="Pending">Pending</option>
              </select>
            </div>
            
            <div className="flex items-end">
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedDepartment('all');
                  setSelectedStatus('all');
                  setActiveTab('all');
                }}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>

        {/* Map and Issue List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {isARMode ? (
                <div className="h-[600px] bg-gray-200 flex flex-col items-center justify-center">
                  <svg className="h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <p className="mt-4 text-lg font-medium text-gray-600">AR Mode</p>
                  <p className="text-gray-500 max-w-md text-center mt-2">
                    In a real implementation, this would activate your camera to show an augmented reality view of issues in your surroundings.
                  </p>
                  <button
                    onClick={() => setIsARMode(false)}
                    className="mt-6 px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Switch to Map View
                  </button>
                </div>
              ) : (
                <div className="h-[600px] bg-gray-200 flex items-center justify-center">
                  <div className="text-center">
                    <svg className="mx-auto h-16 w-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                    </svg>
                    <p className="mt-4 text-lg font-medium text-gray-600">Interactive Map</p>
                    <p className="text-gray-500 max-w-md text-center mt-2">
                      In a real implementation, this would show a map with markers for all reported issues.
                    </p>
                  </div>
                </div>
              )}
              <div className="p-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    {filteredIssues.length} {filteredIssues.length === 1 ? 'issue' : 'issues'} found
                  </div>
                  <Link
                    to="/issues/report"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
                  >
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                    </svg>
                    Report New Issue
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          {/* Issue List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-4 bg-gray-50 border-b border-gray-200">
                <h3 className="text-lg font-medium text-gray-800">Issues List</h3>
              </div>
              <div className="overflow-y-auto h-[552px]">
                {filteredIssues.length > 0 ? (
                  <div className="divide-y divide-gray-200">
                    {filteredIssues.map((issue) => (
                      <div 
                        key={issue.id} 
                        className={`p-4 cursor-pointer hover:bg-gray-50 ${selectedIssue === issue.id ? 'bg-gray-50' : ''}`}
                        onClick={() => setSelectedIssue(issue.id)}
                      >
                        <div className="flex justify-between items-start">
                          <h4 className="text-sm font-medium text-gray-800">{issue.title}</h4>
                          <div className="flex gap-2">
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(issue.status)}`}>
                              {issue.status}
                            </span>
                            <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(issue.priority)}`}>
                              {issue.priority}
                            </span>
                          </div>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{issue.location}</p>
                        <p className="text-xs text-gray-500 mt-1">Reported: {issue.reportedDate}</p>
                        <p className="text-xs text-gray-500 mt-1">Department: {issue.department}</p>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="p-8 text-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900">No issues found</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Try adjusting your search or filter criteria.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Issue Detail Panel */}
        {selectedIssue && (
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            {issues.filter(issue => issue.id === selectedIssue).map((issue) => (
              <div key={issue.id} className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">{issue.title}</h2>
                  <button 
                    onClick={() => setSelectedIssue(null)}
                    className="text-gray-400 hover:text-gray-500"
                  >
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <div className="rounded-lg overflow-hidden h-64 bg-gray-200">
                      {issue.image ? (
                        <img src={issue.image} alt={issue.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <p className="text-gray-500">No image available</p>
                        </div>
                      )}
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">Location</h3>
                      <p className="text-gray-600">{issue.location}</p>
                      <p className="text-gray-500 text-sm mt-1">
                        Coordinates: {issue.coordinates.lat}, {issue.coordinates.lng}
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex gap-2 mb-4">
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${getStatusColor(issue.status)}`}>
                        {issue.status}
                      </span>
                      <span className={`px-3 py-1 text-sm font-medium rounded-full ${getPriorityColor(issue.priority)}`}>
                        {issue.priority}
                      </span>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">Description</h3>
                      <p className="text-gray-600">{issue.description}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h3 className="text-lg font-medium text-gray-800 mb-2">Details</h3>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-500">Department</p>
                          <p className="text-gray-800">{issue.department}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">Reported Date</p>
                          <p className="text-gray-800">{issue.reportedDate}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-500">ID</p>
                          <p className="text-gray-800">#{issue.id}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex gap-4">
                      <Link
                        to={`/issues/${issue.id}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
                      >
                        View Full Details
                      </Link>
                      <button
                        className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                      >
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                        </svg>
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Legend */}
        <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-4 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg font-medium text-gray-800">Map Legend</h3>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-red-500 mr-2"></div>
                <span className="text-sm text-gray-600">High Priority</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-orange-500 mr-2"></div>
                <span className="text-sm text-gray-600">Medium Priority</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
                <span className="text-sm text-gray-600">Low Priority</span>
              </div>
              <div className="flex items-center">
                <div className="h-4 w-4 rounded-full bg-gray-400 mr-2"></div>
                <span className="text-sm text-gray-600">Resolved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMap;