import React from 'react';

export const CalendarIcon = () => {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="40" height="40" fill="url(#pattern0_206_33232)" />
      <defs>
        <pattern
          id="pattern0_206_33232"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_206_33232" transform="scale(0.00195312)" />
        </pattern>
        <image
          id="image0_206_33232"
          width="512"
          height="512"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};
