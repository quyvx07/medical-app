import * as React from "react";
const SvgIconCup = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={56}
    height={56}
    fill="none"
    {...props}
  >
    <path fill="currentColor" d="M0 0h56v56H0z" opacity={0.01} />
    <g clipPath="url(#icon_cup_svg__a)">
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M45 12.046c-2.215 0-4.096-1.739-4.096-4.046H15.149c0 2.304-1.933 4.046-4.149 4.046v2.621h34zM12.7 18l5.207 30H38.2l5.1-30zm26.586 3.326L38.152 28H17.954l-1.134-6.674zM20.787 44.667 19.653 38h16.8l-1.133 6.667z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="icon_cup_svg__a">
        <path fill="currentColor" d="M11 8h34v40H11z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconCup;
