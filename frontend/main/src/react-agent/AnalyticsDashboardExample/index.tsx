import React from 'react';
import { Box, Tabs, TabsContent } from '@react-agent/shadcn-ui';
import Header from './Header';
import SubHeader from './SubHeader';
import TabNav from './TabNav';
import SmallCardsContainer from './SmallCardsContainer';
import BigCardsContainer from './BigCardsContainer';

export interface AnalyticsDashboardPageProps {}

const AnalyticsDashboardPage = () => {
  return (
    <Box className="hidden flex-col md:flex">
      <Header />
      <Box id="dashboard-content" className="flex-1 space-y-4 p-8 pt-6">
        <SubHeader />
        <Tabs defaultValue="overview" className="space-y-4">
          <TabNav />
          <TabsContent value="overview" className="space-y-4">
            <SmallCardsContainer />
            <BigCardsContainer />
          </TabsContent>
        </Tabs>
      </Box>
    </Box>
  );
};

export default AnalyticsDashboardPage;
