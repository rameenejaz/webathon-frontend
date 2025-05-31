import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Communication = () => {
  const [activeTab, setActiveTab] = useState('chat');
  const [message, setMessage] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('transport');
  
  // Mock data for chat messages
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'John Doe',
      role: 'citizen',
      department: 'transport',
      content: 'Hi, I reported a pothole on Main Street last week. Any updates?',
      timestamp: '2023-06-15T10:30:00',
      avatar: 'JD'
    },
    {
      id: 2,
      sender: 'Sarah Johnson',
      role: 'official',
      department: 'transport',
      content: 'Hello John, thanks for your report. Our team has scheduled repairs for tomorrow morning. We appreciate your patience!',
      timestamp: '2023-06-15T11:15:00',
      avatar: 'SJ'
    },
    {
      id: 3,
      sender: 'John Doe',
      role: 'citizen',
      department: 'transport',
      content: 'That\'s great news! Thank you for the quick response.',
      timestamp: '2023-06-15T11:20:00',
      avatar: 'JD'
    },
    {
      id: 4,
      sender: 'Michael Chen',
      role: 'citizen',
      department: 'transport',
      content: 'I\'ve noticed the traffic light at 5th and Oak is malfunctioning. It stays red for too long.',
      timestamp: '2023-06-16T09:45:00',
      avatar: 'MC'
    },
    {
      id: 5,
      sender: 'Sarah Johnson',
      role: 'official',
      department: 'transport',
      content: 'Thank you for bringing this to our attention, Michael. We\'ll send a technician to check it today.',
      timestamp: '2023-06-16T10:30:00',
      avatar: 'SJ'
    }
  ]);

  // Mock data for notifications
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: 'Issue Update',
      content: 'Your reported pothole on Main Street has been fixed.',
      timestamp: '2023-06-17T14:30:00',
      read: false,
      type: 'issue_update'
    },
    {
      id: 2,
      title: 'New Proposal',
      content: 'A new proposal for bike lanes has been submitted in your neighborhood.',
      timestamp: '2023-06-16T10:15:00',
      read: true,
      type: 'proposal'
    },
    {
      id: 3,
      title: 'Community Event',
      content: 'Join us for a neighborhood cleanup this Saturday at 9 AM.',
      timestamp: '2023-06-15T16:45:00',
      read: false,
      type: 'event'
    },
    {
      id: 4,
      title: 'Department Announcement',
      content: 'The Transport Department will be conducting road surveys next week.',
      timestamp: '2023-06-14T11:20:00',
      read: true,
      type: 'announcement'
    },
    {
      id: 5,
      title: 'Voting Reminder',
      content: 'Don\'t forget to vote on the community garden proposal before June 30.',
      timestamp: '2023-06-13T09:00:00',
      read: false,
      type: 'voting'
    }
  ]);

  // Mock data for shared files
  const [sharedFiles, setSharedFiles] = useState([
    {
      id: 1,
      name: 'City Budget 2023.pdf',
      size: '2.4 MB',
      uploadedBy: 'Admin',
      timestamp: '2023-05-10T09:30:00',
      type: 'pdf',
      department: 'all'
    },
    {
      id: 2,
      name: 'Road Maintenance Schedule.xlsx',
      size: '1.8 MB',
      uploadedBy: 'Transport Department',
      timestamp: '2023-06-01T14:15:00',
      type: 'excel',
      department: 'transport'
    },
    {
      id: 3,
      name: 'Community Garden Proposal.docx',
      size: '3.2 MB',
      uploadedBy: 'Parks Department',
      timestamp: '2023-06-05T11:45:00',
      type: 'word',
      department: 'parks'
    },
    {
      id: 4,
      name: 'Public Health Advisory.pdf',
      size: '1.1 MB',
      uploadedBy: 'Health Department',
      timestamp: '2023-06-12T16:20:00',
      type: 'pdf',
      department: 'health'
    },
    {
      id: 5,
      name: 'Waste Collection Routes.jpg',
      size: '4.5 MB',
      uploadedBy: 'Sanitation Department',
      timestamp: '2023-05-28T10:10:00',
      type: 'image',
      department: 'sanitation'
    }
  ]);

  // Filter messages by department
  const filteredMessages = messages.filter(msg => msg.department === selectedDepartment);

  // Send a new message
  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      sender: 'You',
      role: 'citizen',
      department: selectedDepartment,
      content: message,
      timestamp: new Date().toISOString(),
      avatar: 'YO'
    };

    setMessages([...messages, newMessage]);
    setMessage('');
  };

  // Mark notification as read
  const markAsRead = (id) => {
    setNotifications(
      notifications.map(notification =>
        notification.id === id ? { ...notification, read: true } : notification
      )
    );
  };

  // Get file icon based on type
  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return (
          <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'excel':
        return (
          <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'word':
        return (
          <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'image':
        return (
          <svg className="w-8 h-8 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        );
      default:
        return (
          <svg className="w-8 h-8 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
    }
  };

  // Format date
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }) + ' at ' + 
           date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-500 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold sm:text-4xl">
              Communication Center
            </h1>
            <p className="mt-3 max-w-2xl mx-auto text-xl">
              Stay connected with city departments and receive important updates
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('chat')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'chat'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Department Chat
            </button>
            <button
              onClick={() => setActiveTab('notifications')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'notifications'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Notifications Center
            </button>
            <button
              onClick={() => setActiveTab('files')}
              className={`pb-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === 'files'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Shared Files
            </button>
          </nav>
        </div>

        {/* Chat Tab */}
        {activeTab === 'chat' && (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Department Chat</h2>
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="border border-gray-300 rounded-md shadow-sm py-2 px-3 bg-white focus:outline-none focus:ring-teal-500 focus:border-teal-500 text-sm"
                >
                  <option value="transport">Transport Department</option>
                  <option value="sanitation">Sanitation Department</option>
                  <option value="health">Health Department</option>
                  <option value="parks">Parks & Recreation</option>
                  <option value="utilities">Utilities Department</option>
                </select>
              </div>
            </div>

            {/* Messages */}
            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {filteredMessages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.role === 'official' ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex max-w-md ${msg.role === 'official' ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div
                      className={`h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-medium ${
                        msg.role === 'official' ? 'bg-blue-500' : 'bg-teal-500'
                      } ${msg.role === 'official' ? 'mr-2' : 'ml-2'}`}
                    >
                      {msg.avatar}
                    </div>
                    <div>
                      <div className="flex items-center mb-1">
                        <span className="text-sm font-medium text-gray-900">{msg.sender}</span>
                        <span className="ml-2 text-xs text-gray-500">{formatDate(msg.timestamp)}</span>
                      </div>
                      <div
                        className={`rounded-lg py-2 px-4 ${
                          msg.role === 'official'
                            ? 'bg-gray-100 text-gray-800'
                            : 'bg-teal-100 text-teal-800'
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t">
              <form onSubmit={handleSendMessage} className="flex">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 border border-gray-300 rounded-l-md py-2 px-4 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-teal-500 to-blue-600 text-white py-2 px-6 rounded-r-md hover:from-teal-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        )}

        {/* Notifications Tab */}
        {activeTab === 'notifications' && (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Notifications Center</h2>
                <button
                  onClick={() => setNotifications(notifications.map(n => ({ ...n, read: true })))}
                  className="text-sm text-teal-600 hover:text-teal-800"
                >
                  Mark all as read
                </button>
              </div>
            </div>

            {/* Notifications List */}
            <div className="divide-y divide-gray-200">
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 transition-colors duration-150 ${!notification.read ? 'bg-blue-50' : ''}`}
                >
                  <div className="flex justify-between">
                    <div className="flex items-start">
                      <div className={`mt-1 h-3 w-3 rounded-full ${!notification.read ? 'bg-blue-500' : 'bg-gray-300'}`}></div>
                      <div className="ml-3">
                        <h3 className="text-sm font-medium text-gray-900">{notification.title}</h3>
                        <p className="mt-1 text-sm text-gray-600">{notification.content}</p>
                        <p className="mt-1 text-xs text-gray-500">{formatDate(notification.timestamp)}</p>
                      </div>
                    </div>
                    {!notification.read && (
                      <button
                        onClick={() => markAsRead(notification.id)}
                        className="text-xs text-gray-500 hover:text-gray-700"
                      >
                        Mark as read
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {notifications.length === 0 && (
                <div className="p-8 text-center">
                  <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <h3 className="mt-2 text-sm font-medium text-gray-900">No notifications</h3>
                  <p className="mt-1 text-sm text-gray-500">You're all caught up! Check back later for new updates.</p>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Files Tab */}
        {activeTab === 'files' && (
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="p-4 bg-gray-50 border-b">
              <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold text-gray-800">Shared Files</h2>
                <button
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700"
                >
                  <svg className="mr-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                  Upload File
                </button>
              </div>
            </div>

            {/* Files List */}
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      File
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Size
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Uploaded By
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {sharedFiles.map((file) => (
                    <tr key={file.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0">{getFileIcon(file.type)}</div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{file.name}</div>
                            <div className="text-xs text-gray-500">{file.type.toUpperCase()}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {file.size}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {file.uploadedBy}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(file.timestamp).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <a href="#" className="text-teal-600 hover:text-teal-900 mr-4">
                          Download
                        </a>
                        <a href="#" className="text-gray-600 hover:text-gray-900">
                          Share
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Communication;
