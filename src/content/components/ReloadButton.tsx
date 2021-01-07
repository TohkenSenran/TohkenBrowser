import * as React from 'react';
import { IconFontButton } from './IconFontButton';

export const ReloadButton: React.FC = () => {
  const handleClick = (): void => {
    window.location.reload();
  };
  return <IconFontButton iconName="refresh" tooltipText="再読込" onClick={handleClick} />;
};
