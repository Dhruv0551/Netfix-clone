import React, { useState } from 'react';
import img from './../assets/netflix-logo-png-2562.png'
import './poppins.css'
import Footer from './Footer';

const NetflixHelpCenter = () => {
  const [searchQuery, setSearchQuery] = useState('');
  
  const popularTopics = [
    { title: "Can't sign in to Netflix", icon: "🔒" },
    { title: "How to reset your password", icon: "🔑" },
    { title: "Netflix says to fix payment method", icon: "💳" },
    { title: "Billing and Payments", icon: "💰" },
    { title: "How to create, change, or delete profiles", icon: "👤" },
    { title: "What devices can I use to stream Netflix?", icon: "📱" }
  ];
  
  const quickLinks = [
    { title: "Request TV shows or movies", icon: "📺" },
    { title: "Update email", icon: "✉️" },
    { title: "Update payment method", icon: "💳" },
    { title: "Cancel account", icon: "⛔" },
    { title: "Review recent access", icon: "🔍" },
    { title: "Fix connection issues", icon: "🔌" }
  ];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header */}
      <div className='flex bg-black  h-16.5 w-[100%]'>
        <img src={img} alt="?" width={'95px'} className='h-7 mt-5 ml-40 cursor-pointer'/>
          <p className='h-7 mt-4 text-white text-xl ml-3 flex'>
            | 
              <a href='#' className='ml-4 cursor-pointer relative group'> 
                Help Center
                  <span className='absolute bottom-0 left-0 h-[2px] w-0 bg-white group-hover:w-full transition-all '></span>
              </a>
          </p>       
          <button className='cursor-pointer rounded-sm font-semibold ml-200 mt-4 h-8 w-30 border-2 border-solid border-[#373636] text-white transition-all duration-300 hover:border-white'>
            Join Netflix
          </button>
          <button className=' cursor-pointer text-sm text-white font-semibold bg-red-600 h-8 w-20 rounded-sm ml-3 mt-4 hover:bg-red-700'>Sign In</button>
      </div>

      <main className="container mx-auto px-4 py-8">
        
        <section className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-6">Help Center</h1>
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="What do you need help with?"
              className="w-full p-4 rounded-full border border-gray-300 shadow-sm focus:ring-2 focus:ring-red-500 focus:border-red-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-4 top-4 text-gray-500">
              <span role="img" aria-label="search">🔍</span>
            </button>
          </div>
        </section>


        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Popular Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTopics.map((topic, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{topic.icon}</span>
                  <span className="font-medium">{topic.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>


        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((link, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{link.icon}</span>
                  <span className="font-medium">{link.title}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Browse Help by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="text-3xl mb-3">🔐</div>
              <h3 className="font-bold text-lg mb-2">Account & Billing</h3>
              <p className="text-gray-600">Manage your account details and billing information</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="text-3xl mb-3">📱</div>
              <h3 className="font-bold text-lg mb-2">Watching Netflix</h3>
              <p className="text-gray-600">Learn about features and how to watch</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="text-3xl mb-3">⚙️</div>
              <h3 className="font-bold text-lg mb-2">Settings & Preferences</h3>
              <p className="text-gray-600">Manage app settings and preferences</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer text-center">
              <div className="text-3xl mb-3">🛠️</div>
              <h3 className="font-bold text-lg mb-2">Troubleshooting</h3>
              <p className="text-gray-600">Fix issues and get back to streaming</p>
            </div>
          </div>
        </section>

        
        <div className="bg-white p-6 rounded-lg shadow-md mb-12">
          <h2 className="text-2xl font-bold mb-6">Need more help?</h2>
          <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1 p-4 border border-gray-200 rounded-lg hover:border-red-500 cursor-pointer">
              <h3 className="font-bold text-lg mb-2">Contact Us</h3>
              <p className="text-gray-600">Get in touch with our customer service team</p>
            </div>
            <div className="flex-1 p-4 border border-gray-200 rounded-lg hover:border-red-500 cursor-pointer">
              <h3 className="font-bold text-lg mb-2">Join the Community</h3>
              <p className="text-gray-600">Connect with other Netflix users</p>
            </div>
            <div className="flex-1 p-4 border border-gray-200 rounded-lg hover:border-red-500 cursor-pointer">
              <h3 className="font-bold text-lg mb-2">Provide Feedback</h3>
              <p className="text-gray-600">Help us improve your Netflix experience</p>
            </div>
          </div>
        </div>
      </main>

            <Footer/>
    </div>
  );
};

export default NetflixHelpCenter;