import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Communication = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('transport');
  const [notifications, setNotifications] = useState([]);
  const [sharedFiles, setSharedFiles] = useState([]);
  
  // Mock data for demonstration
  useEffect(() => {
    // Mock messages
    const mockMessages = [
      {
        id: 1,
        sender: 'Sarah Johnson',
        role: 'Transport Department',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        message: 'We have received your report about the pothole on Main Street. Our team will inspect it tomorrow morning.',
        timestamp: '2023-07-05T09:30:00',
        isRead: true,
      },
      {
        id: 2,
        sender: 'You',
        role: 'Citizen',
        avatar: '',
        message: 'Thank you for the quick response! Could you provide an estimated time for the repair?',
        timestamp: '2023-07-05T09:45:00',
        isRead: true,
      },
      {
        id: 3,
        sender: 'Sarah Johnson',
        role: 'Transport Department',
        avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
        message: 'Based on our current schedule, repairs should be completed within 3-5 business days after inspection.',
        timestamp: '2023-07-05T10:15:00',
        isRead: true,
      },
      {
        id: 4,
        sender: 'Michael Chen',
        role: 'Transport Department',
        avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
        message: 'I will be leading the repair team. We will try to minimize any traffic disruptions during the work.',
        timestamp: '2023-07-05T14:20:00',
        isRead: false,
      },
    ];
    
    // Mock notifications
    const mockNotifications = [
      {
        id: 1,
        title: 'Issue Status Updated',
        description: 'Your reported pothole issue has been updated to "In Progress"',
        timestamp: '2023-07-05T15:30:00',
        isRead: false,
      },
      {
        id: 2,
        title: 'New Message',
        description: 'You have a new message from Transport Department',
        timestamp: '2023-07-05T14:20:00',
        isRead: false,
      },
      {
        id: 3,
        title: 'Issue Resolved',
        description: 'Your reported streetlight issue has been marked as resolved',
        timestamp: '2023-07-04T11:45:00',
        isRead: true,
      },
    ];
    
    // Mock shared files
    const mockSharedFiles = [
      {
        id: 1,
        name: 'Pothole_Repair_Schedule.pdf',
        type: 'pdf',
        size: '1.2 MB',
        sender: 'Transport Department',
        timestamp: '2023-07-05T10:30:00',
      },
      {
        id: 2,
        name: 'Intersection_Plan.jpg',
        type: 'image',
        size: '3.5 MB',
        sender: 'Transport Department',
        timestamp: '2023-07-04T16:15:00',
      },
      {
        id: 3,
        name: 'Complaint_Form.docx',
        type: 'document',
        size: '0.8 MB',
        sender: 'System',
        timestamp: '2023-07-03T09:20:00',
      },
    ];
    
    setMessages(mockMessages);
    setNotifications(mockNotifications);
    setSharedFiles(mockSharedFiles);
  }, []);
  
  const departments = [
    { id: 'transport', name: 'Transport Department' },
    { id: 'sanitation', name: 'Sanitation Department' },
    { id: 'health', name: 'Health Department' },
    { id: 'utilities', name: 'Utilities Department' },
    { id: 'parks', name: 'Parks & Recreation' },
  ];

  const handleSendMessage = (e) => {
    e.preventDefault();
    
    if (newMessage.trim() === '') return;
    
    const newMsg = {
      id: messages.length + 1,
      sender: 'You',
      role: 'Citizen',
      avatar: '',
      message: newMessage,
      timestamp: new Date().toISOString(),
      isRead: true,
    };
    
    setMessages([...messages, newMsg]);
    setNewMessage('');
    
    // Simulate response after a delay (in a real app, this would come from the server)
    setTimeout(() => {
      const response = {
        id: messages.length + 2,
        sender: 'Department Bot',
        role: selectedDepartment === 'transport' ? 'Transport Department' : 
              selectedDepartment === 'sanitation' ? 'Sanitation Department' : 'System',
        avatar: 'https://randomuser.me/api/portraits/lego/1.jpg',
        message: `Thank you for your message. A ${departments.find(d => d.id === selectedDepartment).name} representative will respond to you shortly.`,
        timestamp: new Date().toISOString(),
        isRead: false,
      };
      
      setMessages(prevMessages => [...prevMessages, response]);
    }, 1000);
  };

  const markAsRead = (id) => {
    setNotifications(
      notifications.map(notification => 
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return (
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'image':
        return (
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        );
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (date.toDateString() === today.toDateString()) {
      return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else if (date.toDateString() === yesterday.toDateString()) {
      return `Yesterday at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric' }) + 
             ` at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Communication Center</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Connect directly with department officials and stay updated on your reported issues
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tabs */}
        <div className="flex border-b border-gray-200 mb-8">
          <button
            onClick={() => setActiveTab('chat')}
            className={`py-4 px-6 font-medium text-sm focus:outline-none ${
              activeTab === 'chat'
                ? 'border-b-2 border-teal-500 text-teal-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Department Chat
          </button>
          <button
            onClick={() => setActiveTab('notifications')}
            className={`py-4 px-6 font-medium text-sm focus:outline-none ${
              activeTab === 'notifications'
                ? 'border-b-2 border-teal-500 text-teal-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Notifications
          </button>
          <button
            onClick={() => setActiveTab('files')}
            className={`py-4 px-6 font-medium text-sm focus:outline-none ${
              activeTab === 'files'
                ? 'border-b-2 border-teal-500 text-teal-600'
                : 'text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            Shared Files
          </button>
        </div>

        {/* Chat Tab */}
        {activeTab === 'chat' && (
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Department Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-4 mb-6">
                <h3 className="font-medium text-gray-800 mb-4">Select Department</h3>
                <div className="space-y-2">
                  {departments.map((dept) => (
                    <button
                      key={dept.id}
                      onClick={() => setSelectedDepartment(dept.id)}
                      className={`w-full text-left px-4 py-2 rounded-lg ${
                        selectedDepartment === dept.id
                          ? 'bg-teal-50 text-teal-700 font-medium'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      {dept.name}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="bg-white rounded-xl shadow-md p-4">
                <h3 className="font-medium text-gray-800 mb-4">Recent Contacts</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                    <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                      <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Sarah Johnson" className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-800">Sarah Johnson</p>
                      <p className="text-xs text-gray-500">Transport Department</p>
                    </div>
                  </div>
                  <div className="flex items-center p-2 hover:bg-gray-50 rounded-lg">
                    <div className="h-10 w-10 rounded-full overflow-hidden flex-shrink-0">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Michael Chen" className="h-full w-full object-cover" />
                    </div>
                    <div className="ml-3">
                      <p className="text-sm font-medium text-gray-800">Michael Chen</p>
                      <p className="text-xs text-gray-500">Transport Department</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Chat Window */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col h-[600px]">
                {/* Chat Header */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex items-center">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-r from-teal-500 to-blue-600 flex items-center justify-center text-white">
                      {selectedDepartment.charAt(0).toUpperCase()}
                    </div>
                    <div className="ml-3">
                      <h3 className="text-lg font-medium text-gray-800">
                        {departments.find(d => d.id === selectedDepartment).name}
                      </h3>
                      <p className="text-sm text-gray-500">Online</p>
                    </div>
                  </div>
                </div>
                
                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6">
                  {messages.map((msg) => (
                    <div key={msg.id} className={`flex ${msg.sender === 'You' ? 'justify-end' : 'justify-start'}`}>
                      <div className={`max-w-[80%] ${msg.sender === 'You' ? 'order-2' : 'order-1'}`}>
                        {msg.sender !== 'You' && (
                          <div className="flex items-center mb-1">
                            <div className="h-6 w-6 rounded-full overflow-hidden mr-2">
                              {msg.avatar ? (
                                <img src={msg.avatar} alt={msg.sender} className="h-full w-full object-cover" />
                              ) : (
                                <div className="h-full w-full bg-gray-300"></div>
                              )}
                            </div>
                            <span className="text-xs font-medium text-gray-800">{msg.sender}</span>
                            <span className="text-xs text-gray-500 ml-2">({msg.role})</span>
                          </div>
                        )}
                        <div className={`rounded-lg px-4 py-2 ${
                          msg.sender === 'You' 
                            ? 'bg-gradient-to-r from-teal-500 to-blue-600 text-white' 
                            : 'bg-gray-100 text-gray-800'
                        }`}>
                          <p className="text-sm">{msg.message}</p>
                        </div>
                        <p className="text-xs text-gray-500 mt-1">{formatDate(msg.timestamp)}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Chat Input */}
                <div className="border-t border-gray-200 p-4">
                  <form onSubmit={handleSendMessage} className="flex items-end">
                    <div className="flex-1">
                      <textarea
                        rows="3"
                        className="block w-full rounded-lg border border-gray-300 shadow-sm py-2 px-4 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                        placeholder="Type your message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                      ></textarea>
                    </div>
                    <div className="ml-3">
                      <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      >
                        <svg className="h-5 w-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Notifications</h2>
              <div className="space-y-6">
                {notifications.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No notifications to display</p>
                ) : (
                  notifications.map((notification) => (
                    <div 
                      key={notification.id} 
                      className={`p-4 rounded-lg border ${notification.isRead ? 'bg-white border-gray-200' : 'bg-blue-50 border-blue-200'}`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-base font-medium text-gray-800">{notification.title}</h3>
                          <p className="text-sm text-gray-600 mt-1">{notification.description}</p>
                          <p className="text-xs text-gray-500 mt-2">{formatDate(notification.timestamp)}</p>
                        </div>
                        {!notification.isRead && (
                          <button 
                            onClick={() => markAsRead(notification.id)}
                            className="text-xs text-teal-600 hover:text-teal-800"
                          >
                            Mark as read
                          </button>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}

        {/* Shared Files Tab */}
        {activeTab === 'files' && (
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-6">Shared Files</h2>
              <div className="space-y-4">
                {sharedFiles.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No shared files to display</p>
                ) : (
                  sharedFiles.map((file) => (
                    <div key={file.id} className="flex items-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50">
                      <div className="flex-shrink-0">
                        {getFileIcon(file.type)}
                      </div>
                      <div className="ml-4 flex-1">
                        <h3 className="text-base font-medium text-gray-800">{file.name}</h3>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span>{file.size}</span>
                          <span className="mx-2">•</span>
                          <span>Shared by {file.sender}</span>
                          <span className="mx-2">•</span>
                          <span>{formatDate(file.timestamp)}</span>
                        </div>
                      </div>
                      <div>
                        <button className="text-teal-600 hover:text-teal-800">
                          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Communication;
