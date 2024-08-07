import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Polyline icon from Material Design icons
 * @module
 */
export function MdPolyline(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M15 16v1.26l-6-3v-3.17L11.7 8H16V2h-6v4.9L7.3 10H3v6h5l7 3.5V22h6v-6z"},child:[]}]})(props);
}
export default MdPolyline;
