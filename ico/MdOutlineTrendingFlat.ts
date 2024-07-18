import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineTrendingFlat icon from Material Design icons
 * @module
 */
export function MdOutlineTrendingFlat(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"m22 12-4-4v3H3v2h15v3l4-4z"},child:[]}]})(props);
}
export default MdOutlineTrendingFlat;
