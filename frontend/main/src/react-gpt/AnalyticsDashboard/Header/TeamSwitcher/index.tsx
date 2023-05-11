
import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@react-gpt/shadcn-ui';

export interface TeamSwitcherProps {
  teams: { id: string; name: string; avatarUrl?: string }[];
  selectedTeamId: string;
  onSelect: (teamId: string) => void;
}

const TeamSwitcher: React.FC<TeamSwitcherProps> = ({
  teams,
  selectedTeamId,
  onSelect,
}) => {
  const selectedTeam = teams.find(team => team.id === selectedTeamId);

  return (
    <Popover>
      <PopoverTrigger>
        <Button className="flex items-center space-x-2 h-8 w-40">
          {selectedTeam?.avatarUrl ? (
            <Avatar>
              <AvatarImage src={selectedTeam.avatarUrl} alt={selectedTeam.name} />
              <AvatarFallback>{selectedTeam.name.slice(0, 2)}</AvatarFallback>
            </Avatar>
          ) : (
            <AvatarFallback className="bg-blue-500 text-white">
              {selectedTeam?.name.slice(0, 2)}
            </AvatarFallback>
          )}
          <span>{selectedTeam?.name}</span>
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Select onSelect={onSelect}>
          <SelectTrigger className="hidden" />
          <SelectContent>
            {teams.map(team => (
              <SelectItem key={team.id} value={team.id}>
                {team.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </PopoverContent>
    </Popover>
  );
};

export default TeamSwitcher;
