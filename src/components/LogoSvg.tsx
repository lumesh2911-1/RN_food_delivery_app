import React from "react";
import Svg, { Rect, Path } from "react-native-svg";

interface LogoSvgProps {
  width?: number | string;
  height?: number | string;
}

export default function LogoSvg({ width = 130, height = 130 }: LogoSvgProps) {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 100 100"
      fill="none"
    >
      <Rect width="100" height="100" rx="30" fill="#114C32" />
      {/* Stems */}
      <Path
        d="M58 35L62 23M58 35L72 26M58 35L75 38"
        stroke="#F58700"
        strokeWidth="5"
        strokeLinecap="round"
      />
      {/* Carrot Body */}
      <Path
        d="M25 75C28 78 30 78 32 75L62 45C68 39 65 31 57 31C49 31 41 34 35 40L25 75Z"
        fill="#F58700"
      />
      {/* Slices (rendered in background color to create negative space cuts) */}
      <Path
        d="M30 52L48 34"
        stroke="#114C32"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
      <Path
        d="M42 64L60 46"
        stroke="#114C32"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </Svg>
  );
}
