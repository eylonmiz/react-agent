import React from 'react';
import { Box, Button, Calendar, Popover, PopoverContent, PopoverTrigger } from '@react-agent/shadcn-ui';
import { Calendar as CalendarIcon, Download } from 'lucide-react';
import { addDays, format } from 'date-fns';
import { DateRange } from 'react-day-picker';
import { cn } from '@react-agent/shadcn-ui/src/lib/utils';

export interface SubHeaderProps {}

const SubHeader: React.FC<SubHeaderProps> = () => {
  const [date, setDate] = React.useState<DateRange | undefined>({
    from: new Date(2023, 0, 20),
    to: addDays(new Date(2023, 0, 20), 20),
  });
  return (
    <Box className="flex items-center justify-between space-y-2">
      <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      <Box className="flex items-center space-x-2">
        <Box className={'grid gap-2'}>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                id="date"
                variant={'outline'}
                size="sm"
                className={cn('w-[240px] justify-start text-left font-normal', !date && 'text-muted-foreground')}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date?.from ? (
                  date.to ? (
                    <>
                      {format(date.from, 'LLL dd, y')} - {format(date.to, 'LLL dd, y')}
                    </>
                  ) : (
                    format(date.from, 'LLL dd, y')
                  )
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="end">
              <Calendar
                initialFocus
                mode="range"
                defaultMonth={date?.from}
                selected={date}
                onSelect={setDate}
                numberOfMonths={2}
              />
            </PopoverContent>
          </Popover>
        </Box>
        <Button size="sm">
          <Download className="mr-2 h-4 w-4" />
          Download
        </Button>
      </Box>
    </Box>
  );
};

export default SubHeader;
