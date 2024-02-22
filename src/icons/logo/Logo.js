import * as React from "react";
const SvgLogo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={109}
    height={40}
    fill="none"
    {...props}
  >
    <g fill="currentColor" clipPath="url(#logo_svg__a)">
      <path d="M15.865 11.517h9.477v7.796h3.609V.028h-3.61v8.127h-9.476V.028h-3.637v19.285h3.637z" />
      <path
        fillRule="evenodd"
        d="M37.693 19.644c2.066 0 4.408-.717 5.84-2.204l-2.148-2.122c-.772.8-2.397 1.268-3.637 1.268-2.37 0-3.83-1.212-4.05-2.893h10.607c.524-5.593-2.314-8.403-6.86-8.403-4.408 0-7.218 2.975-7.218 7.108 0 4.353 2.783 7.246 7.466 7.246m-.138-11.378c1.929 0 3.306.881 3.527 2.644h-7.328c.495-1.763 1.983-2.645 3.801-2.645M52.896 19.698c1.515-.027 3.636-.799 4.408-2.396l.165 1.983h3.168V5.703h-3.223l-.11 1.873c-.772-1.35-2.507-2.204-4.325-2.204-3.968-.027-7.081 2.425-7.081 7.108 0 4.766 2.976 7.246 6.998 7.218m.386-11.323c5.29 0 5.29 8.238 0 8.238-2.232 0-4.023-1.543-4.023-4.133s1.79-4.105 4.023-4.105"
        clipRule="evenodd"
      />
      <path d="M63.032.028h3.334v19.258h-3.334zM82.618 12.342c0-2.038 1.378-3.719 3.361-3.719 1.791 0 3.086 1.047 3.086 3.527v7.135h3.361v-7.163c0-3.995-1.708-6.612-5.565-6.612-1.543 0-3.03.468-4.243 2.039V0h-3.361v19.285h3.361zM70.842 14.49c0 3.39 1.928 5.07 4.876 4.96a7.5 7.5 0 0 0 2.783-.579l-.937-2.865c-.496.248-1.102.413-1.626.413-1.047 0-1.763-.633-1.763-1.928V8.623h3.775V5.73h-3.747V2.418h-3.361V5.73h-2.535v2.893h2.535z" />
      <path d="m105.449 5.372-3.678 8.263-3.663-8.263H94.56l5.433 12.257-7.633 17.146L79 23.435 0 23.44v3.137l77.775.001L93.533 40 109 5.372z" />
    </g>
    <defs>
      <clipPath id="logo_svg__a">
        <path fill="#fff" d="M0 0h109v40H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgLogo;
