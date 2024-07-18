import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineDragHandle icon from Material Design icons
 * @module
 */
export function MdOutlineDragHandle(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M20 9H4v2h16V9zM4 15h16v-2H4v2z"},child:[]}]})(props);
}
export default MdOutlineDragHandle;
