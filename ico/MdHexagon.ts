import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Hexagon icon from Material Design icons
 * @module
 */
export function MdHexagon(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M17.2 3H6.8l-5.2 9 5.2 9h10.4l5.2-9z"},child:[]}]})(props);
}
export default MdHexagon;
