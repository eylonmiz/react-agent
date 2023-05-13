import React from 'react';
import { Typography, Button } from '@react-agent/shadcn-ui';
import CustomerQuote from './CustomerQuote';

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  companyLogoURL: string;
};

interface TestimonialsProps {
  title: string;
  description: string;
  testimonials: Testimonial[];
}

const Testimonials: React.FC<TestimonialsProps> = ({ title, description, testimonials }) => {
  return (
    <section className="flex flex-col items-center space-y-8 px-4 py-8">
      <Typography variant="h2" align="center">
        {title}
      </Typography>
      <Typography variant="body" align="center">
        {description}
      </Typography>

      <div className="space-y-8">
        {testimonials.map((testimonial, index) => (
          <CustomerQuote
            key={index}
            quote={testimonial.quote}
            name={testimonial.name}
            title={testimonial.title}
            companyLogoURL={testimonial.companyLogoURL}
          />
        ))}
      </div>

      <Button className="bg-primary hover:bg-primary-600 text-white font-semibold px-5 py-2 rounded-md">
        Request a Demo
      </Button>
    </section>
  );
};

export default Testimonials;
