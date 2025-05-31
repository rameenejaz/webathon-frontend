import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Proposal card component
const ProposalCard = ({ id, title, department, description, deadline, votes, target, status, onVote }) => {
  const percentage = Math.round((votes / target) * 100);
  const [hasVoted, setHasVoted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const handleVote = () => {
    if (!hasVoted) {
      setHasVoted(true);
      onVote(id);
    }
  };
  
  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
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
      
      <div className="mb-4">
        <p className="text-gray-600 text-sm mb-2">
          {isExpanded ? description : `${description.substring(0, 100)}${description.length > 100 ? '...' : ''}`}
        </p>
        {description.length > 100 && (
          <button 
            onClick={() => setIsExpanded(!isExpanded)} 
            className="text-teal-600 hover:text-teal-700 text-sm font-medium"
          >
            {isExpanded ? 'Show less' : 'Read more'}
          </button>
        )}
      </div>
      
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
        <Link to={`/proposals/${id}`} className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center">
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        
        <button
          onClick={handleVote}
          disabled={hasVoted}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
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
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [proposals, setProposals] = useState([]);
  const [filteredProposals, setFilteredProposals] = useState([]);
  
  // Mock data for demonstration
  useEffect(() => {
    const mockProposals = [
      {
        id: 1,
        title: 'New Bike Lanes on Main Street',
        department: 'Transport Department',
        description: 'A proposal to add protected bike lanes along Main Street to improve cyclist safety and encourage more sustainable transportation options. The project would convert one lane of traffic in each direction to a dedicated bike lane with physical barriers.',
        deadline: 'June 30, 2023',
        votes: 1250,
        target: 2000,
        status: 'Active',
        category: 'infrastructure'
      },
      {
        id: 2,
        title: 'Community Garden in Central Park',
        department: 'Parks & Recreation',
        description: 'Create a community garden in the northeast corner of Central Park where residents can grow their own vegetables and flowers. The project would include raised beds, a tool shed, and a water system.',
        deadline: 'July 15, 2023',
        votes: 876,
        target: 1500,
        status: 'Active',
        category: 'environment'
      },
      {
        id: 3,
        title: 'Smart Street Lighting Initiative',
        department: 'Energy & Infrastructure',
        description: 'Replace conventional street lights with smart LED lighting that adjusts brightness based on time of day and presence of pedestrians or vehicles. This would improve safety while reducing energy consumption.',
        deadline: 'July 5, 2023',
        votes: 1890,
        target: 2500,
        status: 'Closing Soon',
        category: 'infrastructure'
      },
      {
        id: 4,
        title: 'Public Wi-Fi in Downtown Area',
        department: 'Information Technology',
        description: 'Install free public Wi-Fi hotspots throughout the downtown business district to improve connectivity for residents, visitors, and local businesses.',
        deadline: 'August 10, 2023',
        votes: 945,
        target: 1800,
        status: 'Active',
        category: 'technology'
      },
      {
        id: 5,
        title: 'After School Programs Expansion',
        department: 'Education Department',
        description: 'Expand after-school programs to include more STEM activities, arts, and sports for children ages 6-14. Programs would be available at all public schools in the city.',
        deadline: 'August 20, 2023',
        votes: 720,
        target: 1200,
        status: 'Active',
        category: 'education'
      },
      {
        id: 6,
        title: 'Senior Citizen Transportation Service',
        department: 'Social Services',
        description: 'Create a dedicated transportation service for senior citizens to help them access healthcare facilities, grocery stores, and community centers.',
        deadline: 'July 25, 2023',
        votes: 1050,
        target: 1500,
        status: 'Active',
        category: 'social'
      }
    ];
    
    setProposals(mockProposals);
    setFilteredProposals(mockProposals);
  }, []);
  
  // Filter proposals based on tab and search query
  useEffect(() => {
    let filtered = [...proposals];
    
    // Filter by category
    if (activeTab !== 'all') {
      filtered = filtered.filter(proposal => proposal.category === activeTab);
    }
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        proposal => 
          proposal.title.toLowerCase().includes(query) || 
          proposal.department.toLowerCase().includes(query) ||
          proposal.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredProposals(filtered);
  }, [activeTab, searchQuery, proposals]);
  
  const handleVote = (proposalId) => {
    setProposals(
      proposals.map(proposal => 
        proposal.id === proposalId 
          ? { ...proposal, votes: proposal.votes + 1 } 
          : proposal
      )
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">City Proposals & Voting</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Have your say in shaping our city's future by exploring and voting on community proposals
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
                placeholder="Search proposals..."
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
              All Proposals
            </button>
            <button
              onClick={() => setActiveTab('infrastructure')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'infrastructure'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Infrastructure
            </button>
            <button
              onClick={() => setActiveTab('environment')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'environment'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Environment
            </button>
            <button
              onClick={() => setActiveTab('technology')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'technology'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Technology
            </button>
            <button
              onClick={() => setActiveTab('social')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'social'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Social
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'education'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Proposals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProposals.length > 0 ? (
            filteredProposals.map((proposal) => (
              <ProposalCard 
                key={proposal.id} 
                {...proposal} 
                onVote={handleVote}
              />
            ))
          ) : (
            <div className="col-span-3 py-12 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <h3 className="mt-2 text-lg font-medium text-gray-900">No proposals found</h3>
              <p className="mt-1 text-gray-500">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          )}
        </div>

        {/* Submit Proposal Button */}
        <div className="mt-12 text-center">
          <Link
            to="/proposals/submit"
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
            Submit New Proposal
          </Link>
        </div>

        {/* How Voting Works */}
        <div className="mt-16 bg-white rounded-xl shadow-md overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">How Proposal Voting Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">1. Browse Proposals</h3>
                <p className="text-gray-600">
                  Explore proposals submitted by city officials and community members
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">2. Cast Your Vote</h3>
                <p className="text-gray-600">
                  Vote on proposals that matter to you. Each verified citizen gets one vote per proposal
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-gray-800 mb-2">3. See Results</h3>
                <p className="text-gray-600">
                  Proposals that reach their target votes move forward to implementation planning
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProposalsAndVote;