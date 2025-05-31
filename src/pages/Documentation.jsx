import React, { useState } from 'react';

const Documentation = () => {
  const [activeSection, setActiveSection] = useState('overview');

  // Hard-coded proposal documentation data
  const proposalDocs = [
    {
      id: 1,
      title: "Smart Traffic Management System",
      description: "AI-powered traffic lights that adjust timing based on real-time traffic conditions",
      technicalDetails: "The system uses computer vision cameras at intersections connected to an AI system that analyzes traffic patterns. Machine learning algorithms optimize signal timing to reduce wait times and congestion. The system integrates with the city's existing traffic management infrastructure.",
      implementation: "Phase 1: Install cameras and sensors at 15 key intersections\nPhase 2: Deploy AI software and calibrate system\nPhase 3: Expand to additional 25 intersections\nPhase 4: Integrate with public transportation priority system",
      budget: "$1.2M",
      timeline: "12 months",
      benefits: "20-30% reduction in average wait times, 15% decrease in emissions from idling vehicles, improved emergency vehicle response times"
    },
    {
      id: 2,
      title: "Community Solar Power Initiative",
      description: "Solar panels on public buildings with excess power distributed to low-income households",
      technicalDetails: "Installation of high-efficiency photovoltaic panels on 12 municipal buildings with southern exposure. Power management systems will direct excess generation to the grid with credits applied to selected low-income household accounts. Battery storage systems will be installed at 3 key locations for emergency power backup.",
      implementation: "Phase 1: Site assessment and engineering\nPhase 2: Panel installation on first 5 buildings\nPhase 3: Complete remaining installations\nPhase 4: Battery storage system deployment",
      budget: "$3.5M",
      timeline: "18 months",
      benefits: "Reduction of 1,200 tons of CO2 annually, energy assistance for 500+ low-income households, emergency power backup for critical facilities"
    },
    {
      id: 3,
      title: "Public WiFi Expansion",
      description: "Free public WiFi coverage in all parks and community centers",
      technicalDetails: "Installation of 120 outdoor-rated WiFi access points throughout public spaces, connected to the city's fiber optic network. Content filtering system ensures appropriate usage, while analytics track utilization patterns to optimize coverage.",
      implementation: "Phase 1: Core infrastructure upgrade\nPhase 2: Downtown and central park deployments\nPhase 3: Neighborhood parks and community centers\nPhase 4: Coverage optimization and expansion",
      budget: "$850K",
      timeline: "9 months",
      benefits: "Digital access for underserved populations, increased park utilization, support for outdoor education programs, emergency information distribution capability"
    },
    {
      id: 4,
      title: "Urban Green Spaces Development",
      description: "Convert vacant lots into community gardens and mini-parks",
      technicalDetails: "Transformation of 25 vacant city-owned lots into green spaces using sustainable landscaping practices. Each site will include native plants, water-efficient irrigation systems, and solar lighting. Community gardens will feature raised beds, composting stations, and tool storage.",
      implementation: "Phase 1: Site selection and community engagement\nPhase 2: Initial 10 site conversions\nPhase 3: Remaining site development\nPhase 4: Educational programming implementation",
      budget: "$1.8M",
      timeline: "15 months",
      benefits: "Creation of 15 acres of new green space, improved air quality, reduced urban heat island effect, increased property values in surrounding areas, community engagement opportunities"
    },
    {
      id: 5,
      title: "Smart Waste Management System",
      description: "IoT-enabled waste bins that notify collection services when full",
      technicalDetails: "Deployment of 500 solar-powered waste bins with fill-level sensors and compaction capabilities. Real-time data transmission to central management system optimizes collection routes. Integration with existing fleet management systems for seamless operations.",
      implementation: "Phase 1: Downtown pilot deployment (50 bins)\nPhase 2: Data analysis and system optimization\nPhase 3: Full deployment across commercial districts\nPhase 4: Residential area expansion",
      budget: "$1.5M",
      timeline: "10 months (completed)",
      benefits: "30% reduction in collection trips, 45% fuel savings, decreased overflow incidents, data-driven waste management planning"
    }
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Smart City Documentation</h1>
          <p className="mt-2 text-lg text-gray-600">
            Technical documentation for city improvement proposals
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px overflow-x-auto">
              <button
                onClick={() => setActiveSection('overview')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeSection === 'overview'
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Platform Overview
              </button>
              <button
                onClick={() => setActiveSection('proposals')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeSection === 'proposals'
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                Proposal Documentation
              </button>
              <button
                onClick={() => setActiveSection('api')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeSection === 'api'
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                API Reference
              </button>
              <button
                onClick={() => setActiveSection('guides')}
                className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                  activeSection === 'guides'
                    ? 'border-teal-500 text-teal-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                User Guides
              </button>
            </nav>
          </div>

          <div className="p-6">
            {activeSection === 'overview' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Smart City Collaborative Dashboard</h2>
                <p className="mb-4 text-gray-700">
                  The Smart City Collaborative Dashboard is a comprehensive platform designed to facilitate citizen engagement in urban development and governance. This documentation provides technical details about the platform's architecture, features, and implementation.
                </p>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">System Architecture</h3>
                <div className="bg-gray-100 p-4 rounded-md mb-4">
                  <p className="text-sm font-mono">
                    Frontend: React.js with Tailwind CSS<br />
                    Backend: Node.js with Express<br />
                    Database: MongoDB<br />
                    Authentication: JWT-based with role permissions<br />
                    Hosting: Cloud-based with CDN integration<br />
                    APIs: RESTful with GraphQL for complex data queries
                  </p>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Core Features</h3>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li><strong>User Authentication</strong> - Secure login system with role-based access control (Citizen, Department Official, Administrator)</li>
                  <li><strong>Issue Reporting</strong> - Multi-format system for citizens to report urban issues</li>
                  <li><strong>Interactive Map</strong> - Geospatial visualization of city issues and projects</li>
                  <li><strong>Proposal System</strong> - Platform for submitting, reviewing, and voting on city improvement proposals</li>
                  <li><strong>Department Dashboard</strong> - Specialized interfaces for city departments to manage their responsibilities</li>
                  <li><strong>Communication Tools</strong> - Channels for citizen-government dialogue</li>
                  <li><strong>Data Analytics</strong> - Insights on urban issues and citizen engagement</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mt-6 mb-3">Security Measures</h3>
                <p className="mb-4 text-gray-700">
                  The platform implements multiple security layers including data encryption, input validation, CSRF protection, rate limiting, and regular security audits. All personal data is handled in compliance with relevant privacy regulations.
                </p>
              </div>
            )}

            {activeSection === 'proposals' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Proposal Technical Documentation</h2>
                <p className="mb-6 text-gray-700">
                  Detailed technical specifications for current city improvement proposals. This documentation is intended for technical stakeholders, implementation teams, and interested citizens with technical backgrounds.
                </p>

                <div className="space-y-8">
                  {proposalDocs.map(proposal => (
                    <div key={proposal.id} className="border border-gray-200 rounded-lg overflow-hidden">
                      <div className="bg-gray-50 px-4 py-5 border-b border-gray-200 sm:px-6">
                        <h3 className="text-lg leading-6 font-medium text-gray-900">
                          {proposal.title}
                        </h3>
                        <p className="mt-1 max-w-2xl text-sm text-gray-500">
                          {proposal.description}
                        </p>
                      </div>
                      <div className="px-4 py-5 sm:p-6">
                        <dl className="grid grid-cols-1 gap-x-4 gap-y-6 sm:grid-cols-2">
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">Technical Specifications</dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {proposal.technicalDetails}
                            </dd>
                          </div>
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">Implementation Plan</dt>
                            <dd className="mt-1 text-sm text-gray-900 whitespace-pre-line">
                              {proposal.implementation}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Budget</dt>
                            <dd className="mt-1 text-sm text-gray-900">{proposal.budget}</dd>
                          </div>
                          <div>
                            <dt className="text-sm font-medium text-gray-500">Timeline</dt>
                            <dd className="mt-1 text-sm text-gray-900">{proposal.timeline}</dd>
                          </div>
                          <div className="sm:col-span-2">
                            <dt className="text-sm font-medium text-gray-500">Expected Benefits</dt>
                            <dd className="mt-1 text-sm text-gray-900">
                              {proposal.benefits}
                            </dd>
                          </div>
                        </dl>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'api' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">API Reference</h2>
                <p className="mb-6 text-gray-700">
                  Complete documentation for the Smart City platform's API endpoints, request formats, and response structures.
                </p>

                <div className="space-y-6">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Authentication</h3>
                    <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2">
                      POST /api/auth/login
                    </div>
                    <p className="text-sm text-gray-700 mb-2">Authenticates a user and returns a JWT token.</p>
                    <details className="text-sm">
                      <summary className="text-teal-600 cursor-pointer">View Example</summary>
                      <div className="mt-2 bg-gray-800 text-green-400 p-3 rounded-md font-mono text-xs overflow-x-auto">
                        {`// Request
POST /api/auth/login
Content-Type: application/json

{
  "email": "user@example.com",
  "password": "password123"
}

// Response
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60d21b4967d0d8992e610c85",
    "name": "John Doe",
    "email": "user@example.com",
    "role": "citizen"
  }
}`}
                      </div>
                    </details>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Proposals</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2">
                          GET /api/proposals
                        </div>
                        <p className="text-sm text-gray-700">Returns a list of all active proposals.</p>
                      </div>
                      <div>
                        <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2">
                          GET /api/proposals/:id
                        </div>
                        <p className="text-sm text-gray-700">Returns details for a specific proposal.</p>
                      </div>
                      <div>
                        <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2">
                          POST /api/proposals/:id/vote
                        </div>
                        <p className="text-sm text-gray-700">Submit a vote for a specific proposal.</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900 mb-2">Issues</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2">
                          POST /api/issues
                        </div>
                        <p className="text-sm text-gray-700">Report a new issue.</p>
                      </div>
                      <div>
                        <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2">
                          GET /api/issues/user
                        </div>
                        <p className="text-sm text-gray-700">Get all issues reported by the current user.</p>
                      </div>
                      <div>
                        <div className="bg-gray-100 p-3 rounded-md font-mono text-sm mb-2">
                          GET /api/issues/map
                        </div>
                        <p className="text-sm text-gray-700">Get geospatial data for issues to display on a map.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === 'guides' && (
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">User Guides</h2>
                <p className="mb-6 text-gray-700">
                  Step-by-step instructions for using the Smart City platform's features.
                </p>

                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Reporting an Issue</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                      <li>Navigate to the "Report Issue" section from the main menu</li>
                      <li>Select the issue category from the dropdown menu</li>
                      <li>Provide a clear title and detailed description of the issue</li>
                      <li>Upload photos if available (maximum 3 images, 5MB each)</li>
                      <li>Mark the location on the map or enable location services</li>
                      <li>Submit the form and receive a confirmation with tracking ID</li>
                    </ol>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">Voting on Proposals</h3>
                    <ol className="list-decimal pl-5 space-y-2 text-gray-700">
                      <li>Browse available proposals in the "Proposals" section</li>
                      <li>Click on a proposal to view its details</li>
                      <li>Review the proposal information, budget, and timeline</li>
                      <li>Click the "Vote" button and select your preference</li>
                      <li>Confirm your vote (note: votes cannot be changed after submission)</li>
                      <li>View updated results showing current voting statistics</li>
                    </ol>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documentation;
