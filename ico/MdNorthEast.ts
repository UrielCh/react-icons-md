import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NorthEast icon from Material Design icons
 * @module
 */
export function MdNorthEast(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5H9z"},child:[]}]})(props);
}
export default MdNorthEast;
