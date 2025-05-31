import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Animated counter hook
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
    <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 hover:shadow-xl hover:scale-105 border border-gray-100">
      <div className="flex items-center">
        <div className={`flex-shrink-0 h-12 w-12 rounded-md bg-gradient-to-r ${color} flex items-center justify-center text-white`}>
          {icon}
        </div>
        <div className="ml-5">
          <p className="text-sm font-medium text-gray-500 truncate">{title}</p>
          <p className="mt-1 text-3xl font-semibold text-gray-900">{count}</p>
        </div>
      </div>
    </div>
  );
};

// Project card component
const ProjectCard = ({ title, description, startDate, endDate, progress, image, color = "from-teal-500 to-blue-600" }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 transform hover:shadow-lg hover:scale-105">
    <div className="h-40 bg-gray-200 relative">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
    <div className="p-6">
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between text-xs text-gray-500 mb-3">
        <span>Started: {startDate}</span>
        <span>Target: {endDate}</span>
      </div>
      <div className="relative pt-1">
        <div className="overflow-hidden h-2 mb-1 text-xs flex rounded bg-gray-200">
          <div 
            style={{ width: `${progress}%` }} 
            className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${color}`}
          ></div>
        </div>
        <div className="flex justify-between text-xs">
          <span className="text-gray-600 font-semibold">Progress</span>
          <span className="text-gray-600 font-semibold">{progress}%</span>
        </div>
      </div>
    </div>
  </div>
);

// Issue card component
const IssueCard = ({ title, priority, reported, description, location, id }) => (
  <div className="bg-white rounded-xl shadow-md p-6 transition-all duration-300 transform hover:shadow-lg">
    <div className="flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-500 mt-1">{location}</p>
      </div>
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
        priority === 'high' 
          ? 'bg-red-100 text-red-800' 
          : priority === 'medium'
          ? 'bg-yellow-100 text-yellow-800'
          : 'bg-green-100 text-green-800'
      }`}>
        {priority.charAt(0).toUpperCase() + priority.slice(1)} Priority
      </span>
    </div>
    <p className="mt-3 text-sm text-gray-600">{description}</p>
    <div className="mt-4 flex justify-between items-center">
      <span className="text-xs text-gray-500">ID: {id}</span>
      <span className="text-xs text-gray-500">Reported {reported}</span>
    </div>
    <div className="mt-4 flex space-x-3">
      <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
        View Details
      </button>
      <button className="inline-flex items-center px-3 py-1 border border-transparent text-xs font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500">
        Assign
      </button>
    </div>
  </div>
);

// Testimonial card component
const TestimonialCard = ({ quote, name, role, image }) => (
  <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 rounded-full overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <p className="text-sm text-gray-500">{role}</p>
      </div>
    </div>
    <p className="text-gray-600 italic">"{quote}"</p>
  </div>
);

// Section header component
const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold text-gray-800 mb-3">{title}</h2>
    {subtitle && <p className="text-lg text-gray-600 max-w-3xl mx-auto">{subtitle}</p>}
  </div>
);

// Department section component
const DepartmentSection = ({ title, color, children }) => (
  <section id={title.toLowerCase()} className="py-16 border-b border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className={`text-3xl font-bold mb-12 bg-gradient-to-r ${color} bg-clip-text text-transparent`}>{title} Department</h2>
      {children}
    </div>
  </section>
);

