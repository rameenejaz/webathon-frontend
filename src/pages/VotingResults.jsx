import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const VotingResults = () => {
  const [selectedProposal, setSelectedProposal] = useState('bike-lanes');
  
  // Mock data for proposals and their results
  const proposals = {
    'bike-lanes': {
      id: "PROP-2023-05",
      title: "New Bike Lanes on Main Street",
      department: "Transport Department",
      description: "This proposal aims to add protected bike lanes along Main Street from 1st Avenue to 10th Avenue.",
      status: "Voting Open",
      deadline: "July 30, 2023",
      totalVotes: 2140,
      results: [
        { option: "Yes, I support this proposal", votes: 1245, percentage: 58.2, color: 'bg-green-500' },
        { option: "No, I do not support this proposal", votes: 568, percentage: 26.5, color: 'bg-red-500' },
        { option: "I support with modifications", votes: 327, percentage: 15.3, color: 'bg-yellow-500' }
      ]
    },
    'community-garden': {
      id: "PROP-2023-04",
      title: "Community Garden in Central Park",
      department: "Parks & Recreation",
      description: "Create a community garden in the northeast corner of Central Park with 50 plots available for residents.",
      status: "Voting Closed",
      deadline: "July 15, 2023",
      totalVotes: 1876,
      results: [
        { option: "Yes, I support this proposal", votes: 1423, percentage: 75.9, color: 'bg-green-500' },
        { option: "No, I do not support this proposal", votes: 312, percentage: 16.6, color: 'bg-red-500' },
        { option: "I support with modifications", votes: 141, percentage: 7.5, color: 'bg-yellow-500' }
      ]
    },
    'public-wifi': {
      id: "PROP-2023-03",
      title: "Public Wi-Fi in Downtown Area",
      department: "Information Technology",
      description: "Install free public Wi-Fi hotspots throughout the downtown business district.",
      status: "Voting Closed",
      deadline: "July 5, 2023",
      totalVotes: 2354,
      results: [
        { option: "Yes, I support this proposal", votes: 1876, percentage: 79.7, color: 'bg-green-500' },
        { option: "No, I do not support this proposal", votes: 245, percentage: 10.4, color: 'bg-red-500' },
        { option: "I support with modifications", votes: 233, percentage: 9.9, color: 'bg-yellow-500' }
      ]
    }
  };
  
  const currentProposal = proposals[selectedProposal];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Voting Results</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            See how citizens are voting on proposals and the impact of community decisions
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Proposal Selection */}
        <div className="mb-8">
          <label htmlFor="proposal-select" className="block text-sm font-medium text-gray-700 mb-2">
            Select Proposal
          </label>
          <select
            id="proposal-select"
            value={selectedProposal}
            onChange={(e) => setSelectedProposal(e.target.value)}
            className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm rounded-md"
          >
            <option value="bike-lanes">New Bike Lanes on Main Street</option>
            <option value="community-garden">Community Garden in Central Park</option>
            <option value="public-wifi">Public Wi-Fi in Downtown Area</option>
          </select>
        </div>
        
        {/* Proposal Details */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-2xl font-semibold text-gray-800">{currentProposal.title}</h2>
                <div className="flex flex-wrap gap-2 mt-2">
                  <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                    {currentProposal.department}
                  </span>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                    currentProposal.status === 'Voting Open' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {currentProposal.status}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Total Votes</p>
                <p className="text-2xl font-bold text-gray-800">{currentProposal.totalVotes.toLocaleString()}</p>
              </div>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600">{currentProposal.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Voting Results</h3>
              
              <div className="space-y-6">
                {currentProposal.results.map((result, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">{result.option}</span>
                      <span className="text-sm font-medium text-gray-700">{result.votes.toLocaleString()} votes ({result.percentage}%)</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${result.color}`} 
                        style={{ width: `${result.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Visual Chart */}
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-4">Visual Breakdown</h3>
              <div className="h-64 bg-white rounded-lg border border-gray-200 p-4 flex items-end justify-around">
                {currentProposal.results.map((result, index) => (
                  <div key={index} className="flex flex-col items-center">
                    <div 
                      className={`w-24 ${result.color} rounded-t-lg`} 
                      style={{ height: `${result.percentage * 2}px` }}
                    ></div>
                    <div className="mt-2 text-center">
                      <span className="block text-sm font-medium text-gray-700">{result.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Demographic Information */}
            <div>
              <h3 className="text-lg font-medium text-gray-800 mb-4">Voter Demographics</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Age Groups</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>18-24</span>
                        <span>15%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '15%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>25-34</span>
                        <span>32%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '32%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>35-44</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>45+</span>
                        <span>25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '25%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Neighborhoods</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Downtown</span>
                        <span>42%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '42%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Westside</span>
                        <span>28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '28%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Eastside</span>
                        <span>18%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '18%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Suburbs</span>
                        <span>12%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: '12%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-4">
                  <h4 className="text-sm font-medium text-gray-700 mb-2">Voting Method</h4>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Mobile App</span>
                        <span>65%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>Website</span>
                        <span>30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: '30%' }}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-xs text-gray-600 mb-1">
                        <span>In-Person</span>
                        <span>5%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-1.5">
                        <div className="bg-teal-500 h-1.5 rounded-full" style={{ width: '5%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/proposals/view"
            className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300 text-center"
          >
            View All Proposals
          </Link>
          <Link
            to="/proposals/vote"
            className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300 text-center"
          >
            Cast Your Vote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default VotingResults;
