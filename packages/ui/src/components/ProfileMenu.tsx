import React from 'react';

import { MenuItem } from './MenuItem';

export type ProfileMenuProps = {
  onProfile: () => void;
  onSettings: () => void;
  onLogout: () => void;
};

export const ProfileMenu: React.FC<ProfileMenuProps> = ({
  onProfile,
  onSettings,
  onLogout,
}) => (
  <div className="profile-menu">
    <MenuItem label="Profile" onClick={onProfile} />
    <MenuItem label="Settings" onClick={onSettings} />
    <MenuItem label="Log Out" onClick={onLogout} />
  </div>
);
