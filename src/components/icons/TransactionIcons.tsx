import React from 'react';
import Svg, { Path, Rect } from 'react-native-svg';

export const ExternalLinkGreen = ({ width = 31, height = 31 }) => (
  <Svg width={width} height={height} viewBox="0 0 31 31" fill="none">
    <Path 
      d="M18.4632 29.8754L11.5395 29.8352C5.32373 29.799 0.314284 24.731 0.35015 18.5152L0.390327 11.5915C0.426597 5.37571 5.49452 0.366264 11.7103 0.40213L18.634 0.442307C24.8498 0.478577 29.8593 5.5465 29.8234 11.7623L29.7832 18.686C29.747 24.9018 24.6791 29.9113 18.4632 29.8754Z" 
      fill="white" 
      fillOpacity="0.5"
    />
    <Path 
      d="M18.4632 29.8754L11.5395 29.8352C5.32373 29.799 0.314284 24.731 0.35015 18.5152L0.390327 11.5915C0.426597 5.37571 5.49452 0.366264 11.7103 0.40213L18.634 0.442307C24.8498 0.478577 29.8593 5.5465 29.8234 11.7623L29.7832 18.686C29.747 24.9018 24.6791 29.9113 18.4632 29.8754Z" 
      stroke="#70E242" 
      strokeWidth="0.566038"
    />
    <Path 
      d="M15.3476 19.755L10.1554 19.7249L10.1855 14.5327" 
      stroke="#70E242" 
      strokeWidth="1.73077" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <Path 
      d="M19.7296 10.2611L10.1553 19.7249" 
      stroke="#70E242" 
      strokeWidth="1.73077" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </Svg>
);

export const ExternalLinkRed = ({ width = 30, height = 31 }) => (
  <Svg width={width} height={height} viewBox="0 0 30 31" fill="none">
    <Rect 
      x="0.289601" 
      y="0.418519" 
      width="29.434" 
      height="29.434" 
      rx="11.2554" 
      fill="white" 
      fillOpacity="0.5"
    />
    <Rect 
      x="0.289601" 
      y="0.418519" 
      width="29.434" 
      height="29.434" 
      rx="11.2554" 
      stroke="#FF0000" 
      strokeWidth="0.566038"
    />
    <Path 
      d="M14.7174 10.5243L19.9097 10.5255L19.9085 15.7178" 
      stroke="#FF0000" 
      strokeWidth="1.73077" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
    <Path 
      d="M10.3882 20.0425L19.9095 10.5253" 
      stroke="#FF0000" 
      strokeWidth="1.73077" 
      strokeLinecap="round" 
      strokeLinejoin="round"
    />
  </Svg>
);