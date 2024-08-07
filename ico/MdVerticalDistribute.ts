import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * VerticalDistribute icon from Material Design icons
 * @module
 */
export function MdVerticalDistribute(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M22 2v2H2V2h20zM7 10.5v3h10v-3H7zM2 20v2h20v-2H2z"},child:[]}]})(props);
}
export default MdVerticalDistribute;
