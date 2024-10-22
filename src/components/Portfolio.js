// src/components/Portfolio.js
import React from 'react';

const Portfolio = () => {
  return (
    <section id="portfolio" className="bg-gray-50 p-6 rounded-lg shadow-lg my-6">
      <h2 className="text-3xl font-bold mb-4 text-center">Portfolio</h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Project 1: DataAtmos</h3>
          <p className="text-gray-600">
            Data-driven weather forecasting application, providing real-time analytics.
          </p>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">Project 2: Web Scraping Automation</h3>
          <p className="text-gray-600">
            Automating data extraction from various websites using Puppeteer.
          </p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
};

export default Portfolio;
