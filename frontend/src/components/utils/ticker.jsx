import React from 'react';

import { healthTips } from './tip';
import './css/ticker.css'; // Create a separate CSS file or use inline styles

const Ticker = () => {
    return (
      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', background: '#333', color: 'white', padding: '20px 0' }}>
        <div style={{ display: 'inline-block', animation: 'scroll 100s linear infinite' }}>
          {healthTips.map((item, index) => (
            <span key={index} style={{ padding: '0 20px', fontSize: '20px' }}>
              <b><u>{item.topic}</u></b> : {item.tip}
            </span>
          ))}
          {healthTips.map((item, index) => (
            <span key={`duplicate-${index}`} style={{ padding: '0 20px', fontSize: '20px' }}>
              <b><u>{item.topic}</u></b> : {item.tip}
            </span>
          ))}
        </div>
      </div>
    );
  };
  
  export default Ticker;