import * as React from 'react';

const SvgError = (props) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8 0C3.627 0 0 3.627 0 8s3.627 8 8 8 8-3.627 8-8-3.627-8-8-8Zm0 12.8c-.32 0-.533-.213-.533-.533 0-.32.213-.534.533-.534.32 0 .533.214.533.534 0 .32-.213.533-.533.533Zm.533-2.88c0 .32-.213.64-.533.64-.32 0-.533-.32-.533-.64V3.84c0-.32.213-.64.533-.64.32 0 .533.32.533.64v6.08Z"
      fill="#AE2917"
    />
  </svg>
);

export default SvgError;
