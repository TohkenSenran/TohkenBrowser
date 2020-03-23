import * as React from 'react';
import IconFontButton from './IconFontButton';
// import { FileSystemFileHandle } from '../../../types/native-file-system';

if (typeof self.chooseFileSystemEntries !== 'undefined') {
  alert('NFS is allowed!');
  /*
  const fileHandle: FileSystemFileHandle = await window.chooseFileSystemEntries({
    type: 'open-file', // ダイアログの種類（ほかにも'saveFile'、'openDirectory'）
    accepts: [{
      description: 'Text file', // ファイルに関する説明
      mimeTypes: ['text/plain'], // 受け付けるファイルのmimeType
      extensions: ['txt'], // 受け付けるファイル拡張子
    }],
  });
  const file = await fileHandle.getFile();
  const text = await file.text();
  console.log(text); // 内容を出力
  */
} else {
  alert('NFS is not allowed!');
}

const JsonLogger: React.FC = () => {

  const handleClick = async () => {
    console.log('in logger handleClick', window.chooseFileSystemEntries);
  };

  return (
    <IconFontButton iconName="list" tooltipText="JsonLogger" onClick={handleClick} />
  );
};

export default JsonLogger;
