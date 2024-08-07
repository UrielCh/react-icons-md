import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineOpenInFull icon from Material Design icons
 * @module
 */
export function MdOutlineOpenInFull(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M21 11V3h-8l3.29 3.29-10 10L3 13v8h8l-3.29-3.29 10-10z"},child:[]}]})(props);
}
export default MdOutlineOpenInFull;
