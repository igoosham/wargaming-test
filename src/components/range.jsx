import React from 'react';
import { Range } from 'react-range';

function BasicRange({ range, setRange, maxRange }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        padding: '1rem',
      }}
    >
      <Range
        values={[range]}
        step={1}
        min={0}
        max={maxRange}
        onChange={setRange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '24px',
              width: '42px',
              backgroundColor: '#999'
            }}
          />
        )}
      />
      <output style={{ marginTop: '5px' }} id="output">
        Loaded: {range.toLocaleString('en-US')} items
      </output>
    </div>
  );
}

export default BasicRange;
