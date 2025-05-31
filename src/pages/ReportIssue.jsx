import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    title: '',
    department: 'transport',
    issueType: 'pothole',
    location: '',
    description: '',
    priority: 'medium',
    image: null,
    imagePreview: null
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData({
        ...formData,
        image: file,
        imagePreview: URL.createObjectURL(file)
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const resetForm = () => {
    setFormData({
      title: '',
      department: 'transport',
      issueType: 'pothole',
      location: '',
      description: '',
      priority: 'medium',
      image: null,
      imagePreview: null
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <div className="px-6 py-8">
              <div className="flex flex-col items-center text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                  <svg className="h-10 w-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">Issue Reported Successfully!</h2>
                <p className="text-gray-600 mb-6">
                  Thank you for reporting this issue. Your report has been submitted and will be reviewed by the relevant department.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={resetForm}
                    className="px-6 py-3 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                  >
                    Report Another Issue
                  </button>
                  <Link
                    to="/issues/reported"
                    className="px-6 py-3 bg-gray-200 text-gray-800 font-medium rounded-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
                  >
                    View My Reports
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Report an Issue
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Help us improve your city by reporting issues you encounter
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Issue Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Issue Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Brief title describing the issue"
                />
              </div>

              {/* Department Selection */}
              <div>
                <label htmlFor="department" className="block text-sm font-medium text-gray-700">
                  Department
                </label>
                <select
                  id="department"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="transport">Transport Department</option>
                  <option value="sanitation">Sanitation Department</option>
                  <option value="health">Health Department</option>
                  <option value="utilities">Utilities Department</option>
                  <option value="parks">Parks & Recreation</option>
                </select>
              </div>

              {/* Issue Type */}
              <div>
                <label htmlFor="issueType" className="block text-sm font-medium text-gray-700">
                  Issue Type
                </label>
                <select
                  id="issueType"
                  name="issueType"
                  value={formData.issueType}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                >
                  {formData.department === 'transport' && (
                    <>
                      <option value="pothole">Pothole</option>
                      <option value="traffic_light">Traffic Light Malfunction</option>
                      <option value="road_damage">Road Damage</option>
                      <option value="parking">Parking Issue</option>
                      <option value="public_transport">Public Transport Issue</option>
                    </>
                  )}
                  {formData.department === 'sanitation' && (
                    <>
                      <option value="waste_collection">Waste Collection</option>
                      <option value="illegal_dumping">Illegal Dumping</option>
                      <option value="drainage">Drainage Problem</option>
                      <option value="public_toilet">Public Toilet Issue</option>
                    </>
                  )}
                  {formData.department === 'health' && (
                    <>
                      <option value="pest_control">Pest Control</option>
                      <option value="water_quality">Water Quality</option>
                      <option value="food_safety">Food Safety Concern</option>
                      <option value="public_health">Public Health Hazard</option>
                    </>
                  )}
                  {formData.department === 'utilities' && (
                    <>
                      <option value="street_light">Street Light Issue</option>
                      <option value="power_outage">Power Outage</option>
                      <option value="water_leak">Water Leak</option>
                      <option value="gas_leak">Gas Leak</option>
                    </>
                  )}
                  {formData.department === 'parks' && (
                    <>
                      <option value="playground">Playground Equipment</option>
                      <option value="vandalism">Vandalism</option>
                      <option value="fallen_tree">Fallen Tree</option>
                      <option value="maintenance">Park Maintenance</option>
                    </>
                  )}
                </select>
              </div>

              {/* Location */}
              <div>
                <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                  Location
                </label>
                <input
                  type="text"
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Address or location description"
                />
                <p className="mt-1 text-sm text-gray-500">
                  You can also use the map to pinpoint the exact location
                </p>
              </div>

              {/* Map Placeholder */}
              <div className="border border-gray-300 rounded-md h-64 bg-gray-100 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <svg className="mx-auto h-12 w-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <p className="mt-2">Map will be integrated here</p>
                  <p className="text-sm">Click on the map to set the location</p>
                </div>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  required
                  className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500"
                  placeholder="Please provide details about the issue..."
                ></textarea>
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Priority Level</label>
                <div className="mt-2 flex items-center space-x-4">
                  {['low', 'medium', 'high'].map((priority) => (
                    <label key={priority} className="inline-flex items-center">
                      <input
                        type="radio"
                        name="priority"
                        value={priority}
                        checked={formData.priority === priority}
                        onChange={handleChange}
                        className="focus:ring-teal-500 h-4 w-4 text-teal-600 border-gray-300"
                      />
                      <span className="ml-2 capitalize">{priority}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Upload Image (Optional)</label>
                <div className="mt-1 flex items-center">
                  <div className="flex-1">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="sr-only"
                      id="image-upload"
                    />
                    <label
                      htmlFor="image-upload"
                      className="relative cursor-pointer bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                    >
                      <span>Upload a file</span>
                    </label>
                  </div>
                  {formData.imagePreview && (
                    <div className="ml-4 h-20 w-20 overflow-hidden rounded-md border border-gray-300">
                      <img
                        src={formData.imagePreview}
                        alt="Preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-blue-600 hover:from-teal-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Submitting...
                    </>
                  ) : (
                    'Submit Report'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="mt-8 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="px-6 py-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Tips for Effective Reporting</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Be specific about the location and nature of the issue
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Include photos whenever possible to help us understand the problem
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Provide contact information so we can follow up if needed
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-teal-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                Check the status of your reports in the "My Reports" section
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportIssue;
