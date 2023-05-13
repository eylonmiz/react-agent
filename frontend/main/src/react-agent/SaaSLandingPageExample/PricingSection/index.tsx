import React from 'react';
import { Box, Button } from '@react-agent/shadcn-ui';
import PricingOverview from './PricingOverview';

export interface PricingSectionProps {
  pricingPlans: Array<{
    title: string;
    price: number;
    features: string[];
  }>;
}

const PricingSection = (props: PricingSectionProps) => {
  const { pricingPlans } = props;

  return (
    <Box className="flex flex-col items-center space-y-8 px-4 py-8 bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500">
      <h2 className="text-3xl font-semibold text-white mb-4">Choose Your Plan</h2>
      <PricingOverview pricingPlans={pricingPlans} />
      <Button className="w-32 h-8 bg-white text-black font-medium hover:bg-gray-300">Choose Plan</Button>
    </Box>
  );
};

export default PricingSection;
