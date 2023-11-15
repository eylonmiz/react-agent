
import React from 'react';
import { Box, Tabs, TabsContent } from '@react-agent/shadcn-ui';
import Header from './Header';
import SubHeader from './SubHeader';
import TabNav from './TabNav';
import SmallCardsContainer from './SmallCardsContainer';
import BigCardsContainer from './BigCardsContainer';

export interface AnalyticsDashboardPageProps {};

const AnalyticsDashboardPage = (props: AnalyticsDashboardPageProps) => {
  return (
    <Box className="flex flex-col md:flex min-h-screen">
      <Header />
      <SubHeader />
      <Tabs className="flex-1 space-y-4 p-8 pt-6">
        <TabNav
          tabs={[
            { value: 'overview', label: 'Overview' },
            { value: 'recent', label: 'Recent Sales' },
          ]}
        />
        <TabsContent value="overview">
          <SmallCardsContainer />
          <BigCardsContainer />
        </TabsContent>
        <TabsContent value="recent">
          {/* Another set of components for recent sales */}
        </TabsContent>
      </Tabs>
    </Box>
  );
};

export default AnalyticsDashboardPage;
