
import React from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Box,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@react-agent/shadcn-ui';

export interface UserNavProps {
  userFullName: string;
  userAvatarUrl?: string;
  onSettingsClick: () => void;
  onLogoutClick: () => void;
};

const UserNav = (props: UserNavProps) => {
  return (
    <div className="flex items-center">
      <Box className="mr-4">
        {props.userFullName}
      </Box>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button className="relative h-8 w-8 rounded-full">
            <Avatar>
              {props.userAvatarUrl ? (
                <AvatarImage src={props.userAvatarUrl} alt={props.userFullName} />
              ) : (
                <AvatarFallback>{props.userFullName.charAt(0)}</AvatarFallback>
              )}
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>User options</DropdownMenuLabel>
            <DropdownMenuItem onSelect={props.onSettingsClick}>
              <DropdownMenuShortcut title="Settings" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem onSelect={props.onLogoutClick}>
              <DropdownMenuShortcut title="Logout" />
              Logout
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UserNav;
