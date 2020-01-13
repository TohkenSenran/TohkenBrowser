import * as React from 'react';
import { requestType, sendMessageToBackground } from '../models/sendMessageToBackground';
import IconFontButton from './IconFontButton';

const HandbookButton: React.FC = () => {
  const handleClick = () => {
    sendMessageToBackground(requestType.createHandbookWindow);
  };
  return (
    <IconFontButton iconName="menu_book" tooltipText="便利帳" onClick={handleClick} />
  );
};

export default HandbookButton;
