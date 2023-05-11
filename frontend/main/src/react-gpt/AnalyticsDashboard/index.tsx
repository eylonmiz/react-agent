
import React from 'react';
import { Box, Tabs, TabsContent } from '@react-gpt/shadcn-ui';
import Header from './Header';
import SubHeader from './SubHeader';
import TabNav from './TabNav';
import SmallCardsContainer from './SmallCardsContainer';
import BigCardsContainer from './BigCardsContainer';

export interface AnalyticsDashboardPageProps {};

const AnalyticsDashboardPage: React.FC<AnalyticsDashboardPageProps> = (props: AnalyticsDashboardPageProps) => {
  return (
    <Box className="hidden flex-col md:flex">
      <Header
        teams={[]}
        selectedTeamId=""
        onTeamSelect={() => {}}
        navItems={[]}
        userAvatarUrl=""
        userInitials=""
        onSettingsClicked={() => {}}
        onLogoutClicked={() => {}}
        userName=""
      />
      <SubHeader
        title="Analytics Dashboard"
        onDateRangeChange={(startDate, endDate) => {}}
        onDownloadClick={() => {}}
      />
      <Box className="flex-1 space-y-4 p-8 pt-6">
        <Tabs defaultValue="overview" className="space-y-4">
          <TabNav
            tabs={['Overview', 'Recent Sales']}
            defaultTab={'Overview'}
            onChangeTab={(tab: string) => {}}
          />
          <TabsContent value="overview">
            <SmallCardsContainer />
          </TabsContent>
          <TabsContent value="recentSales">
            <BigCardsContainer
              overviewData={{}}
              recentSalesData={[]}
            />
          </TabsContent>
        </Tabs>
      </Box>
    </Box>
  )
};

export default AnalyticsDashboardPage;
