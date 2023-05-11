
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
} from '@react-gpt/shadcn-ui';

export interface UserNavProps {
  userAvatarUrl?: string;
  userInitials?: string;
  onSettingsClicked?: () => void;
  onLogoutClicked?: () => void;
  userName?: string;
};

const UserNav = (props: UserNavProps) => {
  const {
    userAvatarUrl,
    userInitials,
    onSettingsClicked,
    onLogoutClicked,
    userName,
  } = props;

  return (
    <Box className="flex items-center">
      <Button className="mr-4">
        <i className="fal fa-search"></i>
      </Button>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            {userAvatarUrl ? (
              <AvatarImage src={userAvatarUrl} alt={userName} />
            ) : (
              <AvatarFallback>{userInitials || 'NA'}</AvatarFallback>
            )}
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className="mt-2" align="end">
          <DropdownMenuGroup>
            <DropdownMenuLabel>{userName}</DropdownMenuLabel>
            <DropdownMenuItem onSelect={onSettingsClicked}>
              <DropdownMenuShortcut>
                <i className="fa fa-cog" />
              </DropdownMenuShortcut>
              Settings
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onSelect={onLogoutClicked}>
              <DropdownMenuShortcut>
                <i className="fa fa-sign-out-alt" />
              </DropdownMenuShortcut>
              Logout
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </Box>
  );
};

export default UserNav;
