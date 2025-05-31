import React, { useState } from 'react';

function SharedFiles() {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Sample files data
  const files = [
    {
      id: 'file-001',
      name: 'Traffic Impact Analysis.pdf',
      type: 'pdf',
      size: '2.4 MB',
      department: 'Transport',
      uploadedBy: 'John Smith',
      uploadDate: '2023-07-15',
      category: 'report'
    },
    {
      id: 'file-002',
      name: 'Community Garden Design.jpg',
      type: 'image',
      size: '1.8 MB',
      department: 'Parks & Recreation',
      uploadedBy: 'Emma Johnson',
      uploadDate: '2023-07-12',
      category: 'design'
    },
    {
      id: 'file-003',
      name: 'Budget Proposal 2023.xlsx',
      type: 'spreadsheet',
      size: '950 KB',
      department: 'Finance',
      uploadedBy: 'Michael Chen',
      uploadDate: '2023-07-10',
      category: 'document'
    },
    {
      id: 'file-004',
      name: 'City Council Meeting Minutes.docx',
      type: 'document',
      size: '1.2 MB',
      department: 'Administration',
      uploadedBy: 'Sarah Williams',
      uploadDate: '2023-07-08',
      category: 'document'
    },
    {
      id: 'file-005',
      name: 'Public Health Initiative.pptx',
      type: 'presentation',
      size: '3.5 MB',
      department: 'Health',
      uploadedBy: 'David Rodriguez',
      uploadDate: '2023-07-05',
      category: 'presentation'
    },
    {
      id: 'file-006',
      name: 'Smart Street Lighting Map.png',
      type: 'image',
      size: '2.1 MB',
      department: 'Utilities',
      uploadedBy: 'Lisa Thompson',
      uploadDate: '2023-07-03',
      category: 'design'
    }
  ];

  // Filter files based on active tab and search query
  const filteredFiles = files.filter(file => {
    // Filter by category
    if (activeTab !== 'all' && file.category !== activeTab) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery && !file.name.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  const getFileIcon = (type) => {
    switch (type) {
      case 'pdf':
        return (
          <div className="flex-shrink-0 h-10 w-10 rounded bg-red-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        );
      case 'image':
        return (
          <div className="flex-shrink-0 h-10 w-10 rounded bg-blue-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        );
      case 'spreadsheet':
        return (
          <div className="flex-shrink-0 h-10 w-10 rounded bg-green-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
        );
      case 'presentation':
        return (
          <div className="flex-shrink-0 h-10 w-10 rounded bg-yellow-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
            </svg>
          </div>
        );
      default:
        return (
          <div className="flex-shrink-0 h-10 w-10 rounded bg-gray-100 flex items-center justify-center">
            <svg className="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Shared Files</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Access and download important documents, designs, and presentations shared by city departments
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
                placeholder="Search files..."
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
              All Files
            </button>
            <button
              onClick={() => setActiveTab('document')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'document'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Documents
            </button>
            <button
              onClick={() => setActiveTab('report')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'report'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Reports
            </button>
            <button
              onClick={() => setActiveTab('design')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'design'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Designs
            </button>
            <button
              onClick={() => setActiveTab('presentation')}
              className={`px-4 py-2 rounded-lg font-medium ${
                activeTab === 'presentation'
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              }`}
            >
              Presentations
            </button>
          </div>
        </div>

        {/* Files List */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800">
              {activeTab === 'all' ? 'All Files' : `${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}s`}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              {filteredFiles.length} file{filteredFiles.length !== 1 && 's'} available
            </p>
          </div>
          
          <ul className="divide-y divide-gray-200">
            {filteredFiles.length > 0 ? (
              filteredFiles.map((file) => (
                <li key={file.id} className="p-4 hover:bg-gray-50">
                  <div className="flex items-center space-x-4">
                    {getFileIcon(file.type)}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                      <div className="flex items-center text-xs text-gray-500">
                        <span>{file.department} Department</span>
                        <span className="mx-1">•</span>
                        <span>Uploaded on {file.uploadDate}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">{file.size}</span>
                      <a
                        href="#"
                        className="inline-flex items-center px-2.5 py-1.5 border border-transparent text-xs font-medium rounded text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <li className="p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No files found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  {searchQuery 
                    ? "Try adjusting your search or filter criteria" 
                    : `No ${activeTab === 'all' ? '' : activeTab} files are available at the moment.`}
                </p>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default SharedFiles;
