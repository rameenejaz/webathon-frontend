import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Proposal card component
const ProposalCard = ({ id, title, department, description, deadline, votes, target, status, onVote }) => {
  const percentage = Math.round((votes / target) * 100);
  const [hasVoted, setHasVoted] = useState(false);
  
  const handleVote = () => {
    if (!hasVoted) {
      onVote(id);
      setHasVoted(true);
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <span className={`px-3 py-1 text-xs font-medium rounded-full ${
          status === 'Active' ? 'bg-green-100 text-green-800' : 
          status === 'Closing Soon' ? 'bg-amber-100 text-amber-800' :
          'bg-gray-100 text-gray-800'
        }`}>
          {status}
        </span>
      </div>
      <p className="text-gray-500 text-sm mb-2">{department}</p>
      <p className="text-gray-600 mb-4">{description}</p>
      <p className="text-gray-600 text-sm mb-4">Deadline: {deadline}</p>
      
      <div className="mb-2 flex justify-between text-sm">
        <span className="text-gray-600">{votes} votes</span>
        <span className="text-gray-600">{percentage}% of goal</span>
      </div>
      
      <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
        <div 
          className="h-2.5 rounded-full bg-gradient-to-r from-teal-500 to-blue-600"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      
      <div className="flex justify-between items-center">
        <Link to={`/proposals/${id}`} className="text-sm font-medium text-blue-600 hover:text-blue-500">
          View Details
        </Link>
        <button
          onClick={handleVote}
          disabled={hasVoted}
          className={`px-4 py-2 rounded-md text-sm font-medium ${
            hasVoted 
              ? 'bg-gray-100 text-gray-500 cursor-not-allowed' 
              : 'bg-gradient-to-r from-teal-500 to-blue-600 text-white hover:from-teal-600 hover:to-blue-700'
          }`}
        >
          {hasVoted ? 'Voted' : 'Vote Now'}
        </button>
      </div>
    </div>
  );
};

const ProposalsAndVote = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [proposals, setProposals] = useState([
    {
      id: 'PROP-1001',
      title: 'New Bike Lanes on Main Street',
      department: 'Transport Department',
      description: 'Proposal to add protected bike lanes along Main Street to improve cyclist safety and promote sustainable transportation.',
      deadline: 'June 30, 2023',
      votes: 1250,
      target: 2000,
      status: 'Active',
      category: 'infrastructure'
    },
    {
      id: 'PROP-1002',
      title: 'Community Garden in Central Park',
      department: 'Parks & Recreation',
      description: 'Create a community garden in the northeast corner of Central Park where residents can grow vegetables and flowers.',
      deadline: 'July 15, 2023',
      votes: 876,
      target: 1500,
      status: 'Active',
      category: 'environment'
    },
    {
      id: 'PROP-1003',
      title: 'Public Wi-Fi in Downtown Area',
      department: 'Technology Department',
      description: 'Install free public Wi-Fi hotspots throughout the downtown business district to improve connectivity for residents and visitors.',
      deadline: 'July 5, 2023',
      votes: 1890,
      target: 2000,
      status: 'Closing Soon',
      category: 'technology'
    },
    {
      id: 'PROP-1004',
      title: 'Neighborhood Watch Program',
      department: 'Public Safety',
      description: 'Establish a neighborhood watch program in residential areas to improve community safety and reduce crime rates.',
      deadline: 'August 10, 2023',
      votes: 750,
      target: 1200,
      status: 'Active',
      category: 'safety'
    },
    {
      id: 'PROP-1005',
      title: 'Senior Center Renovation',
      department: 'Community Services',
      description: 'Renovate and modernize the existing senior center to better serve our aging population with improved facilities and programs.',
      deadline: 'August 22, 2023',
      votes: 980,
      target: 1500,
      status: 'Active',
      category: 'community'
    },
    {
      id: 'PROP-1006',
      title: 'Electric Vehicle Charging Stations',
      department: 'Transport Department',
      description: 'Install EV charging stations in public parking lots to support the growing number of electric vehicles in our community.',
      deadline: 'July 28, 2023',
      votes: 1450,
      target: 1800,
      status: 'Closing Soon',
      category: 'infrastructure'
    }
  ]);

  const handleVote = (proposalId) => {
    setProposals(proposals.map(proposal => 
      proposal.id === proposalId 
        ? { ...proposal, votes: proposal.votes + 1 } 
        : proposal
    ));
  };

  const filteredProposals = activeCategory === 'all' 
    ? proposals 
    : proposals.filter(proposal => proposal.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              Community Proposals & Voting
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl">
              Have your say in shaping our city's future. Browse proposals, cast your vote, and make a difference.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Category Filters */}
        <div className="mb-10">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Browse Proposals</h2>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'all' 
                  ? 'bg-teal-100 text-teal-800' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              All Proposals
            </button>
            <button
              onClick={() => setActiveCategory('infrastructure')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'infrastructure' 
                  ? 'bg-teal-100 text-teal-800' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Infrastructure
            </button>
            <button
              onClick={() => setActiveCategory('environment')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'environment' 
                  ? 'bg-teal-100 text-teal-800' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Environment
            </button>
            <button
              onClick={() => setActiveCategory('technology')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'technology' 
                  ? 'bg-teal-100 text-teal-800' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => setActiveCategory('safety')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'safety' 
                  ? 'bg-teal-100 text-teal-800' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Safety
            </button>
            <button
              onClick={() => setActiveCategory('community')}
              className={`px-4 py-2 rounded-full text-sm font-medium ${
                activeCategory === 'community' 
                  ? 'bg-teal-100 text-teal-800' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              }`}
            >
              Community
            </button>
          </div>
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProposals.map((proposal) => (
            <ProposalCard
              key={proposal.id}
              {...proposal}
              onVote={handleVote}
            />
          ))}
        </div>

        {/* Empty State */}
        {filteredProposals.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No proposals found</h3>
            <p className="mt-1 text-sm text-gray-500">
              There are currently no proposals in this category. Check back later or browse other categories.
            </p>
          </div>
        )}

        {/* Submit Proposal CTA */}
        <div className="mt-16 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8 md:flex md:items-center md:justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-800">Have an idea to improve our city?</h2>
              <p className="mt-2 text-gray-600">
                Submit your own proposal and gather community support to make it happen.
              </p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                to="/proposals/submit"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
              >
                Submit a Proposal
              </Link>
            </div>
          </div>
        </div>

        {/* How Voting Works */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">How Proposal Voting Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Proposal Submission</h3>
              <p className="text-gray-600">
                Community members submit proposals that outline improvements or initiatives for the city.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Community Voting</h3>
              <p className="text-gray-600">
                Residents vote on proposals they support. Each proposal needs to reach a minimum vote threshold.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center text-green-600 mb-4">
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Implementation</h3>
              <p className="text-gray-600">
                Proposals that reach their voting target are reviewed by the city council and considered for implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalsAndVote;