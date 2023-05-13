import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import KeyFeatures from './KeyFeatures';
import Testimonials from './Testimonials';
import PricingSection from './PricingSection';
import DemoRequest from './DemoRequest';
import Footer from './Footer';

export interface SaasCrmLandingPageProps {}

const SaasCrmLandingPage: React.FC<SaasCrmLandingPageProps> = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <HeroSection />
      <KeyFeatures />
      <Testimonials
        title="What Our Customers Say"
        description="Hear directly from customers who have experienced success using our CRM solution."
        testimonials={[
          {
            quote:
              'Using this CRM has transformed the way we manage our sales and support processes. It has been a game-changer for our business growth.',
            name: 'John Doe',
            title: 'CEO',
            companyLogoURL: 'https://example.com/company/logo1.png',
          },
          {
            quote:
              'The marketing automation tools have helped us generate more leads and increase our conversion rates significantly.',
            name: 'Jane Smith',
            title: 'Marketing Director',
            companyLogoURL: 'https://example.com/company/logo2.png',
          },
        ]}
      />
      <PricingSection
        pricingPlans={[
          {
            title: 'Basic',
            price: 19,
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
          },
          {
            title: 'Pro',
            price: 49,
            features: ['Feature 1', 'Feature 2', 'Feature 3', 'Feature 4'],
          },
        ]}
      />
      <DemoRequest />
      <Footer
        companyName="CRM Solution"
        email="support@example.com"
        phone="+1 (123) 456-7890"
        twitterUrl="https://twitter.com/example"
        facebookUrl="https://facebook.com/example"
        linkedinUrl="https://linkedin.com/example"
        githubUrl="https://github.com/example"
        onPrivacyPolicyClick={() => console.log('Privacy Policy Clicked')}
        onTermsOfServiceClick={() => console.log('Terms of Service Clicked')}
      />
    </div>
  );
};

export default SaasCrmLandingPage;
