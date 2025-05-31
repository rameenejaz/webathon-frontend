import React, { useState } from 'react';

const NotificationItem = ({ title, message, date, isRead, type, handleMarkAsRead, id }) => {
  const getTypeIcon = (type) => {
    switch (type) {
      case 'issue':
        return (
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        );
      case 'proposal':
        return (
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
        );
      case 'announcement':
        return (
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-yellow-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className={`p-4 border-b ${isRead ? 'bg-white' : 'bg-blue-50'}`}>
      <div className="flex items-start">
        {getTypeIcon(type)}
        <div className="ml-4 flex-1">
          <div className="flex justify-between items-start">
            <div>
              <h3 className={`text-sm font-medium ${isRead ? 'text-gray-800' : 'text-blue-800'}`}>{title}</h3>
              <p className="mt-1 text-sm text-gray-600">{message}</p>
            </div>
            <span className="text-xs text-gray-500">{date}</span>
          </div>
          {!isRead && (
            <button
              onClick={() => handleMarkAsRead(id)}
              className="mt-2 text-xs text-teal-600 hover:text-teal-800 font-medium"
            >
              Mark as read
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

function NotificationsCenter() {
  const [activeTab, setActiveTab] = useState('all');
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Issue Status Update",
      message: "Your reported issue 'Pothole on Main Street' has been marked as 'In Progress'.",
      date: "10 minutes ago",
      type: "issue",
      isRead: false
    },
    {
      id: 2,
      title: "New Proposal Available for Voting",
      message: "A new proposal 'Community Garden in Central Park' is now open for voting.",
      date: "2 hours ago",
      type: "proposal",
      isRead: false
    },
    {
      id: 3,
      title: "Issue Resolved",
      message: "Your reported issue 'Street Light Outage' has been resolved.",
      date: "1 day ago",
      type: "issue",
      isRead: true
    },
    {
      id: 4,
      title: "City Announcement",
      message: "Water service will be temporarily interrupted in the downtown area on July 25th from 10 PM to 2 AM for scheduled maintenance.",
      date: "2 days ago",
      type: "announcement",
      isRead: true
    },
    {
      id: 5,
      title: "Voting Results Available",
      message: "The results for 'Public Wi-Fi in Downtown Area' proposal are now available.",
      date: "3 days ago",
      type: "proposal",
      isRead: true
    }
  ]);

  const handleMarkAsRead = (id) => {
    setNotifications(
      notifications.map(notification => 
        notification.id === id ? { ...notification, isRead: true } : notification
      )
    );
  };

  const handleMarkAllAsRead = () => {
    setNotifications(
      notifications.map(notification => ({ ...notification, isRead: true }))
    );
  };

  const filteredNotifications = notifications.filter(notification => {
    if (activeTab === 'all') return true;
    if (activeTab === 'unread') return !notification.isRead;
    return notification.type === activeTab;
  });

  const unreadCount = notifications.filter(notification => !notification.isRead).length;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Notifications Center</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Stay updated on your issues, proposals, and city announcements
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Tabs */}
          <div className="flex flex-wrap border-b">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'all'
                  ? 'border-b-2 border-teal-500 text-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              All
              <span className="ml-2 bg-gray-100 text-gray-600 py-0.5 px-2 rounded-full text-xs">
                {notifications.length}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('unread')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'unread'
                  ? 'border-b-2 border-teal-500 text-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Unread
              <span className="ml-2 bg-blue-100 text-blue-600 py-0.5 px-2 rounded-full text-xs">
                {unreadCount}
              </span>
            </button>
            <button
              onClick={() => setActiveTab('issue')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'issue'
                  ? 'border-b-2 border-teal-500 text-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Issues
            </button>
            <button
              onClick={() => setActiveTab('proposal')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'proposal'
                  ? 'border-b-2 border-teal-500 text-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Proposals
            </button>
            <button
              onClick={() => setActiveTab('announcement')}
              className={`px-4 py-3 text-sm font-medium ${
                activeTab === 'announcement'
                  ? 'border-b-2 border-teal-500 text-teal-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Announcements
            </button>
          </div>

          {/* Notification List */}
          <div>
            {unreadCount > 0 && (
              <div className="p-4 bg-gray-50 flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  You have {unreadCount} unread notification{unreadCount !== 1 && 's'}
                </span>
                <button
                  onClick={handleMarkAllAsRead}
                  className="text-sm text-teal-600 hover:text-teal-800 font-medium"
                >
                  Mark all as read
                </button>
              </div>
            )}

            {filteredNotifications.length > 0 ? (
              filteredNotifications.map(notification => (
                <NotificationItem
                  key={notification.id}
                  {...notification}
                  handleMarkAsRead={handleMarkAsRead}
                />
              ))
            ) : (
              <div className="p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No notifications</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {activeTab === 'all' 
                    ? "You don't have any notifications at the moment."
                    : `You don't have any ${activeTab === 'unread' ? 'unread' : activeTab} notifications.`}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>
            Notification preferences can be adjusted in your{' '}
            <a href="/profile/settings" className="text-teal-600 hover:text-teal-800 font-medium">
              account settings
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default NotificationsCenter;
