import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SubmissionCard = ({ title, status, department, date, description, updateTime, id }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'in review':
        return 'bg-blue-100 text-blue-800';
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(status)}`}>
          {status}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-2">{department}</p>
      <p className="text-gray-600 text-sm mb-4">Submitted: {date}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-xs text-gray-500">ID: {id}</span>
        <span className="text-xs text-gray-500">Last update: {updateTime}</span>
      </div>
      <div className="mt-4 flex justify-end">
        <Link to={`/issues/submission/${id}`} className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center">
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

function MySubmissions() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Sample submissions data
  const submissions = [
    {
      id: "SUB-2023-001",
      title: "New Pedestrian Crossing Request",
      status: "In Review",
      department: "Transport Department",
      date: "2023-07-10",
      updateTime: "2023-07-12 09:45 AM",
      description: "Proposal for a new pedestrian crossing near the elementary school on Oak Street to improve child safety."
    },
    {
      id: "SUB-2023-002",
      title: "Community Garden Proposal",
      status: "Approved",
      department: "Parks & Recreation",
      date: "2023-06-25",
      updateTime: "2023-07-05 02:30 PM",
      description: "Proposal to convert the vacant lot on Maple Avenue into a community garden with shared plots for residents."
    },
    {
      id: "SUB-2023-003",
      title: "Street Light Upgrade Request",
      status: "Pending",
      department: "Utilities",
      date: "2023-07-15",
      updateTime: "2023-07-15 11:20 AM",
      description: "Request to upgrade street lights in the downtown area to energy-efficient LED fixtures."
    },
    {
      id: "SUB-2023-004",
      title: "Public Recycling Bin Installation",
      status: "Rejected",
      department: "Sanitation",
      date: "2023-06-18",
      updateTime: "2023-07-01 03:15 PM",
      description: "Request to install additional recycling bins in Central Park. Rejected due to budget constraints for this fiscal year."
    }
  ];

  // Filter submissions based on active tab and search query
  const filteredSubmissions = submissions.filter(submission => {
    // Filter by status
    if (activeTab !== 'all' && submission.status.toLowerCase() !== activeTab.toLowerCase()) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !submission.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !submission.description.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">My Submissions</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Track and manage all your submitted proposals and requests to the city
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Filter Section */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between items-center">
          <div className="w-full md:w-96">
            <div className="relative">
              <input
                type="text"
                placeholder="Search submissions..."
                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <svg
                className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
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
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'all'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setActiveTab('pending')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'pending'
                  ? 'bg-yellow-500 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Pending
            </button>
            <button
              onClick={() => setActiveTab('in review')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'in review'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              In Review
            </button>
            <button
              onClick={() => setActiveTab('approved')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'approved'
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Approved
            </button>
            <button
              onClick={() => setActiveTab('rejected')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'rejected'
                  ? 'bg-red-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Rejected
            </button>
          </div>
        </div>

        {/* Submissions Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredSubmissions.length > 0 ? (
            filteredSubmissions.map((submission, index) => (
              <SubmissionCard key={index} {...submission} />
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No submissions found</h3>
              <p className="mt-1 text-gray-500">
                {searchQuery 
                  ? "Try adjusting your search or filter criteria" 
                  : "You haven't made any submissions matching this filter yet"}
              </p>
            </div>
          )}
        </div>

        {/* Create New Submission Button */}
        <div className="mt-12 text-center">
          <Link
            to="/issues/report"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
            Create New Submission
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MySubmissions;
