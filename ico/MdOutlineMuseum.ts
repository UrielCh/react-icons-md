import { GenIcon } from "../deps.ts";
import type { IconBaseProps, JSX, VNode } from "../deps.ts";

/**
 * OutlineMuseum icon from Material Design icons
 * @module
 */
export function MdOutlineMuseum(props: IconBaseProps): VNode<JSX.SVGAttributes> {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M22 11V9L12 2 2 9v2h2v9H2v2h20v-2h-2v-9h2zm-4 9H6V9h12v11z"},child:[]},{tag:"path",attr:{d:"m10 14 2 3 2-3v4h2v-7h-2l-2 3-2-3H8v7h2z"},child:[]}]})(props);
}
export default MdOutlineMuseum;
