import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineArrowLeft icon from Material Design icons
 * @module
 */
export function MdOutlineArrowLeft(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M24 0v24H0V0h24z","opacity":".87"}},{tag:"path",attr:{d:"m14 7-5 5 5 5V7z"},child:[]}]})(props);
}
export default MdOutlineArrowLeft;
