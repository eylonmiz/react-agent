import React from 'react';
import { Typography } from '@react-agent/shadcn-ui';
import { Download } from 'lucide-react';
import ContactInfo from './ContactInfo';
import SocialMediaLinks from './SocialMediaLinks';
import LegalLinks from './LegalLinks';

export interface FooterProps {
  companyName: string;
  email: string;
  phone: string;
  twitterUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
  onPrivacyPolicyClick?: () => void;
  onTermsOfServiceClick?: () => void;
}

const Footer = ({
  companyName,
  email,
  phone,
  twitterUrl,
  facebookUrl,
  linkedinUrl,
  githubUrl,
  onPrivacyPolicyClick,
  onTermsOfServiceClick,
}: FooterProps) => {
  return (
    <footer className="flex flex-col items-center space-y-4 px-4 py-4 bg-gray-100">
      <div className="w-32 h-8 flex items-center">
        <Download size={24} className="mr-2 text-primary" />
        <Typography variant="h5">{companyName}</Typography>
      </div>
      <ContactInfo email={email} phone={phone} />
      <SocialMediaLinks
        twitterUrl={twitterUrl}
        facebookUrl={facebookUrl}
        linkedinUrl={linkedinUrl}
        githubUrl={githubUrl}
      />
      <LegalLinks onPrivacyPolicyClick={onPrivacyPolicyClick} onTermsOfServiceClick={onTermsOfServiceClick} />
    </footer>
  );
};

export default Footer;
