import React from 'react';
import { Typography } from '@react-agent/shadcn-ui';

export interface CustomerQuoteProps {
  quote: string;
  name: string;
  title: string;
  companyLogoURL: string;
}

const CustomerQuote: React.FC<CustomerQuoteProps> = ({ quote, name, title, companyLogoURL }) => {
  return (
    <div className="flex flex-col items-center space-y-4">
      <Typography variant="blockquote" className="italic">
        {quote}
      </Typography>
      <Typography variant="body" className="font-semibold">
        {name}
      </Typography>
      <Typography variant="body" className="text-gray-600">
        {title}
      </Typography>
      <div className="w-20 h-20 bg-cover bg-center" style={{ backgroundImage: `url(${companyLogoURL})` }} />
    </div>
  );
};

export default CustomerQuote;
