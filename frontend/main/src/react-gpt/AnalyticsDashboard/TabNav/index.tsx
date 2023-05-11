
import React from 'react';
import { TabsTrigger, TabsList } from '@react-gpt/shadcn-ui'

export interface TabNavProps {
  tabs: string[];
  defaultTab: string;
  onChangeTab: (tab: string) => void;
};

const TabNav = (props: TabNavProps) => {
  const { tabs, defaultTab, onChangeTab } = props;

  return (
    <div className="w-80 inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
      <TabsList className="grid w-full grid-cols-2">
        {tabs.map((tab, index) => (
          <TabsTrigger
            key={index}
            value={tab}
            onClick={() => onChangeTab(tab)}
            className={tab === defaultTab ? 'bg-blue-500 text-white' : ''}
          >
            {tab}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};

export default TabNav;
