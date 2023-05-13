import React from 'react';
import { Typography, Button } from '@react-agent/shadcn-ui';

export interface LegalLinksProps {
  className?: string;
  onPrivacyPolicyClick?: () => void;
  onTermsOfServiceClick?: () => void;
}

const LegalLinks: React.FC<LegalLinksProps> = ({ className, onPrivacyPolicyClick, onTermsOfServiceClick }) => {
  return (
    <div className={`flex space-x-4 ${className}`}>
      <Button variant="link" onClick={onPrivacyPolicyClick}>
        <Typography variant="anchor" href="#">
          Privacy Policy
        </Typography>
      </Button>
      <Button variant="link" onClick={onTermsOfServiceClick}>
        <Typography variant="anchor" href="#">
          Terms of Service
        </Typography>
      </Button>
    </div>
  );
};

export default LegalLinks;
