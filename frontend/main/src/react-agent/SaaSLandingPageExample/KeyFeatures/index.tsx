import React from 'react';
import { Typography, Button } from '@react-agent/shadcn-ui';
import Feature from './Feature';

export interface KeyFeaturesProps {}

const KeyFeatures: React.FC<KeyFeaturesProps> = () => {
  const features = [
    {
      title: 'Streamline Sales Processes',
      description: 'Close deals faster with advanced sales tracking, pipeline management, and smart automation.',
    },
    {
      title: 'Supercharge Your Marketing',
      description:
        'Create, manage, and analyze targeted marketing campaigns with built-in email, social media, and content tools.',
    },
    {
      title: 'Deliver Exceptional Customer Support',
      description: 'Improve customer satisfaction with powerful ticketing, knowledge base, and live chat features.',
    },
    {
      title: 'Gain Actionable Insights',
      description:
        'Track performance metrics and make data-driven decisions with customizable reports and real-time analytics.',
    },
  ];

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 px-4 py-8">
      {features.map((feature, index) => (
        <Feature key={index} title={feature.title} description={feature.description} />
      ))}
    </div>
  );
};

export default KeyFeatures;
