import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Animated counter hook (reused from HomePage)
const useCounter = (end, start = 0, duration = 2000) => {
  const [count, setCount] = useState(start);
  
  useEffect(() => {
    let startTime;
    let animationFrame;
    
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * (end - start) + start));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };
    
    animationFrame = requestAnimationFrame(step);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, start, duration]);
  
  return count;
};

// Stat card component
const StatCard = ({ title, value, icon, color = "from-teal-500 to-blue-600" }) => {
  const count = useCounter(value);
  
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-500 text-sm font-medium">{title}</p>
          <h3 className="text-3xl font-bold bg-gradient-to-r from-teal-500 to-blue-600 bg-clip-text text-transparent">{count}</h3>
        </div>
        <div className={`bg-gradient-to-r ${color} p-3 rounded-full text-white`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

// Task card component
const TaskCard = ({ title, status, priority, deadline, description }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-green-100 text-green-800';
      case 'in progress': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'completed': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-orange-100 text-orange-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <div className="flex gap-2">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(status)}`}>
            {status}
          </span>
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${getPriorityColor(priority)}`}>
            {priority}
          </span>
        </div>
      </div>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm">Deadline: {deadline}</p>
        <Link to="#" className="text-teal-600 hover:text-teal-700 font-medium text-sm flex items-center">
          View Details
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

// Chart component placeholder
const ChartPlaceholder = ({ title }) => (
  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
    <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
      <p className="text-gray-500">Chart visualization would be displayed here</p>
    </div>
  </div>
);

// Main Dashboard component
const Dashboard = () => {
  // State to track which user role is active
  const [userRole, setUserRole] = useState('citizen'); // 'admin', 'official', 'citizen'
  
  // For demo purposes - toggle between roles
  const cycleRole = () => {
    const roles = ['citizen', 'official', 'admin'];
    const currentIndex = roles.indexOf(userRole);
    const nextIndex = (currentIndex + 1) % roles.length;
    setUserRole(roles[nextIndex]);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Dashboard</h1>
              <p className="text-lg text-blue-100 max-w-3xl">
                Welcome to your {userRole} dashboard. Manage your city activities all in one place.
              </p>
            </div>
            <div>
              <button
                onClick={cycleRole}
                className="px-4 py-2 bg-white text-teal-600 rounded-md hover:bg-blue-50 transition-colors"
              >
                Switch to {userRole === 'citizen' ? 'Official' : userRole === 'official' ? 'Admin' : 'Citizen'} View
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Citizen Dashboard */}
        {userRole === 'citizen' && (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <StatCard 
                title="My Reported Issues" 
                value={8} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
              />
              <StatCard 
                title="Resolved Issues" 
                value={5} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                color="from-green-500 to-emerald-600"
              />
              <StatCard 
                title="Votes Cast" 
                value={12} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>}
                color="from-purple-500 to-indigo-600"
              />
              <StatCard 
                title="Unread Notifications" 
                value={3} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>}
                color="from-amber-500 to-orange-600"
              />
            </div>

            {/* Recent Issues and Upcoming Votes */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">My Recent Issues</h2>
                <div className="space-y-6">
                  <TaskCard 
                    title="Pothole on Main Street"
                    status="In Progress"
                    priority="Medium"
                    deadline="2023-07-15"
                    description="Large pothole causing traffic issues and potential damage to vehicles."
                  />
                  <TaskCard 
                    title="Street Light Outage"
                    status="Open"
                    priority="Low"
                    deadline="2023-07-20"
                    description="Multiple street lights not working in the downtown area."
                  />
                  <Link to="/issues/reported" className="inline-block mt-4 text-teal-600 hover:text-teal-700 font-medium">
                    View all my issues →
                  </Link>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Votes</h2>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="divide-y divide-gray-200">
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">New Bike Lanes on Main Street</h3>
                      <p className="text-gray-600 mb-4">Proposal to add protected bike lanes along Main Street to improve cyclist safety.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Deadline: July 30, 2023</span>
                        <Link to="/proposals/view" className="text-teal-600 hover:text-teal-700 font-medium">Vote Now</Link>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Community Garden in Central Park</h3>
                      <p className="text-gray-600 mb-4">Create a community garden in the northeast corner of Central Park.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Deadline: August 15, 2023</span>
                        <Link to="/proposals/view" className="text-teal-600 hover:text-teal-700 font-medium">Vote Now</Link>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Public Wi-Fi in Downtown Area</h3>
                      <p className="text-gray-600 mb-4">Install free public Wi-Fi hotspots throughout the downtown business district.</p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500">Deadline: August 5, 2023</span>
                        <Link to="/proposals/view" className="text-teal-600 hover:text-teal-700 font-medium">Vote Now</Link>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <Link to="/proposals/view" className="text-teal-600 hover:text-teal-700 font-medium">
                      View all proposals →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Activity Feed */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Recent Activity</h2>
              <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
                <div className="flow-root">
                  <ul className="-mb-8">
                    <li className="relative pb-8">
                      <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      <div className="relative flex items-start space-x-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                            </svg>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              You reported a new issue
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Pothole on Main Street
                            </p>
                          </div>
                          <div className="mt-2 text-sm text-gray-700">
                            <p>Your issue has been assigned to the Transport Department.</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 self-center">
                          <p className="text-sm text-gray-500">2 days ago</p>
                        </div>
                      </div>
                    </li>

                    <li className="relative pb-8">
                      <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      <div className="relative flex items-start space-x-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              Issue status updated
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Street Light Outage
                            </p>
                          </div>
                          <div className="mt-2 text-sm text-gray-700">
                            <p>Your issue has been marked as "In Progress".</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 self-center">
                          <p className="text-sm text-gray-500">5 days ago</p>
                        </div>
                      </div>
                    </li>

                    <li className="relative pb-8">
                      <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                      <div className="relative flex items-start space-x-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                            </svg>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              You voted on a proposal
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              New Bike Lanes on Main Street
                            </p>
                          </div>
                          <div className="mt-2 text-sm text-gray-700">
                            <p>Thank you for participating in community decision-making!</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 self-center">
                          <p className="text-sm text-gray-500">1 week ago</p>
                        </div>
                      </div>
                    </li>

                    <li className="relative">
                      <div className="relative flex items-start space-x-3">
                        <div className="relative">
                          <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                        </div>
                        <div className="min-w-0 flex-1">
                          <div>
                            <div className="text-sm font-medium text-gray-900">
                              Issue resolved
                            </div>
                            <p className="mt-0.5 text-sm text-gray-500">
                              Garbage Collection Delay
                            </p>
                          </div>
                          <div className="mt-2 text-sm text-gray-700">
                            <p>Your reported issue has been successfully resolved.</p>
                          </div>
                        </div>
                        <div className="flex-shrink-0 self-center">
                          <p className="text-sm text-gray-500">2 weeks ago</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mt-6">
                  <Link to="/dashboard/activity" className="text-teal-600 hover:text-teal-700 font-medium">
                    View all activity →
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Official Dashboard */}
        {userRole === 'official' && (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <StatCard 
                title="Assigned Issues" 
                value={24} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
              />
              <StatCard 
                title="Pending Review" 
                value={8} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>}
                color="from-amber-500 to-orange-600"
              />
              <StatCard 
                title="Resolved This Week" 
                value={17} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                color="from-green-500 to-emerald-600"
              />
              <StatCard 
                title="Avg. Response Time" 
                value={3} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                color="from-blue-500 to-indigo-600"
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ChartPlaceholder title="Issues by Category" />
              <ChartPlaceholder title="Resolution Time Trend" />
            </div>

            {/* Tasks and Team */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Assigned Tasks</h2>
                <div className="space-y-6">
                  <TaskCard 
                    title="Traffic Light Inspection"
                    status="In Progress"
                    priority="High"
                    deadline="2023-07-12"
                    description="Inspect and repair malfunctioning traffic light at 5th and Oak intersection."
                  />
                  <TaskCard 
                    title="Pothole Repair"
                    status="Pending"
                    priority="Medium"
                    deadline="2023-07-18"
                    description="Schedule repair team for multiple potholes on Main Street between 3rd and 5th Avenue."
                  />
                  <TaskCard 
                    title="Street Sign Replacement"
                    status="Open"
                    priority="Low"
                    deadline="2023-07-25"
                    description="Replace damaged street signs in the downtown area."
                  />
                  <Link to="/dashboard/assigned" className="inline-block mt-4 text-teal-600 hover:text-teal-700 font-medium">
                    View all tasks →
                  </Link>
                </div>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Team Communication</h2>
                <div className="bg-white rounded-xl shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="flow-root">
                      <ul className="-mb-8">
                        <li className="relative pb-8">
                          <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                          <div className="relative flex items-start space-x-3">
                            <div className="relative">
                              <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
                                SJ
                              </div>
                            </div>
                            <div className="min-w-0 flex-1 bg-gray-100 rounded-lg p-3">
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  Sarah Johnson
                                </div>
                                <p className="mt-0.5 text-xs text-gray-500">
                                  Today at 10:30 AM
                                </p>
                              </div>
                              <div className="mt-2 text-sm text-gray-700">
                                <p>Team, we need to prioritize the traffic light repair at 5th and Oak. It's causing significant congestion during rush hour.</p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="relative pb-8">
                          <span className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200" aria-hidden="true"></span>
                          <div className="relative flex items-start space-x-3">
                            <div className="relative">
                              <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
                                RB
                              </div>
                            </div>
                            <div className="min-w-0 flex-1 bg-gray-100 rounded-lg p-3">
                              <div>
                                <div className="text-sm font-medium text-gray-900">
                                  Robert Brown
                                </div>
                                <p className="mt-0.5 text-xs text-gray-500">
                                  Today at 11:15 AM
                                </p>
                              </div>
                              <div className="mt-2 text-sm text-gray-700">
                                <p>I've scheduled the repair team for tomorrow morning. They'll have it fixed by noon.</p>
                              </div>
                            </div>
                          </div>
                        </li>

                        <li className="relative">
                          <div className="relative flex items-start space-x-3">
                            <div className="relative">
                              <div className="h-10 w-10 rounded-full bg-teal-500 flex items-center justify-center text-white">
                                You
                              </div>
                            </div>
                            <div className="min-w-0 flex-1">
                              <div className="border border-gray-300 rounded-lg shadow-sm overflow-hidden focus-within:border-teal-500 focus-within:ring-1 focus-within:ring-teal-500">
                                <textarea
                                  rows="3"
                                  className="block w-full py-3 px-4 border-0 resize-none focus:ring-0 focus:outline-none sm:text-sm"
                                  placeholder="Reply to this conversation..."
                                ></textarea>
                                <div className="py-2 px-4 bg-gray-50 flex justify-between">
                                  <div className="flex items-center space-x-2">
                                    <button type="button" className="text-gray-500 hover:text-gray-700">
                                      <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                      </svg>
                                    </button>
                                  </div>
                                  <button
                                    type="submit"
                                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
                                  >
                                    Send
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-6 py-4">
                    <Link to="/communication/chat" className="text-teal-600 hover:text-teal-700 font-medium">
                      Open full chat →
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Admin Dashboard */}
        {userRole === 'admin' && (
          <>
            {/* Stats Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <StatCard 
                title="Total Users" 
                value={1250} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>}
              />
              <StatCard 
                title="Active Issues" 
                value={187} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                color="from-amber-500 to-orange-600"
              />
              <StatCard 
                title="Proposals" 
                value={42} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>}
                color="from-blue-500 to-indigo-600"
              />
              <StatCard 
                title="System Health" 
                value={98} 
                icon={<svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>}
                color="from-green-500 to-emerald-600"
              />
            </div>

            {/* Charts Row */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              <ChartPlaceholder title="User Growth" />
              <ChartPlaceholder title="Issue Resolution Rate" />
            </div>

            {/* Department Performance */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Department Performance</h2>
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Department
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Active Issues
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Resolved This Month
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Avg. Resolution Time
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Satisfaction
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Transport</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">56</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">78</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">3.2 days</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900 mr-2">87%</span>
                          <div className="w-24 bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '87%' }}></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Sanitation</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">42</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">65</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">2.5 days</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900 mr-2">92%</span>
                          <div className="w-24 bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Health</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">28</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">34</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">1.8 days</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900 mr-2">95%</span>
                          <div className="w-24 bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                            </svg>
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">Parks & Recreation</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">35</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">41</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">4.1 days</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-900 mr-2">83%</span>
                          <div className="w-24 bg-gray-200 rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '83%' }}></div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Quick Actions */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Quick Actions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link to="/dashboard/users" className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
                  Manage Users
                </Link>
                <Link to="/dashboard/issues" className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
                  Manage Issues
                </Link>
                <Link to="/dashboard/proposals" className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
                  Manage Proposals
                </Link>
                <Link to="/dashboard/notifications" className="bg-white rounded-xl shadow-md p-6 border border-gray-300">
                  Manage Notifications
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
