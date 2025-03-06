"use client";

import React from "react";

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "text-primary" }) => {
  return (
    <svg
      width="70"
      height="74"
      viewBox="0 0 70 74"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10.496 0V10.496H0V0H10.496ZM10.496 17.472V73.472H0V17.472H10.496Z"
        fill="currentColor"
      />
      <path
        d="M69.6875 17.472V28.032H27.6395V31.488L69.6875 73.472H55.6715L24.1835 41.984V73.472H13.6875V28.032H20.6635V24.512H24.1835V20.992H20.6635V17.472H13.6875V0H24.1835V14.016H27.6395V17.472H69.6875ZM27.6395 28.032H24.1835V24.512C24.1835 26.432 22.5835 28.032 20.6635 28.032H24.1835V31.488C24.1835 30.528 24.5"
        fill="currentColor"
      />
    </svg>
  );
};

export default Logo;
