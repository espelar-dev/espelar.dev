import React from 'react';

const Calendly = () => {
  return (
    <div style={{ height: "800px", zIndex: 555 }}>
      <iframe
        src="https://calendly.com/hrittik_bh/30min"
        width="100%"
        height="100%"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Calendly;