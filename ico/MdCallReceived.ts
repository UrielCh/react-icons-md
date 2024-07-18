import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * CallReceived icon from Material Design icons
 * @module
 */
export function MdCallReceived(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 5.41 18.59 4 7 15.59V9H5v10h10v-2H8.41z"},child:[]}]})(props);
}
export default MdCallReceived;
