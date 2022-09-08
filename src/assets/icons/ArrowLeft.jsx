import * as React from 'react';

const SvgArrowLeft = (props) => (
  <svg
    width={8}
    height={12}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.688.283a.5.5 0 0 0-.704-.07l-6.6 5.4a.5.5 0 0 0 0 .774l6.6 5.4a.5.5 0 1 0 .633-.774L1.49 6 7.617.987a.5.5 0 0 0 .07-.704Z"
      fill="#DEDEDE"
    />
  </svg>
);

export default SvgArrowLeft;
