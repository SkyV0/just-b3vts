import { chakra, HTMLChakraProps } from '@chakra-ui/react'

export const Logo = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg
   color="on-accent"
    height="8"
    width="auto"
    viewBox="0 0 375 374.999991" 
    preserveAspectRatio="xMidYMid meet" version="1.0"
    xmlns="http://www.w3.org/2000/svg"
     xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
   <defs>
   <filter x="0%" y="0%" width="100%" height="100%" id="id1">
   <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" color-interpolation-filters="sRGB"/>
   </filter>
   <filter x="0%" y="0%" width="100%" height="100%" id="id2">
   <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0" color-interpolation-filters="sRGB"/>
   </filter>
   <clipPath id="id3"><path d="M 94.484375 94.484375 L 280 94.484375 L 280 280 L 94.484375 280 Z M 94.484375 94.484375 " clip-rule="nonzero"/>
   </clipPath>
   <image x="0" y="0" width="250" xlinkHref="data:image/png;base64,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" id="id4" height="250" preserveAspectRatio="xMidYMid meet"/>
   <mask id="id5">
    <g filter="url(#id1)">
    <g filter="url(#id2)" transform="matrix(0.744, 0, 0, 0.744, 94.485305, 94.485287)">
   <image x="0" y="0" width="250" xlinkHref="data:image/png;base64,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" height="250" preserveAspectRatio="xMidYMid meet"/>
   </g>
   </g>
   </mask>
   <image x="0" y="0" width="250" xlinkHref="data:image/png;base64,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" id="id6" height="250" preserveAspectRatio="xMidYMid meet"/>
   </defs>
   <g clip-path="url(#id3)">
    <g mask="url(#id5)">
    <g transform="matrix(0.744, 0, 0, 0.744, 94.485305, 94.485287)">
      <image x="0" y="0" width="250" xlinkHref="data:image/png;base64,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" height="250" preserveAspectRatio="xMidYMid meet"/>
      </g>
      </g>
      </g>
  </chakra.svg>
)
