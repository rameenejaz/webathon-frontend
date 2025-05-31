import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ViewProposals = () => {
  // Hard-coded proposals data
  const [proposals, setProposals] = useState([
    {
      id: 1,
      title: "Smart Traffic Management System",
      description: "Implementation of AI-powered traffic lights that adjust timing based on real-time traffic conditions to reduce congestion and improve flow.",
      department: "Transportation",
      status: "Active",
      deadline: "2023-12-15",
      votes: {
        yes: 342,
        no: 89
      },
      budget: "$1.2M",
      submittedBy: "Traffic Management Committee",
      createdAt: "2023-10-01",
      category: "Infrastructure"
    },
    {
      id: 2,
      title: "Community Solar Power Initiative",
      description: "Installation of solar panels on public buildings to generate clean energy and reduce the city's carbon footprint, with excess power being distributed to low-income households.",
      department: "Energy",
      status: "Active",
      deadline: "2023-12-20",
      votes: {
        yes: 518,
        no: 62
      },
      budget: "$3.5M",
      submittedBy: "Environmental Sustainability Board",
      createdAt: "2023-09-15",
      category: "Sustainability"
    },
    {
      id: 3,
      title: "Public WiFi Expansion",
      description: "Extend free public WiFi coverage to all parks, public squares, and community centers to improve digital accessibility for all citizens.",
      department: "Technology",
      status: "Active",
      deadline: "2023-11-30",
      votes: {
        yes: 287,
        no: 113
      },
      budget: "$850K",
      submittedBy: "Digital Inclusion Task Force",
      createdAt: "2023-10-05",
      category: "Technology"
    },
    {
      id: 4,
      title: "Urban Green Spaces Development",
      description: "Convert vacant lots into community gardens and mini-parks to increase green space in urban areas and improve air quality.",
      department: "Parks & Recreation",
      status: "Active",
      deadline: "2023-12-10",
      votes: {
        yes: 429,
        no: 78
      },
      budget: "$1.8M",
      submittedBy: "Urban Planning Department",
      createdAt: "2023-09-22",
      category: "Environment"
    },
    {
      id: 5,
      title: "Smart Waste Management System",
      description: "Deploy IoT-enabled waste bins throughout the city that notify collection services when they're full, optimizing collection routes and reducing operational costs.",
      department: "Sanitation",
      status: "Completed",
      deadline: "2023-08-15",
      votes: {
        yes: 392,
        no: 104
      },
      budget: "$1.5M",
      submittedBy: "Waste Management Division",
      createdAt: "2023-06-10",
      category: "Infrastructure"
    }
  ]);

  const [filterCategory, setFilterCategory] = useState('All');
  const [filterStatus, setFilterStatus] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  // Filter proposals based on selected filters and search term
  const filteredProposals = proposals.filter(proposal => {
    const matchesCategory = filterCategory === 'All' || proposal.category === filterCategory;
    const matchesStatus = filterStatus === 'All' || proposal.status === filterStatus;
    const matchesSearch = proposal.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          proposal.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesStatus && matchesSearch;
  });

  // Categories for filter
  const categories = ['All', 'Infrastructure', 'Sustainability', 'Technology', 'Environment'];
  const statuses = ['All', 'Active', 'Completed', 'Pending'];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">City Proposals</h1>
          <p className="mt-2 text-lg text-gray-600">
            Browse and vote on proposals to improve our city
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700">Search</label>
              <input
                type="text"
                id="search"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                placeholder="Search proposals..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
              <select
                id="category"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="status" className="block text-sm font-medium text-gray-700">Status</label>
              <select
                id="status"
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProposals.map(proposal => (
            <div key={proposal.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className={`h-2 ${proposal.status === 'Active' ? 'bg-green-500' : proposal.status === 'Completed' ? 'bg-blue-500' : 'bg-yellow-500'}`}></div>
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    proposal.category === 'Infrastructure' ? 'bg-purple-100 text-purple-800' :
                    proposal.category === 'Sustainability' ? 'bg-green-100 text-green-800' :
                    proposal.category === 'Technology' ? 'bg-blue-100 text-blue-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {proposal.category}
                  </span>
                  <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                    proposal.status === 'Active' ? 'bg-green-100 text-green-800' :
                    proposal.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {proposal.status}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-gray-900">{proposal.title}</h3>
                <p className="mt-2 text-sm text-gray-600 line-clamp-3">{proposal.description}</p>
                <div className="mt-4 flex justify-between items-center text-sm text-gray-500">
                  <span>Budget: {proposal.budget}</span>
                  <span>Dept: {proposal.department}</span>
                </div>
                <div className="mt-3 text-sm text-gray-500">
                  <span>Deadline: {new Date(proposal.deadline).toLocaleDateString()}</span>
                </div>
                <div className="mt-4 bg-gray-100 rounded-md p-3">
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Current Votes</span>
                    <span>{proposal.votes.yes + proposal.votes.no} total</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <div 
                      className="bg-teal-600 h-2.5 rounded-full" 
                      style={{ width: `${(proposal.votes.yes / (proposal.votes.yes + proposal.votes.no)) * 100}%` }}
                    ></div>
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-500">
                    <span>Yes: {proposal.votes.yes}</span>
                    <span>No: {proposal.votes.no}</span>
                  </div>
                </div>
                <div className="mt-5 flex justify-between">
                  <Link 
                    to={`/proposals/vote?id=${proposal.id}`}
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    Vote Now
                  </Link>
                  <Link 
                    to={`/proposals/results?id=${proposal.id}`}
                    className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    View Results
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProposals.length === 0 && (
          <div className="text-center py-10">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No proposals found</h3>
            <p className="mt-1 text-sm text-gray-500">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewProposals;
