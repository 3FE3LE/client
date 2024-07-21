'use client';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Monitor, Moon, Sun } from '@repo/ui';

export const ThemeSwitcher = () => {
  const themes = [
    { name: 'system', icon: Monitor },
    { name: 'dark', icon: Moon },
    { name: 'light', icon: Sun },
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
      <span className="">Theme</span>
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
