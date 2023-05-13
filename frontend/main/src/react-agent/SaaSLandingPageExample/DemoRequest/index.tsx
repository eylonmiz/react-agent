import React from 'react';
import { Typography, Button } from '@react-agent/shadcn-ui';

export interface DemoRequestProps {}

const DemoRequest: React.FC<DemoRequestProps> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-8">
      <Typography variant="h2" className="text-2xl font-semibold mb-4">
        Experience the Power of Our CRM Solution
      </Typography>
      <Typography variant="body" className="text-base mb-4">
        Request a personalized demo to discover how our CRM platform can transform your business.
      </Typography>
      <Button className="w-48 h-12">Request a Demo</Button>
    </div>
  );
};

export default DemoRequest;
