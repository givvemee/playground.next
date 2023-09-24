import { forwardRef, memo } from 'react';

import { SvgContainer } from './style';
import { SvgProps } from './type';

export const Svg = memo(
  forwardRef<SVGSVGElement, SvgProps>(
    ({ children, viewBox, ...props }, ref) => {
      return (
        <SvgContainer
          {...props}
          viewBox={viewBox}
          css={{ ...props.css }}
          ref={ref}
        >
          {children}
        </SvgContainer>
      );
    }
  )
);

Svg.displayName = 'Svg';
