import React from 'react';
import Upload from '../../../assets/upload.svg';
import './upload.css';

function upload() {
  return (
    <div className="upload-logo-outer">
      <img className="upload-logo" src={Upload} alt="logo" />
    </div>
  );
}

export default upload;
