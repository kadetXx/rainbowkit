import React, { SVGProps } from 'react';
import { themeVars } from '../../css/sprinkles.css';

type Props = SVGProps<SVGSVGElement>;

export const CloseIcon = (props: Props) => (
  <svg
    fill="none"
    height="34"
    role="img"
    width="34"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="17" cy="17" fill={themeVars.colors.modalClose} r="17" />
    <path
      d="M11.47 20.407c-.54.54-.568 1.573.027 2.167.595.595 1.627.568 2.167.028l3.33-3.336 3.321 3.329c.575.574 1.58.56 2.167-.028.595-.594.602-1.592.028-2.167l-3.323-3.322 3.323-3.322c.574-.574.567-1.58-.028-2.167-.587-.595-1.592-.602-2.167-.027l-3.322 3.322-3.329-3.33c-.54-.54-1.572-.567-2.167.028-.595.588-.567 1.62-.027 2.16l3.336 3.336-3.336 3.33z"
      fill="currentColor"
    />
  </svg>
);

export const NextIcon = () => (
  <svg
    fill="none"
    height="23"
    role="img"
    width="22"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11 22.006c5.8 0 10.547-4.746 10.547-10.547C21.547 5.649 16.8.902 10.99.902 5.19.902.443 5.648.443 11.46c0 5.8 4.746 10.547 10.557 10.547Zm0-3.184a7.358 7.358 0 0 1-7.373-7.363 7.358 7.358 0 0 1 7.363-7.373 7.36 7.36 0 0 1 7.373 7.373A7.356 7.356 0 0 1 11 18.822Zm-2.08-2.627c.38.381 1.182.371 1.592-.02l3.662-3.427c.723-.674.723-1.875 0-2.549l-3.662-3.418c-.46-.43-1.133-.42-1.553-.029a1.107 1.107 0 0 0-.03 1.611l3.34 3.106-3.34 3.115a1.123 1.123 0 0 0-.01 1.611Z"
      fill="currentColor"
    />
  </svg>
);
