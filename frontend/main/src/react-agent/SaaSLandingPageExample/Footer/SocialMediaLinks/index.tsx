import React from 'react';
import { Box } from '@react-agent/shadcn-ui';
import { Icon, Twitter, Facebook, LinkedIn, GitHub } from 'lucide-react';

export interface SocialMediaLinksProps {
  twitterUrl?: string;
  facebookUrl?: string;
  linkedinUrl?: string;
  githubUrl?: string;
}

const SocialMediaLink = ({ icon, url }: { icon: React.ReactElement; url?: string }) => (
  <a
    href={url || '#'}
    target="_blank"
    rel="noreferrer"
    className="text-gray-600 hover:text-gray-800 transition-colors duration-200"
  >
    {icon}
  </a>
);

const SocialMediaLinks = ({ twitterUrl, facebookUrl, linkedinUrl, githubUrl }: SocialMediaLinksProps) => {
  return (
    <Box className="flex space-x-4">
      <SocialMediaLink icon={<Twitter size={20} />} url={twitterUrl} />
      <SocialMediaLink icon={<Twitter size={20} />} url={facebookUrl} />
      <SocialMediaLink icon={<Twitter size={20} />} url={linkedinUrl} />
      <SocialMediaLink icon={<Twitter size={20} />} url={githubUrl} />
    </Box>
  );
};

export default SocialMediaLinks;
