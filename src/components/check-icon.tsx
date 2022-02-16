import * as React from "react";
import { SVGProps, Ref, forwardRef } from "react";

const SvgIconCheck = (
  props: SVGProps<SVGSVGElement>,
  ref: Ref<SVGSVGElement>
) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 11 9"
    ref={ref}
    {...props}
  >
    <path strokeWidth={2} d="M1 4.304L3.696 7l6-6" />
  </svg>
);

const ForwardRef = forwardRef(SvgIconCheck);
export default ForwardRef;

