import React from 'react';
import { Code, Brain, Database, Play, Settings, Users } from 'lucide-react';
import ThemeToggle from '../components/ThemeToggle';

const actionTiles = [
  { title: 'Code Generation', icon: Code, description: 'Generate AI-powered code snippets' },
  { title: 'Model Training', icon: Brain, description: 'Train and fine-tune AI models' },
  { title: 'Data Management', icon: Database, description: 'Manage and preprocess datasets' },
  { title: 'Deployment', icon: Play, description: 'Deploy AI models to production' },
  { title: 'API Integration', icon: Settings, description: 'Integrate AI services via APIs' },
  { title: 'Collaboration', icon: Users, description: 'Collaborate with team members' },
];

const ActionTile = ({ title, icon: Icon, description }) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center">
    <Icon className="w-12 h-12 text-blue-500 dark:text-blue-400 mb-4" />
    <h2 className="text-xl font-semibold mb-2 dark:text-white">{title}</h2>
    <p className="text-gray-600 dark:text-gray-300">{description}</p>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <ThemeToggle />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 dark:text-blue-400 mb-12">Welcome, AI Developers!</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {actionTiles.map((tile, index) => (
            <ActionTile key={index} {...tile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;