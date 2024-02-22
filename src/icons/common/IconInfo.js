import * as React from "react";
const SvgIconInfo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path fill="currentColor" d="M0 0h32v32H0z" opacity={0.01} />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M28.5 25.298H16.072l-8 5.702v-5.703H3.5V3h25zM26.214 5.272H5.786v17.754h4.572v3.55l4.98-3.55h10.876zm-8.85 8.119v6.534h-2.63V13.39zm-1.316-1.96c.908 0 1.643-.731 1.643-1.633s-.735-1.634-1.643-1.634c-.907 0-1.644.732-1.644 1.634s.736 1.633 1.644 1.633"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgIconInfo;
