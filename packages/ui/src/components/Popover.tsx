import React, { ReactNode, useEffect, useRef, useState } from 'react';

export type PopoverProps = {
  trigger: ReactNode;
  content: ReactNode;
};

export const Popover: React.FC<PopoverProps> = ({ trigger, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      popoverRef.current &&
      !popoverRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={popoverRef} className="popover-container">
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && <div className="popover-content">{content}</div>}
    </div>
  );
};
