import React from 'react';
import { NavigationMenu as Menu } from '@react-agent/shadcn-ui';

export interface NavigationMenuProps {}

const NavigationMenu: React.FC<NavigationMenuProps> = (props) => {
  return (
    <Menu>
      <Menu.List>
        <Menu.Item>
          <Menu.Trigger>Product</Menu.Trigger>
          <Menu.Content>{/* Implement your dropdown items here */}</Menu.Content>
        </Menu.Item>
        <Menu.Item>
          <Menu.Trigger>Pricing</Menu.Trigger>
          <Menu.Content>{/* Implement your dropdown items here */}</Menu.Content>
        </Menu.Item>
        <Menu.Item>
          <Menu.Trigger>Support</Menu.Trigger>
          <Menu.Content>{/* Implement your dropdown items here */}</Menu.Content>
        </Menu.Item>
        <Menu.Item>
          <Menu.Trigger>Login</Menu.Trigger>
          {/* No dropdown for Login, so no Menu.Content needed */}
        </Menu.Item>
        <Menu.Item>
          <Menu.Trigger>Sign Up</Menu.Trigger>
          {/* No dropdown for Sign Up, so no Menu.Content needed */}
        </Menu.Item>
      </Menu.List>
    </Menu>
  );
};

export default NavigationMenu;
