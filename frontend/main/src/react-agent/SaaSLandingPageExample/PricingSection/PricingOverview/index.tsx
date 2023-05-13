import React from 'react';
import { Box, Typography } from '@react-agent/shadcn-ui';

export interface PricingOverviewProps {
  pricingPlans: Array<{
    title: string;
    price: number;
    features: string[];
  }>;
}

const PricingOverview = (props: PricingOverviewProps) => {
  const { pricingPlans } = props;

  return (
    <Box className="flex flex-wrap justify-center space-x-4 space-y-8">
      {pricingPlans.map((plan, index) => (
        <Box key={index} className="flex flex-col items-center p-6 bg-white shadow-md rounded-lg w-64 space-y-4">
          <Typography variant="h4" className="text-center">
            {plan.title}
          </Typography>
          <Typography variant="h2" className="text-center">
            ${plan.price}
          </Typography>
          <Typography variant="body" className="text-center">
            Features:
          </Typography>
          <ul className="flex flex-col space-y-2">
            {plan.features.map((feature, featureIndex) => (
              <li key={featureIndex}>
                <Typography variant="body" className="text-center">
                  {feature}
                </Typography>
              </li>
            ))}
          </ul>
        </Box>
      ))}
    </Box>
  );
};

export default PricingOverview;
