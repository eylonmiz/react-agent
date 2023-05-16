
import React from 'react';
import { TabsTrigger, TabsList } from '@react-agent/shadcn-ui'

export interface TabNavProps {
  tabs: Array<{ value: string; label: string }>;
  defaultValue: string;
  onChange?: (value: string) => void;
};

const TabNav: React.FC<TabNavProps> = ({ tabs, defaultValue, onChange }) => {
  return (
    <div className="w-80 inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground">
      <TabsList>
        {tabs.map(tab => (
          <TabsTrigger
            key={tab.value}
            value={tab.value}
            onClick={() => onChange && onChange(tab.value)}
          >
            {tab.label}
          </TabsTrigger>
        ))}
      </TabsList>
    </div>
  );
};

export default TabNav;
