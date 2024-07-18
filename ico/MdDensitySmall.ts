import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * DensitySmall icon from Material Design icons
 * @module
 */
export function MdDensitySmall(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 2h18v2H3zM3 20h18v2H3zM3 14h18v2H3zM3 8h18v2H3z"},child:[]}]})(props);
}
export default MdDensitySmall;
