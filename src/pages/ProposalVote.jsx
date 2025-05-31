import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProposalVote = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  
  // Mock proposal data
  const proposal = {
    id: "PROP-2023-05",
    title: "New Bike Lanes on Main Street",
    department: "Transport Department",
    description: "This proposal aims to add protected bike lanes along Main Street from 1st Avenue to 10th Avenue. The bike lanes would be separated from vehicle traffic by physical barriers to ensure cyclist safety. The project would reduce one vehicle lane in each direction to accommodate the bike lanes.",
    deadline: "July 30, 2023 (5 days remaining)",
    submittedBy: "Urban Mobility Committee",
    submittedDate: "June 15, 2023",
    options: [
      { id: "opt1", text: "Yes, I support this proposal" },
      { id: "opt2", text: "No, I do not support this proposal" },
      { id: "opt3", text: "I support with modifications (please comment)" }
    ],
    documents: [
      { name: "Bike Lane Design Plan.pdf", size: "2.4 MB" },
      { name: "Traffic Impact Analysis.pdf", size: "1.8 MB" },
      { name: "Community Feedback Summary.pdf", size: "950 KB" }
    ],
    currentVotes: {
      yes: 1245,
      no: 568,
      modifications: 327
    }
  };

  const handleVote = (e) => {
    e.preventDefault();
    if (!selectedOption) return;
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowConfirmation(true);
    }, 1500);
  };
  
  const handleViewResults = () => {
    navigate('/proposals/results');
  };

  if (showConfirmation) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
              <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Vote Submitted Successfully!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Thank you for participating in the decision-making process for your city.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleViewResults}
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white rounded-lg font-medium hover:from-teal-600 hover:to-blue-700 transition-all duration-300"
              >
                View Results
              </button>
              <Link
                to="/proposals/view"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-50 transition-all duration-300"
              >
                Back to Proposals
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Vote on Proposal</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Make your voice heard and participate in shaping the future of your city
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-8">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800">{proposal.title}</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                {proposal.department}
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-amber-100 text-amber-800">
                Deadline: {proposal.deadline}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Description</h3>
              <p className="text-gray-600">{proposal.description}</p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Supporting Documents</h3>
              <ul className="space-y-2">
                {proposal.documents.map((doc, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="h-5 w-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <a href="#" className="text-teal-600 hover:text-teal-700 font-medium">{doc.name}</a>
                    <span className="text-xs text-gray-500 ml-2">({doc.size})</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-medium text-gray-800 mb-2">Cast Your Vote</h3>
              <form onSubmit={handleVote}>
                <div className="space-y-4">
                  {proposal.options.map((option) => (
                    <div key={option.id} className="flex items-center">
                      <input
                        id={option.id}
                        name="vote"
                        type="radio"
                        value={option.id}
                        checked={selectedOption === option.id}
                        onChange={() => setSelectedOption(option.id)}
                        className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300"
                      />
                      <label htmlFor={option.id} className="ml-3 block text-gray-700">
                        {option.text}
                      </label>
                    </div>
                  ))}
                </div>
                
                {selectedOption === 'opt3' && (
                  <div className="mt-4">
                    <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
                      Your suggestions for modifications
                    </label>
                    <textarea
                      id="comment"
                      name="comment"
                      rows={4}
                      className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                      placeholder="Please describe your suggested modifications..."
                    ></textarea>
                  </div>
                )}
                
                <div className="mt-6">
                  <button
                    type="submit"
                    disabled={!selectedOption || isSubmitting}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Submitting...
                      </>
                    ) : 'Submit Vote'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link to="/proposals/view" className="text-teal-600 hover:text-teal-700 font-medium">
            ← Back to all proposals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProposalVote;
