
import React from 'react';
import {
  Box,
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@react-gpt/shadcn-ui';

export interface SubHeaderProps {
  title: string;
  onDateRangeChange?: (startDate: Date, endDate: Date) => void;
  onDownloadClick?: () => void;
}

const SubHeader: React.FC<SubHeaderProps> = ({
  title,
  onDateRangeChange,
  onDownloadClick,
}) => {
  const handleCalendarChange = (startDate: Date, endDate: Date) => {
    if (onDateRangeChange) {
      onDateRangeChange(startDate, endDate);
    }
  };

  return (
    <Box className="flex items-center justify-between space-y-2">
      <h2 className="font-semibold text-xl">{title}</h2>
      <div className="flex items-center space-x-2">
        <div className="grid gap-2">
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-48 h-8">
                Select a date range
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
              <Calendar
                className="shadow-md"
                onChange={handleCalendarChange}
                showDoubleView
                enableSelectingRange
              />
            </PopoverContent>
          </Popover>
        </div>
        <Button
          className="w-24 h-8"
          variant="secondary"
          onClick={onDownloadClick}
        >
          Download
        </Button>
      </div>
    </Box>
  );
};

export default SubHeader;
