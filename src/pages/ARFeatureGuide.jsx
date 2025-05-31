import React from 'react';
import { Link } from 'react-router-dom';

function ARFeatureGuide() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-teal-600 to-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">AR Feature Guide</h1>
          <p className="text-lg text-blue-100 max-w-3xl">
            Discover how augmented reality enhances urban issue reporting and visualization
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Introduction */}
        <div className="bg-white rounded-xl shadow-md p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">What is AR Technology?</h2>
          <p className="text-lg text-gray-600 mb-6">
            Augmented Reality (AR) overlays digital information onto the real world through your smartphone camera. Our platform leverages this technology to create a more intuitive and effective way for citizens and officials to interact with urban spaces.
          </p>
          <p className="text-lg text-gray-600">
            By combining AR with our collaborative platform, we enable more accurate issue reporting, better spatial understanding of urban projects, and enhanced visualization of proposed changes to the city landscape.
          </p>
        </div>

        {/* AR Features */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Key AR Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <svg className="h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AR Issue Reporting</h3>
                <p className="text-gray-600 mb-4">
                  Point your camera at urban issues to automatically capture location data, measure dimensions, and add digital markers that help officials understand the problem's context and severity.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Precise geolocation tagging</li>
                  <li>AR measurement tools</li>
                  <li>Visual annotation capabilities</li>
                  <li>3D issue categorization</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <svg className="h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Project Visualization</h3>
                <p className="text-gray-600 mb-4">
                  Visualize proposed urban projects in their actual intended location, allowing citizens to see how new developments will look and impact their surroundings before construction begins.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>3D model overlays on real environments</li>
                  <li>Before/after visualization</li>
                  <li>Interactive project exploration</li>
                  <li>Contextual information display</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <svg className="h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AR Navigation & Discovery</h3>
                <p className="text-gray-600 mb-4">
                  Navigate through the city with AR overlays showing reported issues, ongoing projects, and city services in your vicinity, creating a more informed urban experience.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Real-time issue mapping</li>
                  <li>Proximity alerts for nearby services</li>
                  <li>Directional guidance to reported issues</li>
                  <li>Historical context for locations</li>
                </ul>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-gray-200 flex items-center justify-center">
                <svg className="h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Collaborative AR Sessions</h3>
                <p className="text-gray-600 mb-4">
                  Officials and citizens can join shared AR sessions to discuss urban issues on-site, even when physically distant, enabling better understanding and faster resolution.
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  <li>Multi-user AR environments</li>
                  <li>Real-time annotation sharing</li>
                  <li>Virtual site inspections</li>
                  <li>Remote expert assistance</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">How to Use AR Features</h2>
          </div>
          <div className="p-6">
            <ol className="list-decimal list-inside space-y-6">
              <li className="text-gray-800">
                <span className="font-medium">Download the latest app version</span>
                <p className="mt-2 text-gray-600 ml-6">
                  Ensure you have the most recent version of our mobile app, which includes all AR capabilities. Available for both iOS and Android devices.
                </p>
              </li>
              <li className="text-gray-800">
                <span className="font-medium">Enable camera permissions</span>
                <p className="mt-2 text-gray-600 ml-6">
                  When prompted, allow the app to access your camera and location services for full AR functionality.
                </p>
              </li>
              <li className="text-gray-800">
                <span className="font-medium">Access AR features from the main menu</span>
                <p className="mt-2 text-gray-600 ml-6">
                  Tap the AR icon in the app navigation to access all augmented reality features, including issue reporting and project visualization.
                </p>
              </li>
              <li className="text-gray-800">
                <span className="font-medium">Point your camera at your surroundings</span>
                <p className="mt-2 text-gray-600 ml-6">
                  The app will scan the environment and display relevant information overlaid on your camera view.
                </p>
              </li>
              <li className="text-gray-800">
                <span className="font-medium">Interact with AR elements</span>
                <p className="mt-2 text-gray-600 ml-6">
                  Tap on AR markers to view more details, add annotations, or take measurements of urban issues.
                </p>
              </li>
            </ol>
          </div>
        </div>

        {/* User Roles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">AR Features by User Role</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Citizens</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AR-assisted issue reporting
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Visualize proposed projects
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Discover nearby issues and services
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Participate in AR community meetings
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-teal-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Department Officials</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Remote AR issue inspection
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  AR-based work order management
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Collaborative field assessments
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Project implementation visualization
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">City Administrators</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  City-wide AR data visualization
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Urban planning in AR
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Resource allocation modeling
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-purple-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Multi-department AR coordination
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Technical Requirements */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Technical Requirements</h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Supported Devices</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    iPhone 8 or newer (iOS 14+)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Android devices with ARCore support (Android 8.0+)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    iPad Pro, Air (2019 or newer)
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    AR glasses (optional, enhanced experience)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">System Requirements</h3>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Camera access enabled
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Location services enabled
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Minimum 4GB RAM recommended
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Stable internet connection
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
          <div className="p-6 bg-gray-50 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Frequently Asked Questions</h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How accurate is the AR positioning?</h3>
              <p className="text-gray-600">
                Our AR technology combines GPS, visual positioning, and device sensors to achieve accuracy within 1-2 meters in most outdoor environments. In areas with clear visual landmarks, accuracy can improve to within centimeters.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Does AR reporting work indoors?</h3>
              <p className="text-gray-600">
                Yes, AR reporting works indoors, though with potentially reduced location accuracy. The system will rely more on visual cues and manual positioning in indoor environments where GPS signals may be limited.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How much data does using AR features consume?</h3>
              <p className="text-gray-600">
                AR features typically use 5-15MB of data per session, depending on the complexity of the environment and duration of use. We recommend using WiFi for initial downloads of AR assets to minimize mobile data usage.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I use AR features offline?</h3>
              <p className="text-gray-600">
                Basic AR visualization works offline for previously loaded areas, but reporting new issues and accessing real-time data requires an internet connection. Offline reports are queued and submitted once connectivity is restored.
              </p>
            </div>
          </div>
        </div>

        {/* Get Started */}
        <div className="bg-gradient-to-r from-teal-600 to-blue-700 rounded-xl shadow-md overflow-hidden text-white">
          <div className="p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Experience AR Features?</h2>
            <p className="text-lg text-blue-100 mb-6 max-w-3xl mx-auto">
              Download our mobile app today and start exploring the enhanced capabilities of our Smart City platform with augmented reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-6 py-3 bg-white text-teal-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300">
                Download for iOS
              </button>
              <button className="px-6 py-3 bg-white text-teal-600 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ARFeatureGuide;
