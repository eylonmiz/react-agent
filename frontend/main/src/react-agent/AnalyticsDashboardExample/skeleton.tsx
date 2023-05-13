import React from 'react';

const AnalyticsDashboardSkeleton: React.FC = () => {
  return (
    <div className="hidden flex-col md:flex">
      <div className="flex h-16 items-center px-4 border-b" id="Header">
        <div className="" id="TeamSwitcher">
          <div className="animate-pulse rounded-md bg-muted h-8 w-40" id="Button">
            <span>Button</span>
          </div>
        </div>
        <div className="flex items-center space-x-4 lg:space-x-6 mx-6" id="DashboardNav">
          <div className="animate-pulse rounded-md bg-muted h-8 w-60" id="NavItems">
            <span>NavItems</span>
          </div>
        </div>
        <div className="ml-auto flex items-center space-x-4" id="HeaderActions">
          <div className="animate-pulse rounded-md bg-muted h-9 md:w-[100px] lg:w-[300px]" id="SearchInput">
            <span>SearchInput</span>
          </div>
          <div className="" id="UserNav">
            <div className="animate-pulse bg-muted relative h-8 w-8 rounded-full" id="Button">
              <span>Button</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 space-y-4 p-8 pt-6" id="DashboardContent">
        <div className="flex items-center justify-between space-y-2" id="SubHeader">
          <div className="animate-pulse rounded-md bg-muted w-32 h-8" id="SubHeaderTypography">
            <span>SubHeaderTypography</span>
          </div>
          <div className="flex items-center space-x-2" id="SubHeaderActions">
            <div className="grid gap-2" id="CalendarContainer">
              <div className="animate-pulse rounded-md bg-muted w-48 h-8" id="CalendarPopover">
                <span>CalendarPopover</span>
              </div>
            </div>
            <div className="animate-pulse rounded-md bg-muted w-24 h-8" id="DownloadButton">
              <span>DownloadButton</span>
            </div>
          </div>
        </div>
        <div className="space-y-4" id="Tabs">
          <div
            className="animate-pulse w-80 inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground"
            id="TabNav"
          >
            <span>TabNav</span>
          </div>
          <div
            className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 space-y-4"
            id="TabsContent"
          >
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4" id="SmallCardsContainer">
              <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm" id="TotalRevenueCard">
                <div className="animate-pulse rounded-md bg-muted h-24" id="TotalRevenueCardContent">
                  <span>TotalRevenueCardContent</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm" id="SubscriptionsCard">
                <div className="animate-pulse rounded-md bg-muted h-24" id="SubscriptionsCardContent">
                  <span>SubscriptionsCardContent</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm" id="SalesCard">
                <div className="animate-pulse rounded-md bg-muted h-24" id="SalesCardContent">
                  <span>SalesCardContent</span>
                </div>
              </div>
              <div className="p-4 rounded-lg border bg-card text-card-foreground shadow-sm" id="ActiveNowCard">
                <div className="animate-pulse rounded-md bg-muted h-24" id="ActiveNowCardContent">
                  <span>ActiveNowCardContent</span>
                </div>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7" id="BigCardsContainer">
              <div
                className="col-span-4 p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
                id="OverviewCard"
              >
                <div className="animate-pulse rounded-md bg-muted w-40 h-8 mb-4" id="CardHeader">
                  <span>CardHeader</span>
                </div>
                <div className="animate-pulse rounded-md bg-muted w-full h-80" id="OverviewCardContent">
                  <span>OverviewCardContent</span>
                </div>
              </div>
              <div
                className="col-span-3 p-4 rounded-lg border bg-card text-card-foreground shadow-sm"
                id="RecentSalesCard"
              >
                <div className="animate-pulse rounded-md bg-muted w-40 h-8 mb-4" id="CardHeader">
                  <span>CardHeader</span>
                </div>
                <div className="animate-pulse rounded-md bg-muted w-full h-80" id="RecentSalesCardContent">
                  <span>RecentSalesCardContent</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboardSkeleton;
