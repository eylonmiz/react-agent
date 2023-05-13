import React from 'react';
import { Typography } from '@react-agent/shadcn-ui';

export interface ContactInfoProps {
  email: string;
  phone: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ email, phone }) => {
  return (
    <div className="flex flex-col items-center space-y-1">
      <Typography variant="body" className="text-center">
        Email:{' '}
        <a href={`mailto:${email}`} className="text-primary underline">
          {email}
        </a>
      </Typography>
      <Typography variant="body" className="text-center">
        Phone:{' '}
        <a href={`tel:${phone}`} className="text-primary underline">
          {phone}
        </a>
      </Typography>
    </div>
  );
};

export default ContactInfo;
