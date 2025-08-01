import React, { useState, useEffect } from 'react';
import { FormRenderer } from '../FormRenderer';
import Hero from '../../imports/Hero';
import FeatureSection from '../../imports/FeatureSection';

interface HomePageProps {
  onGetStarted?: () => void;
}

export function HomePage({ onGetStarted }: HomePageProps) {

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero onGetStarted={onGetStarted} />

      {/* Features Section */}
      <FeatureSection />

      {/* Platform Showcase Section */}
      <section className="py-20">
        <div className="container-1200">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Put your creative vision into automated
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Traditional Way */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Traditional form building</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Time-consuming manual coding, limited customization options, and complex deployment processes.
                </p>
              </div>
              
              <div className="bg-gray-50 rounded-xl p-8 border">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Manual HTML/CSS coding</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Limited styling options</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Time-intensive process</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-gray-700">Complex deployment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Zyloform Way */}
            <div>
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Zyloform approach</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Visual form builder with advanced customization, professional templates, and instant deployment.
                </p>
              </div>
              
              <div className="bg-blue-50 rounded-xl p-8 border-2 border-blue-200">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Visual drag-and-drop builder</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Advanced color customization</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">Instant live preview</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-gray-700">One-click deployment</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The platform for AI automation Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-1200">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              The platform for AI automation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Intelligently designed for professional workflows
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Zyloform combines the power of AI with professional design principles to create forms that not only look great but perform exceptionally well in business environments.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Smart Template Selection</h4>
                    <p className="text-gray-600">AI-powered recommendations based on your industry and use case</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Automated Color Harmonies</h4>
                    <p className="text-gray-600">Professional color schemes generated to match your brand</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Intelligent Layout Optimization</h4>
                    <p className="text-gray-600">Responsive layouts that adapt to any device or screen size</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg border">
                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-green-600">AI Enhanced</span>
                  </div>
                  <h4 className="font-semibold text-gray-900">Real-time Form Optimization</h4>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Conversion Rate</span>
                      <span className="text-sm font-bold text-blue-600">+23%</span>
                    </div>
                    <div className="w-full bg-blue-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">User Engagement</span>
                      <span className="text-sm font-bold text-green-600">+41%</span>
                    </div>
                    <div className="w-full bg-green-200 rounded-full h-2">
                      <div className="bg-green-600 h-2 rounded-full w-4/5"></div>
                    </div>
                  </div>
                  
                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700">Load Speed</span>
                      <span className="text-sm font-bold text-purple-600">+67%</span>
                    </div>
                    <div className="w-full bg-purple-200 rounded-full h-2">
                      <div className="bg-purple-600 h-2 rounded-full w-5/6"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Features Section */}
      <section className="py-20">
        <div className="container-1200">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Zyloform for your team
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Collaborate seamlessly with your team to create, review, and deploy professional forms across your organization.
              </p>
              
              <button
                onClick={onGetStarted}
                className="bg-black text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                Get Started
              </button>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                    <span className="text-sm">Team Collaboration</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Real-time Collaboration</h4>
                <p className="text-gray-600 text-sm">Work together on forms with live editing and instant feedback</p>
              </div>
            </div>

            <div>
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                    <span className="text-sm">Analytics Dashboard</span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Advanced Analytics</h4>
                <p className="text-gray-600 text-sm">Track form performance with detailed insights and metrics</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container-1200">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to create professional forms?
            </h2>
            <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
              Join thousands of professionals using Zyloform to streamline their form creation process
            </p>
            
            <button
              onClick={onGetStarted}
              className="bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-200"
            >
              Start Building Forms
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-16">
        <div className="container-1200">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-lg"></div>
                <span className="text-xl font-bold text-gray-900">Zyloform</span>
              </div>
              <p className="text-gray-600 mb-6 max-w-md">
                Professional form builder with advanced customization capabilities. Create beautiful, functional forms in minutes.
              </p>
              <div className="text-sm text-gray-500">
                Desktop Edition v4.0 • Built for professionals
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Product</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Templates</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Color Picker</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Export Options</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Documentation</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">Support</h3>
              <ul className="space-y-3 text-gray-600">
                <li><a href="#" className="hover:text-gray-900 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Contact Us</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Feedback</a></li>
                <li><a href="#" className="hover:text-gray-900 transition-colors">Changelog</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">&copy; 2024 Zyloform. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-gray-900 text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}