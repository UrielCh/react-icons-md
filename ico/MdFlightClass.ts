import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * FlightClass icon from Material Design icons
 * @module
 */
export function MdFlightClass(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M16 4h-2c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zM9.5 16H18v2H9.49c-.88 0-1.66-.58-1.92-1.43L5 8V4h2v4l2.5 8zM8 19h10v2H8v-2z"},child:[]}]})(props);
}
export default MdFlightClass;
