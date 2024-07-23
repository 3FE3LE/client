'use client';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

import { Monitor } from '../icons/Monitor';
import { Moon } from '../icons/Moon';
import { Sun } from '../icons/Sun';

export const ThemeSwitcher = () => {
  const themes = [
    { name: 'system', title: 'System', icon: Monitor },
    { name: 'dark', title: 'Dark', icon: Moon },
    { name: 'light', title: 'Light', icon: Sun },
  ];

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [showOptions, setShowOptions] = useState(false);
  const selectedTheme = themes.find((th) => th.name === theme);
  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="th-sw" onClick={() => setShowOptions(!showOptions)}>
      <span>{selectedTheme ? selectedTheme.title : 'Theme'}</span>
      <button className={`th-sw__btn `}>
        {selectedTheme && <selectedTheme.icon />}
      </button>
      {showOptions && (
        <div className="th-sw__options">
          {themes.map(
            (option) =>
              theme !== option.name && (
                <button
                  key={option.name}
                  className={`th-sw__btn`}
                  onClick={() => {
                    setTheme(option.name);
                    setShowOptions(!showOptions);
                  }}
                >
                  <option.icon />
                </button>
              ),
          )}
        </div>
      )}
    </div>
  );
};
