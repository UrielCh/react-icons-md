import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NorthWest icon from Material Design icons
 * @module
 */
export function MdNorthWest(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M5 15h2V8.41L18.59 20 20 18.59 8.41 7H15V5H5v10z"},child:[]}]})(props);
}
export default MdNorthWest;
