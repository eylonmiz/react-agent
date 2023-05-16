
import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Box,
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Input,
  Label,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@react-agent/shadcn-ui';

export interface TeamSwitcherProps {
  teams: Array<{ id: number; name: string; avatar?: string }>;
  onTeamChange: (teamId: number) => void;
};

const TeamSwitcher: React.FC<TeamSwitcherProps> = ({ teams, onTeamChange }) => {
  return (
    <Popover>
      <PopoverTrigger>
        <Button className="h-8 w-40 bg-white text-black border border-gray-300 rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-400">
          Choose Team
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mt-2 w-64">
        <Box className="p-4 bg-white rounded-lg shadow-md text-gray-700">
          {teams.map((team) => (
            <div
              key={team.id}
              className="flex items-center space-x-2 mb-2 cursor-pointer"
              onClick={() => onTeamChange(team.id)}
            >
              <Avatar>
                {team.avatar ? (
                  <AvatarImage src={team.avatar} alt={team.name} />
                ) : (
                  <AvatarFallback>{team.name.charAt(0)}</AvatarFallback>
                )}
              </Avatar>
              <span>{team.name}</span>
            </div>
          ))}
        </Box>
      </PopoverContent>
    </Popover>
  );
};

export default TeamSwitcher;
