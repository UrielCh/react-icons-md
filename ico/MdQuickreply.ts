import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * Quickreply icon from Material Design icons
 * @module
 */
export function MdQuickreply(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M22 4c0-1.1-.9-2-2-2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h9v-8h7V4z"},child:[]},{tag:"path",attr:{d:"M22.5 16h-2.2l1.7-4h-5v6h2v5z"},child:[]}]})(props);
}
export default MdQuickreply;
