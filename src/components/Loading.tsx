'use client';

import React, { useEffect } from 'react';

function Loading() {
  useEffect(() => {
    document?.querySelector('#main-loading')?.remove();
    // document.querySelector('#main-content')?.removeAttribute('style');
  }, []);

  return (
    <div
      id="main-loading"
      style={{
        position: 'fixed',
        left: '0px',
        top: '0px',
        width: '100%',
        height: '100%',
        zIndex: '999999',
        justifyContent: 'center',
        background: 'white',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div
        className="spinner-border text-primary"
        role="status"
        style={{
          width: '4rem',
          height: '4rem',
        }}
      >
        <span className="sr-only">Loading...</span>
      </div>
      {/* <div className="se-pre-con"></div> */}
    </div>
  );
}

export default Loading;
