'use client';
import { Monitor, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import React, { useEffect, useState } from 'react';

type IconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

export const ThemeSwitcher: React.FC = () => {
  const themes = [
    { name: 'system', title: 'System', Icon: Monitor as IconComponent },
    { name: 'dark', title: 'Dark', Icon: Moon as IconComponent },
    { name: 'light', title: 'Light', Icon: Sun as IconComponent },
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
        {selectedTheme && <selectedTheme.Icon />}
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
                  <option.Icon />
                </button>
              ),
          )}
        </div>
      )}
    </div>
  );
};
