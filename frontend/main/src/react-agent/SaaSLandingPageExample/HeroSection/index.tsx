import React from 'react';
import { Typography, Button } from '@react-agent/shadcn-ui';

export interface HeroSectionProps {}

const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-8">
      <Typography variant="h1" className="text-4xl font-semibold mb-4">
        Simplify Your Customer Relationships with Our All-in-One CRM Solution
      </Typography>
      <Typography variant="h3" className="text-2xl mb-4">
        Empower your sales, marketing, and support teams with a single platform that drives growth and boosts customer
        satisfaction.
      </Typography>
      <Button className="w-48 h-12">Get Started with a Free Trial</Button>
    </div>
  );
};

export default HeroSection;
