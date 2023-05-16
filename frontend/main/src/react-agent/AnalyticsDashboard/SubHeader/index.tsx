
import React, { useState } from 'react';
import { Box, Button, Calendar, Popover, PopoverContent, PopoverTrigger } from '@react-agent/shadcn-ui'

export interface SubHeaderProps {};

const SubHeader = (props: SubHeaderProps) => {
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <Box className="flex items-center justify-between space-y-2">
      <h2 className="w-32 h-8">Analytics Dashboard</h2>
      <Box className="flex items-center space-x-2">
        <Box className="grid gap-2">
          <Popover open={showCalendar} onClose={() => setShowCalendar(false)}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-48 h-8" onClick={() => setShowCalendar(!showCalendar)}>
                Date Range
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56">
              <Calendar className="border-0" />
            </PopoverContent>
          </Popover>
        </Box>
        <Button className="w-24 h-8">Download</Button>
      </Box>
    </Box>
  );
};

export default SubHeader;
