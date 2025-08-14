'use client';

import { useState, useEffect } from 'react';
import { Play, Code, Copy, Check, Zap, Activity } from 'lucide-react';

const ApiPlayground = () => {
  const [selectedEndpoint, setSelectedEndpoint] = useState(0);
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [showResponseAnimation, setShowResponseAnimation] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{left: string, top: string, delay: string, duration: string}>>([]);

  const endpoints = [
    {
      method: 'GET',
      endpoint: '/api/user',
      description: 'Get all users with pagination',
      example: `{
  "user": [
    {
      "id": 1,
      "name": "Shivam Bhardwaj",
      "email": "shivambhardwaj719@gmail.com",
      "designation": "Associate Python Developer"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100
  }
}`,
      color: 'text-green-500 bg-green-500/20'
    },
    {
      method: 'POST',
      endpoint: '/api/users',
      description: 'Create a new user',
      example: `{
  "message": "User created successfully",
  "user": {
      "id": 1,
      "name": "Shivam Bhardwaj",
      "email": "shivambhardwaj719@gmail.com",
      "password": "12345678"
      "contact": "8888899999"
      "designation": "Associate Python Developer"
    }
}`,
      color: 'text-blue-500 bg-blue-500/20'
    },
    {
      method: 'GET',
      endpoint: '/api/profile',
      description: 'Get system statistics',
      example: `{
  "Profile": {
      "id": 1,
      "name": "Shivam Bhardwaj",
      "email": "shivambhardwaj719@gmail.com",
      "designation": "Associate Python Developer"
    },
  "performance": {
    "avg_response_time": "45ms",
    "requests_per_second": 1250
  }
}`,
      color: 'text-purple-500 bg-purple-500/20'
    }
  ];

  // Initialize particles only on client side
  useEffect(() => {
    setMounted(true);
    const particleData = [...Array(6)].map((_, i) => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${i * 0.5}s`,
      duration: `${3 + Math.random() * 2}s`
    }));
    setParticles(particleData);
  }, []);

  // Typewriter effect for response
  useEffect(() => {
    if (showResponseAnimation && response) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < response.length) {
          setTypingText(response.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 15);

      return () => clearInterval(interval);
    }
  }, [showResponseAnimation, response]);

  const handleTestEndpoint = async () => {
    setLoading(true);
    setResponse('');
    setTypingText('');
    setShowResponseAnimation(false);
    
    setTimeout(() => {
      setResponse(endpoints[selectedEndpoint].example);
      setLoading(false);
      setShowResponseAnimation(true);
    }, 1500);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="api-playground" className="py-20 px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/10 to-transparent rounded-full animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-secondary/10 to-transparent rounded-full animate-pulse delay-1000"></div>
        
        {/* Floating particles - only render after mounting */}
        {mounted && particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration
            }}
          ></div>
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16 relative">
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 relative z-10">
              Interactive API Playground
            </h2>
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 blur-3xl animate-pulse"></div>
          </div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Test live API endpoints and see real responses. Experience the quality and structure of my backend development work.
          </p>
          
          {/* Status indicator */}
          <div className="inline-flex items-center space-x-2 mt-6 px-4 py-2 bg-green-500/10 rounded-full border border-green-500/20">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-green-400 font-medium">API Status: Online</span>
            <Activity className="w-4 h-4 text-green-400" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* API Endpoints */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Code className="text-primary animate-pulse" size={20} />
              </div>
              <h3 className="text-xl font-semibold">Available Endpoints</h3>
              <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
            </div>
            
            {endpoints.map((endpoint, index) => (
              <div
                key={index}
                className={`glass-card p-4 rounded-lg cursor-pointer transition-all duration-500 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/10 ${
                  selectedEndpoint === index 
                    ? 'ring-2 ring-primary shadow-lg shadow-primary/20 bg-primary/5 animate-glow' 
                    : 'hover:bg-white/5'
                }`}
                onClick={() => setSelectedEndpoint(index)}
                style={{
                  animationDelay: `${index * 100}ms`
                }}
              >
                <div className="flex items-center space-x-3 mb-2">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold transition-all duration-300 ${endpoint.color} ${
                    selectedEndpoint === index ? 'animate-bounce' : ''
                  }`}>
                    {endpoint.method}
                  </div>
                  <code className="text-sm font-mono text-primary font-semibold tracking-wide">
                    {endpoint.endpoint}
                  </code>
                  {selectedEndpoint === index && (
                    <div className="ml-auto">
                      <Zap className="w-4 h-4 text-primary animate-pulse" />
                    </div>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{endpoint.description}</p>
                
                {/* Selection indicator */}
                <div className={`h-1 bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-300 mt-3 ${
                  selectedEndpoint === index ? 'opacity-100 scale-100' : 'opacity-0 scale-x-0'
                }`}></div>
              </div>
            ))}

            <button
              onClick={handleTestEndpoint}
              disabled={loading}
              className={`w-full bg-primary text-primary-foreground px-6 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg hover:shadow-primary/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group ${
                loading ? 'animate-pulse' : 'hover:bg-primary/90'
              }`}
            >
              <Play size={18} className={`transition-transform duration-300 ${loading ? 'animate-spin' : 'group-hover:scale-110'}`} />
              <span className="relative">
                {loading ? 'Testing...' : 'Test Endpoint'}
                {!loading && (
                  <div className="absolute inset-0 bg-white/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                )}
              </span>
            </button>
          </div>

          {/* Response Area */}
          <div className="space-y-4">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-2">
                <div className="p-2 bg-secondary/10 rounded-lg">
                  <Code className="text-secondary animate-pulse" size={20} />
                </div>
                <h3 className="text-xl font-semibold">Response</h3>
              </div>
              {response && (
                <button
                  onClick={copyToClipboard}
                  className={`flex items-center space-x-2 text-sm px-3 py-2 rounded-lg transition-all duration-300 transform hover:scale-105 ${
                    copied 
                      ? 'text-green-400 bg-green-400/10 animate-bounce' 
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/10'
                  }`}
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>
              )}
            </div>

            <div className="glass-card p-6 rounded-lg min-h-[400px] relative overflow-hidden">
              {/* Animated border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 animate-pulse opacity-30 rounded-lg"></div>
              
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full space-y-4">
                  <div className="relative">
                    <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent"></div>
                    <div className="animate-ping absolute inset-0 rounded-full h-12 w-12 border border-primary opacity-20"></div>
                  </div>
                  <div className="text-primary font-medium animate-pulse">Processing request...</div>
                  <div className="flex space-x-1">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="w-2 h-2 bg-primary rounded-full animate-bounce"
                        style={{ animationDelay: `${i * 0.15}s` }}
                      ></div>
                    ))}
                  </div>
                </div>
              ) : response ? (
                <div className="relative">
                  <pre className="text-sm font-mono text-green-400 whitespace-pre-wrap overflow-auto leading-relaxed">
                    {showResponseAnimation ? typingText : response}
                  </pre>
                  {showResponseAnimation && typingText.length < response.length && (
                    <div className="inline-block w-1 h-4 bg-green-400 animate-blink ml-1"></div>
                  )}
                </div>
              ) : (
                <div className="flex items-center justify-center h-full text-muted-foreground">
                  <div className="text-center space-y-4 animate-fade-in">
                    <div className="relative">
                      <Code className="mx-auto opacity-30 animate-float" size={64} />
                      <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl animate-pulse"></div>
                    </div>
                    <p className="text-lg font-medium">Ready to test APIs</p>
                    <p className="text-sm opacity-70">Select an endpoint and click "Test" to see the magic happen</p>
                  </div>
                </div>
              )}
            </div>

            <div className="text-xs text-muted-foreground bg-secondary/10 p-4 rounded-lg border border-secondary/20 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/50 to-transparent"></div>
              <strong className="text-secondary">Note:</strong> This is a demo playground. Real endpoints would connect to live backend services 
              with proper authentication, rate limiting, and error handling.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 20px rgba(var(--primary), 0.3); }
          50% { box-shadow: 0 0 30px rgba(var(--primary), 0.5); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
        
        .animate-slide-up {
          animation: slide-up 0.8s ease-out;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, hsl(var(--primary)), hsl(var(--secondary)));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>
    </section>
  );
};

export default ApiPlayground;