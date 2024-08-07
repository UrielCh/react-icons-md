import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineSquare icon from Material Design icons
 * @module
 */
export function MdOutlineSquare(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 3v18h18V3H3zm16 16H5V5h14v14z"},child:[]}]})(props);
}
export default MdOutlineSquare;
