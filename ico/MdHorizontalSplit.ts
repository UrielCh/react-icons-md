import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * HorizontalSplit icon from Material Design icons
 * @module
 */
export function MdHorizontalSplit(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M3 19h18v-6H3v6zm0-8h18V9H3v2zm0-6v2h18V5H3z"},child:[]}]})(props);
}
export default MdHorizontalSplit;
