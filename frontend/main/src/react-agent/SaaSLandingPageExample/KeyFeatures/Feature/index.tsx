import React from 'react';
import { Typography, Button } from '@react-agent/shadcn-ui';

export interface FeatureProps {
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Typography variant="h3" className="text-xl font-semibold">
        {title}
      </Typography>
      <Typography variant="body" className="text-base">
        {description}
      </Typography>
    </div>
  );
};

export default Feature;
