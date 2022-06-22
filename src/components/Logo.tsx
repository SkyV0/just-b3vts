import { chakra, HTMLChakraProps } from '@chakra-ui/react'

export const Logo = (props: HTMLChakraProps<'svg'>) => (
  <chakra.svg
   color="on-accent"
    height="100"
    width="auto"
    viewBox="0 0 75 74.999997"
    preserveAspectRatio="xMidYMid meet" version="1.0"
    xmlns="http://www.w3.org/2000/svg"
     xmlnsXlink="http://www.w3.org/1999/xlink"
     zoomAndPan="magnify"
    {...props}
  >
  <defs>
  <filter x="0%" y="0%" width="100%" height="100%" id="id1">
  <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" color-interpolation-filters="sRGB"/></filter><filter x="0%" y="0%" width="100%" height="100%" id="id2">
  <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0.2126 0.7152 0.0722 0 0" color-interpolation-filters="sRGB"/>
  </filter>
  <image x="0" y="0" width="200" xlinkHref="data:image/png;base64,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" id="id3" height="200" preserveAspectRatio="xMidYMid meet"/><mask id="id4"><g filter="url(#id1)"><g filter="url(#id2)" transform="matrix(0.1875, 0, 0, 0.1875, 18.897061, 18.89706)">
  <image x="0" y="0" width="200" xlinkHref="data:image/png;base64,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" height="200" preserveAspectRatio="xMidYMid meet"/>
  </g>
  </g>
  </mask>
  <image x="0" y="0" width="200" xlinkHref="data:image/png;base64,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" id="id5" height="200" preserveAspectRatio="xMidYMid meet"/>
  </defs>
  <g mask="url(#id4)">
    <g transform="matrix(0.1875, 0, 0, 0.1875, 18.897061, 18.89706)">
      <image x="0" y="0" width="200" xlinkHref="data:image/png;base64,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" height="200" preserveAspectRatio="xMidYMid meet"/>
    </g>
    </g>
  </chakra.svg>
)
