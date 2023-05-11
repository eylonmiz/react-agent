// components/SkeletonDemo.tsx
import React from 'react';
import { Box, Skeleton } from '../../ui';

function SkeletonDemo() {
  return (
    <div className="flex items-center space-x-4">
      <Skeleton className="h-12 w-12 rounded-full" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
    </div>
  );
}

const SkeletonPageDemo = () => {
  return (
    <Box className="dashboard p-8">
      <Box className="header flex justify-between items-center">
        <Skeleton className="h-12 w-12" />
        <Skeleton className="h-12 w-36" />
        <Skeleton className="h-12 w-24" />
        <Skeleton className="h-12 w-12" />
      </Box>

      <Box className="sub-header mt-8 flex justify-between items-center">
        <Skeleton className="h-10 w-24" />
        <Skeleton className="h-10 w-40" />
        <Skeleton className="h-10 w-20" />
      </Box>

      <Box className="kpi-cards mt-8 grid grid-cols-4 gap-4">
        {Array(4)
          .fill(null)
          .map((_, idx) => (
            <Skeleton key={idx} className="h-32 w-full" />
          ))}
      </Box>

      <Box className="large-cards mt-8 grid grid-cols-2 gap-4">
        <Skeleton className="h-64 w-full" />
        <Skeleton className="h-64 w-full" />
      </Box>

      <Box className="tab-navigation mt-8 flex space-x-4">
        {Array(4)
          .fill(null)
          .map((_, idx) => (
            <Skeleton key={idx} className="h-8 w-24" />
          ))}
      </Box>
    </Box>
  );
};

const SaaSLandingPageSkeleton = () => {
  return (
    <Box className="flex flex-col min-h-screen">
      <Box id="header" className="flex items-center justify-between p-4">
        <Skeleton id="logo" className="w-32 h-10" />
        <Box className="flex items-center space-x-4">
          <Skeleton id="nav-link-1" className="w-20 h-6" />
          <Skeleton id="nav-link-2" className="w-20 h-6" />
          <Skeleton id="nav-link-3" className="w-20 h-6" />
          <Skeleton id="cta-button" className="w-24 h-10" />
        </Box>
      </Box>

      <Box id="hero-section" className="flex flex-grow items-center justify-center p-4">
        <Box className="space-y-4">
          <Skeleton id="hero-title" className="w-96 h-12" />
          <Skeleton id="hero-subtitle" className="w-80 h-10" />
          <Skeleton id="hero-cta" className="w-40 h-10" />
        </Box>
      </Box>

      <Box id="features-section" className="grid grid-cols-3 gap-4 p-4">
        <Box className="space-y-4">
          <Skeleton id="feature-1-icon" className="w-16 h-16 mx-auto" />
          <Skeleton id="feature-1-title" className="w-24 h-6 mx-auto" />
          <Skeleton id="feature-1-description" className="w-full h-20" />
        </Box>
        <Box className="space-y-4">
          <Skeleton id="feature-2-icon" className="w-16 h-16 mx-auto" />
          <Skeleton id="feature-2-title" className="w-24 h-6 mx-auto" />
          <Skeleton id="feature-2-description" className="w-full h-20" />
        </Box>
        <Box className="space-y-4">
          <Skeleton id="feature-3-icon" className="w-16 h-16 mx-auto" />
          <Skeleton id="feature-3-title" className="w-24 h-6 mx-auto" />
          <Skeleton id="feature-3-description" className="w-full h-20" />
        </Box>
      </Box>

      <Box id="footer" className="flex items-center justify-between p-4">
        <Skeleton id="footer-logo" className="w-32 h-10" />
        <Box className="flex items-center space-x-4">
          <Skeleton id="footer-link-1" className="w-20 h-6" />
          <Skeleton id="footer-link-2" className="w-20 h-6" />
          <Skeleton id="footer-link-3" className="w-20 h-6" />
        </Box>
      </Box>
    </Box>
  );
};

export { SkeletonDemo, SkeletonPageDemo, SaaSLandingPageSkeleton };
