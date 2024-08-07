import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * NetworkCell icon from Material Design icons
 * @module
 */
export function MdNetworkCell(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M2 22h20V2L2 22zm18-2h-3V9.83l3-3V20z"},child:[]}]})(props);
}
export default MdNetworkCell;
