"use client"
import React from 'react';
import { Sparkles, Palette, Wand2, Brain, Camera, Clock3, ChevronRight, Github } from 'lucide-react';

function FeatureCard({ Icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
      <Icon className="w-6 h-6 text-purple-600 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="absolute top-0 w-full z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Palette className="w-8 h-8 text-purple-600" />
              <span className="text-xl font-bold text-gray-800">InteriorAI</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#features" className="text-gray-600 hover:text-gray-900">Features</a>
              <a href="#showcase" className="text-gray-600 hover:text-gray-900">Showcase</a>
              <button className="bg-purple-600 text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors">
                Try Now
              </button>
            </div>
          </div>
        </nav>

        <div className="pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="lg:w-1/2">
                <div className="flex items-center space-x-2 mb-6">
                  <Sparkles className="w-5 h-5 text-purple-600" />
                  <span className="text-purple-600 font-medium">AI-Powered Design</span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                  Transform Your Space with AI Interior Design
                </h1>
                <p className="text-xl text-gray-600 mb-8">
                  Experience the future of interior design. Our AI-powered platform creates stunning, personalized spaces in seconds.
                </p>
                <div className="flex items-center space-x-4">
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-full hover:bg-purple-700 transition-colors flex items-center">
                    Get Started <ChevronRight className="w-5 h-5 ml-2" />
                  </button>
                  <button className="border-2 border-gray-200 px-8 py-3 rounded-full hover:border-purple-600 transition-colors">
                    View Demo
                  </button>
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
                    alt="AI Interior Design Preview"
                    className="rounded-xl shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                    <div className="flex items-center space-x-2">
                      <Wand2 className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">AI Generated</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section id="features" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              Icon={Brain}
              title="AI-Powered Suggestions"
              description="Get intelligent design recommendations based on your space and preferences"
            />
            <FeatureCard
              Icon={Camera}
              title="Instant Visualization"
              description="See real-time 3D renders of your space with different design options"
            />
            <FeatureCard
              Icon={Clock3}
              title="Quick Iterations"
              description="Generate multiple design variations in seconds, not hours"
            />
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section id="showcase" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Design Showcase</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=400&q=80",
              "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=400&q=80"
            ].map((src, index) => (
              <div key={index} className="relative group overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`Interior Design ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-medium">AI Generated Design</p>
                    <p className="text-sm">View Details</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Palette className="w-8 h-8 text-purple-400" />
              <span className="text-xl font-bold">InteriorAI</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#" className="hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-400 transition-colors flex items-center">
                <Github className="w-5 h-5 mr-1" />
                GitHub
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            © {new Date().getFullYear()} InteriorAI. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Page;