const Departments = () => {
  // For parallax effect
  const [offset, setOffset] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Transport Department Data
  const transportStats = [
    { 
      name: 'Open Issues', 
      value: 24, 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      )
    },
    { 
      name: 'Resolved This Week', 
      value: 18, 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
        </svg>
      )
    },
    { 
      name: 'Avg. Resolution Time', 
      value: 3, 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  const transportProjects = [
    {
      title: 'Smart Traffic Management',
      description: 'AI-powered traffic light optimization to reduce congestion and improve traffic flow across major intersections.',
      startDate: 'Mar 15, 2023',
      endDate: 'Dec 10, 2023',
      progress: 65,
      image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Public Transit Tracking App',
      description: 'Real-time bus and metro tracking system with predictive arrival times and crowdedness indicators.',
      startDate: 'Jan 5, 2023',
      endDate: 'Sep 30, 2023',
      progress: 80,
      image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Bicycle Lane Expansion',
      description: 'Adding 15km of protected bicycle lanes to promote sustainable transportation and reduce carbon emissions.',
      startDate: 'Apr 20, 2023',
      endDate: 'Nov 15, 2023',
      progress: 40,
      image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  const transportIssues = [
    {
      id: 'ISS-2347',
      title: 'Traffic light malfunction at 5th & Main',
      priority: 'high',
      reported: '3 hours ago',
      description: 'Traffic light showing green in all directions simultaneously.',
      location: 'Downtown, 5th Avenue & Main Street'
    },
    {
      id: 'ISS-2342',
      title: 'Bus shelter damaged by storm',
      priority: 'medium',
      reported: '2 days ago',
      description: 'Glass panels broken and roof partially collapsed after last night\'s storm.',
      location: 'Westside, Route 34 Stop #12'
    }
  ];

  // Sanitation Department Data
  const sanitationStats = [
    { 
      name: 'Weekly Collections', 
      value: 342, 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
      )
    },
    { 
      name: 'Recycling Rate', 
      value: 68, 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      )
    },
    { 
      name: 'Cleanup Campaigns', 
      value: 12, 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9" />
        </svg>
      )
    }
  ];

  const sanitationProjects = [
    {
      title: 'Smart Waste Bins Network',
      description: 'Installing solar-powered compacting bins with fill-level sensors throughout the city center.',
      startDate: 'Feb 10, 2023',
      endDate: 'Oct 15, 2023',
      progress: 75,
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    {
      title: 'Community Recycling Program',
      description: 'Expanding the community recycling program with new collection points and educational initiatives.',
      startDate: 'Apr 1, 2023',
      endDate: 'Dec 31, 2023',
      progress: 50,
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    }
  ];

  // Health Department Data
  const healthStats = [
    { 
      name: 'Emergency Response Time', 
      value: 8, 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    { 
      name: 'Active Programs', 
      value: 15, 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      )
    },
    { 
      name: 'Satisfaction Rating', 
      value: 92, 
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
        </svg>
      )
    }
  ];

  const healthTestimonials = [
    {
      quote: "The new telehealth program has been a game-changer for our family. We can connect with healthcare providers without leaving home.",
      name: "Sarah Johnson",
      role: "City Resident",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      quote: "The emergency response team arrived within minutes when my neighbor needed help. Their professionalism saved a life that day.",
      name: "Michael Chen",
      role: "Community Leader",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      quote: "The public health initiatives have significantly improved air quality in our neighborhood. We can finally enjoy outdoor activities.",
      name: "Alisha Patel",
      role: "Environmental Advocate",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  // KPI Data
  const departmentKPIs = [
    {
      name: 'Transport',
      issues: 87,
      resolved: 63,
      responseTime: 3.2,
      color: 'from-blue-500 to-teal-500'
    },
    {
      name: 'Sanitation',
      issues: 56,
      resolved: 48,
      responseTime: 2.4,
      color: 'from-green-500 to-teal-500'
    },
    {
      name: 'Health',
      issues: 42,
      resolved: 39,
      responseTime: 1.8,
      color: 'from-red-500 to-pink-500'
    },
    {
      name: 'Parks & Recreation',
      issues: 35,
      resolved: 28,
      responseTime: 4.1,
      color: 'from-emerald-500 to-green-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute top-0 left-0 w-96 h-96 bg-teal-500 rounded-full opacity-20 blur-3xl"
            style={{ transform: `translate(${offset * 0.05}px, ${offset * 0.05}px)` }}
          ></div>
          <div 
            className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-20 blur-3xl"
            style={{ transform: `translate(${-offset * 0.05}px, ${-offset * 0.05}px)` }}
          ></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-white tracking-tight sm:text-5xl lg:text-6xl mb-6">
              Explore City Departments
            </h1>
            <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time collaboration between citizens and city officials to build a smarter, 
              more responsive urban environment through transparent department operations.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <a href="#transport" className="px-6 py-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                Transport
              </a>
              <a href="#sanitation" className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                Sanitation
              </a>
              <a href="#health" className="px-6 py-3 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-lg font-medium transition-all duration-300 hover:shadow-lg">
                Health
              </a>
              <a href="#kpis" className="px-6 py-3 bg-white bg-opacity-10 text-white rounded-lg font-medium backdrop-blur-sm transition-all duration-300 hover:bg-opacity-20">
                Department KPIs
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
      </section>

      {/* Transport Department Section */}
      <DepartmentSection title="Transport" color="from-blue-500 to-teal-500">
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Department Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {transportStats.map((stat, index) => (
              <StatCard 
                key={index}
                title={stat.name} 
                value={stat.value} 
                icon={stat.icon}
                color="from-blue-500 to-teal-500"
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Ongoing Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transportProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                {...project}
                color="from-blue-500 to-teal-500"
              />
            ))}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-semibold text-gray-700">Recent Issues</h3>
            <Link to="/issues/reported" className="text-sm font-medium text-blue-600 hover:text-blue-500 flex items-center">
              View all issues
              <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {transportIssues.map((issue, index) => (
              <IssueCard 
                key={index}
                {...issue}
              />
            ))}
          </div>
        </div>
      </DepartmentSection>

      {/* Sanitation Department Section */}
      <DepartmentSection title="Sanitation" color="from-green-500 to-teal-500">
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Waste Collection Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sanitationStats.map((stat, index) => (
              <StatCard 
                key={index}
                title={stat.name} 
                value={stat.value} 
                icon={stat.icon}
                color="from-green-500 to-teal-500"
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Active Cleanup Projects</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sanitationProjects.map((project, index) => (
              <ProjectCard 
                key={index}
                {...project}
                color="from-green-500 to-teal-500"
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Weekly Performance Summary</h3>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-2">Waste Collection Efficiency</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                <div className="h-2.5 rounded-full bg-gradient-to-r from-green-500 to-teal-500" style={{ width: '92%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Target: 90%</span>
                <span>Achieved: 92%</span>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-gray-700 mb-2">Recycling Program Participation</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                <div className="h-2.5 rounded-full bg-gradient-to-r from-green-500 to-teal-500" style={{ width: '68%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Target: 75%</span>
                <span>Achieved: 68%</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-700 mb-2">Complaint Resolution Rate</h4>
              <div className="w-full bg-gray-200 rounded-full h-2.5 mb-1">
                <div className="h-2.5 rounded-full bg-gradient-to-r from-green-500 to-teal-500" style={{ width: '85%' }}></div>
              </div>
              <div className="flex justify-between text-sm text-gray-500">
                <span>Target: 80%</span>
                <span>Achieved: 85%</span>
              </div>
            </div>
          </div>
        </div>
      </DepartmentSection>

      {/* Health Department Section */}
      <DepartmentSection title="Health" color="from-red-500 to-pink-500">
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Emergency Response Metrics</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {healthStats.map((stat, index) => (
              <StatCard 
                key={index}
                title={stat.name} 
                value={stat.value} 
                icon={stat.icon}
                color="from-red-500 to-pink-500"
              />
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-semibold text-gray-700 mb-6">Program Statistics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Active Health Programs</h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">Telehealth Services</span>
                    <span className="text-sm font-medium text-gray-700">Telehealth Services</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DepartmentSection>
    </div>
  );
};

export default Departments;
